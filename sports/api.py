#! /usr/bin/python
# -*- coding: utf-8 -*
import time
import json
import pymysql
import hashlib
import logging
#import conf.db as DB

from time import gmtime, strftime
from flask_cors import *
from flask import Flask
from flask import request
from flask import make_response
from DBUtils.PooledDB import PooledDB
from gevent import monkey
from gevent.pywsgi import WSGIServer
from flask import g

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

DB_TABLE_BET = 't_bet'
POOL = PooledDB(creator=pymysql, mincached=10, maxcached=10, maxshared=20, maxconnections=100, host='localhost', user='root', passwd='3G_', db='guessing',charset='utf8', port=3306, cursorclass=pymysql.cursors.DictCursor)
app = Flask(__name__)           # web server global var
CSL_BETTING_ROUND = 1          #中超当前竞猜轮次
SQL_SRCH_MY_BET_FMT = 'select  bet, stake, bet_time,match_state,home_club_name, home_club_logo, home_score, guest_club_name,\
                    guest_club_logo,guest_score, income, match_time,match_type, match_id, id, trans_id, pb_trans_id,trans_state from {} where address="{}"  and trans_state < 5 \
                   order by bet_time desc limit {}, {}'
SQL_BET_STATIS_FMT = 'select bet,stake, match_id, trans_state from t_bet \
                             where match_type="{}" and trans_state=1 and match_time={} \
                             and home_club_name="{}" and guest_club_name="{}"'
    

err_no_data              = {"code":101, "msg":"Unable to fetch data from database."}
err_exec_failed          = {"code":102, "msg":"Failed to execute SQL Statement."}
err_bet_time_out         = {"code":104, "msg":"Betting timed out."}
err_ivd_match_type       = {"code":105, "msg":"Invalid match type."}
err_param_ivd            = {"code":400, "msg":"Invalid parameter."}
err_ok                   = {"code":200, "msg":"success"}
@app.before_request
def before_request():
    g._db = POOL.connection()  

@app.teardown_request
def teardown_request(exception):
    if hasattr(g, '_db'):
        g._db.close()

##############r Set characters ####################3
#reload(sys)
#sys.setdefaultencoding( "utf8" )

def prn_obj(obj):
    print '\n'.join(['%s:%s' % item for item in obj.__dict__.items()])

########################f  MySQL Operation    ###############################################
def exec_sql(sql, args=()):
    db = getattr(g, '_db', None)
    _cursor = db.cursor()
    try: 
        _cursor.execute(sql)
        db.commit()
        _cursor.close()
        return 0
    except Exception as e:
        _cursor.close()
        print e
        #raise Exception(e)
        return 1

def query_db(query, args=()):
    db = getattr(g, '_db', None)
    if db is None:
        return [err_param_ivd]
    
    cur = db.cursor()
    try:
        cur.execute(query, args)
    except Exception as e:
        cur.close()
        return [perr_exec_failed]

    res = cur.fetchall()
    if len(res) == 0: 
        cur.close()
        return []

    cur.close()
    return res


#################################   web server ###############################################
@app.route('/sports/bet', methods=['POST'])
def do_bet():  
    #Todo check input
    dict = request.get_json()
    print(dict)
    _sql = 'select match_time from t_match_{} where match_id={}'.format(dict['match_type'], dict['match_id'])
    _now = int(time.time())
    _match_tm = query_db(_sql)
    
    if _now + 600 > int(_match_tm[0]['match_time']):
        return gen_response(err_bet_time_out, 400)
        
    #dict.update({'bet_time': time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time()))})
    dict.update({'bet_time': int(time.time())})
    trans = json.dumps(dict)
    #org_trans_id = 'sports-' + hashlib.md5(trans).hexdigest() #Mod
    org_trans_id = 'sports-' + dict['mobile'] + str(int(round(time.time() * 1000))) #fixed
    dict.update({'org_trans_id':org_trans_id})
    dict.update({'trans_state':5})
    dict.update({'trans_id': None})
    print(dict)
    _ls = list(dict)

    # insert into table t_player
    ins_sql = 'insert into ' + DB_TABLE_BET + ' (' + ','.join(_ls) + ') values (' + ','.join(['"{}"'.format(dict[field]) for field in _ls]) + ');'
    print(ins_sql)
    ret = exec_sql(ins_sql)
    if ret:
        dict = err_exec_failed 
        st_code = 500
    else:
        dict = {'org_trans_id':org_trans_id}
        st_code=200
    return gen_response(dict, st_code)


############################## 前端赛事信息接口 #############################################
def gen_response(data, code):
    resp = make_response(json.dumps(data))
    resp.headers['Content-Type'] = 'application/json; charset=utf-8'
    resp.status_code = code
    #resp.headers['Cache-Control'] = 'no-cache'
    resp.headers['Cache-Control'] = 'no-store'
    return resp


def gen_response_cache(data, code):
    resp = make_response(json.dumps(data))
    resp.headers['Content-Type'] = 'application/json; charset=utf-8'
    resp.headers['Last-Modified'] = strftime("%a, %d %b %Y %H:%M:%S GMT", gmtime())
    resp.headers['Cache-Control'] = 'public, max-age=3600, must-revalidate'
    #resp.headers['Cache-Control'] = 'public, no-cache'
    #resp.headers['Cache-Control'] = 'no-cache'
    resp.status_code = code
    return resp


@app.route('/sports/matchinfo/<match_type>')
def get_matchinfo(match_type):
    support_type = ['csl', 'cba', 'nba', 'epl']
    if match_type in support_type:
        sql = 'select * from t_match_{} where payed=0 order by total_oc desc'.format(match_type)
        info = query_db(sql)
        #print(info)
        if len(info) == 0:
            sql = 'select * from t_match_{} order by match_id DESC limit 8'.format(match_type)
            info = query_db(sql)
        st_code = 200
        #return gen_response_cache(info, st_code)
        return gen_response(info, st_code)
    else:
        info = [err_ivd_match_type] 
        st_code = 400
   
    return gen_response(info, st_code)
 
@app.route('/sports/matchinfo/mine', methods=['post', 'get'])
def get_mine_bet():
    global DB_TABLE_BET
    _st_code = 200
    address = request.args.get('addr')
    page = request.args.get('page')
    limit = request.args.get('limit')
    if address is None:
        return gen_response(err_param_ivd, 400)

    elif len(address) !=42 or not address.startswith('0x'):
        return gen_response(err_param_ivd, 400)

    if page == None or limit == None:
        #print ('default limit') #debug
        page = 0
        limit = 20
    _offset = int(page) * int(limit)
    _sql = SQL_SRCH_MY_BET_FMT.format(DB_TABLE_BET, address, _offset, limit)
    #info = get_dict_from_db(_sql)
    #count = get_dict_from_db('select count(*) from t_bet where address="{}" and trans_state < 5'.format(address))
    info = query_db(_sql)
    print(info)
    count = query_db('select count(*) from t_bet where address="{}" and trans_state < 5'.format(address))
        #print(info) #debug
    ret = {}
    if 0 == count[0]['count(*)']:
        #info = '{"ERROR":"Unable to get data."}'
        _st_code = 200
        ret['count'] = 0
        ret['matches'] = []
    else:
        for i in range(len(info)):
            match_info = query_db('select * from t_match_{} where match_id={}'.format(info[i]['match_type'], info[i]['match_id']))
            if len(match_info) == 0:
                continue
            info[i].update(match_info[0])
        ret['matches'] = info
        ret['count'] = count[0]['count(*)'] 
    
    return gen_response(ret, _st_code)

def  web_server():
    ##### normal mode
    app.run(host='0.0.0.0', port=15110, debug=False,threaded=True)
    app.debug = True
    handler = logging.FileHandler('flask.log')
    app.logger.addHandler(handler)
    #CORS(app, supports_credentials=True)
    WSGIServer(('0.0.0.0', 15110), app).serve_forever()

    #use tornado
    #app = make_app()
    #server = tornado.httpserver.HTTPServer(app)
    #server.bind(15110)
    #server.start(0)  # forks one process per cpu
    
    #######  
    #http_server = HTTPServer(WSGIContainer(app))
    #http_server.listen(80)
    #IOLoop.instance().start()


if __name__ == "__main__":
        web_server()
