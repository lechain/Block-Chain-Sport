# -*- coding: utf-8 -*
import os
import sys
import time
import json
import pymysql
import hashlib
import logging
import MySQLdb
import requests
import datetime
import threading
import collections

from datetime import datetime
from datetime import timedelta
from DBUtils.PooledDB import PooledDB

############### Global varables ####################3

POOL = PooledDB(creator=pymysql, mincached=3, maxcached=3, maxshared=3, maxconnections=3, host='localhost', user='root', passwd='3G_', db='guessing',\
                charset='utf8', port=3306, cursorclass=pymysql.cursors.DictCursor)
g_conn = POOL.connection()        #连接数据库 

############### error infomation define ####################
err_no_data           = {"code":101, "msg":"Unable to fetch data from database."}
err_exec_failed       = {"code":102, "msg":"Failed to execute SQL Statement."}
err_ivd_match_type    = {"code":105, "msg":"Invalid match type."}
err_bet_time_out      = {"code":104, "msg":"Betting timed out."}
err_param_ivd         = {"code":200, "msg":"Invalid parameter"}
err_param_ivd_addr    = {"code":201, "msg":"Invalid address format"}
err_param_mis_addr     = {"code":202, "msg":"Missing parameter address"} 

##############r Set characters ####################3
reload(sys)
sys.setdefaultencoding( "utf8" )

def prn_obj(obj):
    print '\n'.join(['%s:%s' % item for item in obj.__dict__.items()])

#########################    MySQL Operation    ###############################################
def exec_sql(sql):
    conn = g_conn       #连接数据库
    _cursor = conn.cursor()
    try: 
        _cursor.execute(sql)
        conn.commit()
        _cursor.close()
        #conn.close()
        return True
    except Exception as e:
        print(e)
        _cursor.close()
        #conn.close()
        return False

def get_result_from_db(sql):
    conn =  g_conn       #连接数据库POOL.connection()
    cur = conn.cursor()
    try:
        cur.execute(sql)        #执行sql语句
        conn.commit()
        results = cur.fetchall()        #获取查询的所有记录
        cur.close()
        #conn.close()
    except Exception as e:
        print('exception', e)
        cur.close()
        #conn.close()
        return None
    if len(results) == 0:
        results = []
       
    return results

 


def update_match_info():
    while True:
        clear_cache = [] 
        trans = get_result_from_db('select * from t_sports where used=0')
        if  None == trans or 0 == len(trans):
            #print("No data find")
            #Todo log
            continue
       
        for _ts in trans:
            _sql_get = 'select match_id, match_type,bet,stake,id from t_bet where org_trans_id="{}"'.format(_ts['org_transid'])
            #print(_sql_get) 
            bets = get_result_from_db(_sql_get)
            if None == bets or len(bets) == 0:
               #print("No data find")
               continue
            else:
                bet_info = bets[0]
                if int(bet_info['bet']) == 0:
                     keys = "win_oc"
                elif int(bet_info['bet']) ==  1:
                     keys = "draw_oc"
                elif int(bet_info['bet']) ==  2:
                     keys = "lose_oc"
                else:
                    print('invalid bet value {}'.format(j['bet']))
                
                if _ts['status'] == 1:
                    _upd_stake = 'update t_match_{} set {}={}+{}, total_oc=total_oc+{} where match_id={}'\
                             .format(bet_info['match_type'], keys, keys, bet_info['stake'], bet_info['stake'],bet_info['match_id'])
                    print(_upd_stake)
                    if  exec_sql(_upd_stake):
                        print("update stake success: {}".format( _upd_stake));    

                if _ts['status'] == 1 or _ts['status'] == 2:
                     _set_used = 'update t_sports set used=1 where transid={}'.format(_ts['transid'])
                     if exec_sql(_set_used):
                        print("update used success")
                
                _upd_state = 'update t_bet set trans_state={},trans_id={} where org_trans_id="{}" '.format(_ts['status'], _ts['transid'], _ts['org_transid'])
                print(_upd_state)
                if exec_sql(_upd_state):
                    print("update state return true")      
                if not bet_info['match_type'] in clear_cache:
                    clear_cache.append(bet_info['match_type'])
                    print(clear_cache) 
        time.sleep(1)
        #for _type in clear_cache:
        #    _url = 'https://api-games.onechain.life/purge/sports/matchinfo/' + _type
        #    requests.get(_url)
        #clear_cache =[]    
if __name__ == "__main__":
   update_match_info()
