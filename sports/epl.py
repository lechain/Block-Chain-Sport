#!/usr/bin/python
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

match_head = {}                 #数据库头部结构字典
match_info = {}
MATCH_TABLE = 't_match_epl'
POOL = PooledDB(creator=pymysql, mincached=3, maxcached=3, maxshared=3, maxconnections=3, host='106.75.60.190', user='root', passwd='3G_', db='guessing',\
                charset='utf8', port=3306, cursorclass=pymysql.cursors.DictCursor)
g_conn = POOL.connection()        #连接数据库 
API_URL_FMT = 'http://m.ppsport.com/pc/pclive/getMatchInfo.htm?seasonId=1271&competitionId=5&stageRoundId=2872_{}'
SQL_GET_MATCH_FMT = 'select home_club_name, match_id, guest_club_name, match_time,round, payed from {}'
SQL_INS_MATCH_FMT = 'insert into {} (home_club_name, home_club_logo, home_score, \
                guest_club_name, guest_club_logo, guest_score, \
                total_player, total_oc, win_bettor, win_oc, \
                lose_bettor, lose_oc, match_time) \
                value ({}, {},{},{},{},{},\
                0, 0,0,0, 0,0, {:d});"'

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
g_total_round = 38
g_due_time = []
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
        print('        [ERROR] exec sql failed{}'.format(e))
        _cursor.close()
        #conn.close()
        return False

def get_result_from_db(sql):
    conn =  g_conn       #连接数据库POOL.connection()
    cur = conn.cursor()
    try:
        cur.execute(sql)        #执行sql语句
        results = cur.fetchall()        #获取查询的所有记录
        cur.close()
        #conn.close()
    except Exception as e:
        print('exception', e)
        cur.close()
        #conn.close()
        return None
    if len(results) == 0:
        print('database results == 0' )
        results = []
       
    return results

############################## 赛事信息处理 #############################################

def dict_cmp(ld, rd):
   if None == ld or None == rd:
       return 1
   for key in ld.keys():
       if str(ld[key]) != str(rd[key]):
           return 1
   return 0
#
#arr_diff 找出两个字典数组的相同部分, 和各自的差异部分.
#src, dst 为要比较的两个字典数组, overlap 第一次调用传入None
#返回值src 为src与dst的差异部分,dst同理, opverlap为两个数组的相同部分
          
def match_diff(src, dst, overlap):
    if None == overlap:
        overlap = []
    #Todo para check 
    for i in range(len(src)):
        for j in range(len(dst)):
            cmp_keys = { 'home_club_name', 'guest_club_name', 'round'}
            _src = { key:src[i][key] for key in cmp_keys }
            _dst = { key:dst[j][key] for key in cmp_keys }
            if 0 == dict_cmp(_src, _dst):
                src[i].update(dst[j])
                overlap.append(src[i])
                del src[i]
                del dst[j]
                return match_diff(src, dst, overlap)
    return src, dst, overlap

def req_get(url):
    while True:
       try:
            _match = requests.get(url)
            break
       except requests.ConnectionError, e:
            logging.error(e)
            time.sleep(5)
    return _match

# get nba match info
def get_match_info():
    _url = API_URL_FMT.format(get_cur_round())
    print('        {}'.format(_url))
    resp = req_get(_url)
    data = resp.json()
    if True != data['result']:
         #Todo logging
         return None
    matches = data['data']
    ret = {}
    ret['count'] = len(matches)
    ret['matches'] = []
    
    for _mt in matches:
        _tmp = {}

        if _mt.get('homeTeamScore') == None:
            _tmp['home_score'] = 0
        else:
            _tmp['home_score']  = int(_mt.get('homeTeamScore'))

        if _mt.get('guestTeamScore') == None:
            _tmp['guest_score'] = 0
        else:
            _tmp['guest_score']  = int(_mt.get('guestTeamScore'))
        #nowork _tmp['home_score'] = [0, int(_mt.get('homeTeamScore'))][_mt.get('homeTeamScore') == None] #0 if type(_mt.get('homeTeamScore')) == None else int(_mt.get('homeTeamScore'))
       
        _tmp['home_club_name']  = _mt.get('homeTeamName')
        _tmp['home_club_logo']  = _mt.get('homeTeamLogo')
        _tmp['guest_club_name'] = _mt.get('guestTeamName')
        _tmp['guest_club_logo'] = _mt.get('guestTeamLogo')
        _tmp['round']           = _mt.get('round')
        _tmp['match_time']      = int(time.mktime(time.strptime(_mt.get('matchDateTime'), "%Y-%m-%d %H:%M:%S")))
        if int(_mt.get('matchStatus')) == 2:
             _tmp['match_state'] = 1
        else:
             _tmp['match_state'] = 0
        ret['matches'].append(_tmp)
    return ret
   

def convert(data):
    if isinstance(data, basestring):
        return str(data)
    elif isinstance(data, collections.Mapping):
        return dict(map(convert, data.iteritems()))
    elif isinstance(data, collections.Iterable):
        return type(data)(map(convert, data))
    else:
        return data

def do_insert(_list):
    if None == _list:
        return 0
    for ins in _list:
        other = {"total_player":0, "total_oc":0, "win_bettor":0, "win_oc":0, \
                 "lose_bettor":0, "lose_oc":0}
        _tmp = collections.OrderedDict()
        _tmp.update(other)
        _tmp.update(convert(ins))
        print ('\n        insert item: {}'.format(json.dumps(ins,ensure_ascii=False)))

        qmarks = ','.join('"{}"'.format(str(item)) for item in _tmp.values())
        cols = ', '.join(_tmp.keys()) # 字段名
        _sql = "insert into %s (%s) values (%s)" % (MATCH_TABLE, cols, qmarks)
        print(_sql)
        ret = exec_sql(_sql)
        if None == ret:
            #Todo log 
            continue
    return 0    

def do_update(_list):
    if None == _list:
        return 0
    for upd_info in _list:
        if int(upd_info['match_state']) == 0:
            continue
        if int(upd_info['payed']) == 1:
            continue
        print ('\n        update info: {}'.format(json.dumps(upd_info,ensure_ascii=False)))
        _sql = 'update {} set home_score={}, guest_score={}, match_state={} where match_id = {}'\
               .format(MATCH_TABLE, upd_info['home_score'], upd_info['guest_score'], upd_info['match_state'], upd_info['match_id'])
        ret = exec_sql(_sql)
        ret = True
        print('        sql: ret={} {}'.format(ret, _sql))
        if None == ret:
            #Todo log 
            continue
    return 0

def update_match_info():
    print('{}'.format(datetime.now().strftime( "%Y-%m-%d  %H:%M:%S"))) 
    api_data = get_match_info()
    db_data = get_result_from_db(SQL_GET_MATCH_FMT.format(MATCH_TABLE))
  
    if None == api_data or None == db_data:
        #Todo log
        return 
    src, dst, overlap = match_diff(api_data['matches'], db_data, None)

    #insert new data

    do_insert(src)

    #update change 
    do_update(overlap)
    #delete useless data

def init_due_time():
    time_list = []
    for i in range(1, g_total_round):
        _url = API_URL_FMT.format(i)
        resp = req_get(_url)
        data = resp.json()
        if True != data['result']:
           #Todo logging
           return None
        matches = data['data']
        last = 0
        for j in range(len(matches)):
            match_time = matches[j]['matchDateTime']
            if match_time > last:
                last = match_time
        _kickoff = datetime.strptime(last, "%Y-%m-%d %H:%M:%S")
        _fin = _kickoff + timedelta(hours=3) #考虑时差, 延迟更新时间
        time_list.append(_fin)
    return time_list


def get_cur_round():
     time_list = g_due_time
     _now = datetime.now()
     for i in range(len(time_list)):
        if time_list[i] > _now:
            break
     return i + 1

if __name__ == "__main__":
    g_due_time = init_due_time()
    update_match_info()
