#!/usr/bin/python
# -*- coding: utf-8 -*
from __future__ import division
import os
import sys
import time
import json
import base64
import urllib2
import pymysql
import hashlib
import logging
import MySQLdb
import requests
import datetime
import threading
import binascii 
import collections 
 
from ctypes import *
from Crypto.Cipher import AES
from datetime import datetime
from datetime import timedelta
from DBUtils.PooledDB import PooledDB


############### Global varables ####################3

match_head = {}                 #数据库头部结构字典
match_info = {}
match_type=['csl', 'cba', 'epl', 'nba']
#SPORTS_ORG_ADDR = "0xc748a16a533431ba8a3b7794cbac7a016f81fc6c"
#SPORTS_ORG_KEY = "0"
#SERVER_TESTLINE = "http://10.11.178.43:9999/"

#ONLINE Env
ORG_ID = 16
ORG_PWD = "Nj"
SPORTS_ORG_ADDR = "0x1baa5dd04d1da02e43d15471f2dc8c2e51c7c1b0"
SPORTS_ORG_KEY = "cad901"
SERVER_ONLINE = " http://api.onechain.life"
POOL = PooledDB(creator=pymysql, mincached=3, maxcached=3, maxshared=3, maxconnections=3, host='106.75.60.190', user='root', passwd='3G_', db='guessing',\
                charset='utf8', port=3306, cursorclass=pymysql.cursors.DictCursor)
g_conn = POOL.connection()        #连接数据库 



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
        print('exec ', sql, e)
        _cursor.close()
        #conn.close()
        return False

def get_result_from_db(sql):
    print('======= database get reult')
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

       

def http_post(url, data_json):
    jdata = json.dumps(data_json)
    req = urllib2.Request(url, jdata)
    prn_obj(req)
    response = urllib2.urlopen(req)
    return response.read()

class aescrypt():
    def __init__(self, key, iv):
        self.key = key
        self.mode = AES.MODE_CBC
        self.iv = iv

    #加密函数，如果text不是16的倍数【加密文本text必须为16的倍数！】，那就补足为16的倍数

    def encrypt(self, plain_text):
        block_size = AES.block_size
        cryptor = AES.new(self.key, self.mode, self.iv)
        pad_len = block_size - len(plain_text) % block_size
        padtext = chr(pad_len) * pad_len
        #padding =  bytes(plain_text, encoding='utf8') + bytes(padtext, encoding='utf8')
        padding =  bytes(plain_text) + bytes(padtext)
        cipher_text = cryptor.encrypt(padding)
        return cipher_text

def pay_req(to_addr, amount, org_trans_id, desc):
    #Check the input parameter   #Todo

    #加密填充sign字段 
    _now = int(time.time())
    _amount = '%0.4f'%amount
    post_json = collections.OrderedDict()    #order dict
    post_json["from"] = SPORTS_ORG_ADDR
    post_json["to"]  = to_addr
    post_json["tokenid"] = 1
    post_json["amount"] = float(_amount)
    post_json['org_transid'] = org_trans_id + '-payback'    #fixed
    post_json["orgid"] = ORG_ID

    sign_data = json.dumps(post_json)
    #print('KEY:', SPORTS_ORG_KEY)
    #print('IV:' , SPORTS_ORG_KEY[0:16])

    #print(sign_data)
    _aes = aescrypt(SPORTS_ORG_KEY, SPORTS_ORG_KEY[0:16])
    enc_txt = _aes.encrypt(sign_data)
    _enc_sign = base64.b64encode(enc_txt)
    # print(enc_txt)
    # print('base64', _enc_sign) 
    post_json["passwd"] = ORG_PWD
    post_json["desc"] = desc

    post_json["sign"] = _enc_sign
    post_json["time"] = _now

    #MD5crypto字段
    crypto = '{"orgid":16, "orgkey":cd901, "time":' + str(_now) +'}'
    #print("crypto_str") #debug
    #print(crypto)       #debug
    post_json["crypto"] = hashlib.md5(crypto).hexdigest()

    # _post_data = json.dumps(post_json)
    # print(post_json)
    #发送请求返回结果
    ret = http_post("{}/chain/api/transaction?action=transfer".format(SERVER_ONLINE), post_json)
    return ret


def do_pay(_match, _type):

    # there is no match results
    if _match['match_state'] == 0:
        return 1
    # home_score": 0, "guest_score
    _hs = int(_match['home_score'])
    _gs = int(_match['guest_score'])
    # results
    if _hs > _gs:
        results = 0
        key = 'win_oc'
    elif _hs == _gs:
        results = 1
        key = 'draw_oc'
    else:
        results = 2
        key = 'lose_oc'
    print(_type, _match['match_id'])
    _sql = 'select id,address, stake,org_trans_id from t_bet where match_type="{}" and match_id={} and bet={} and trans_state=1'\
            .format(_type, _match['match_id'], results)
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    print(_sql)
    winners = get_result_from_db(_sql)
    print("winners count", len(winners))
    earn = (long(_match['total_oc']) - long(_match[key])) * 0.99
    base = long(_match[key])
    
    #Generate remark info for payback transaction
    if _match.has_key("draw_oc"):
       desc = "竞猜派奖: 总竞猜 {} oc 主队胜 {} oc 两队平 {} oc 客队胜 {} oc, 奖金包含竞猜本金".format(\
              long(_match['total_oc']), long(_match['win_oc']), long(_match['draw_oc']), long(_match['lose_oc']))
    else:
       desc = "竞猜派奖: 总竞猜 {} oc, 主队胜 {} oc, 客队胜 {} oc, 奖金包含竞猜本金".format(\
             long(_match['total_oc']), long(_match['win_oc']), long(_match['lose_oc']))

    
    for i in range(len(winners)):
        #print(winners[i])
        stake = long(winners[i]['stake'])
        desc_per = desc  + ' {} oc'.format(stake)
        print(stake, base, earn,  'rate: ', (stake/base), 'win: ', (stake/ base)* earn)
        income = (stake / base) * earn + stake
        print ("paybak to {} amount {} match {} id {}".format(winners[i]['address'], income, _type, _match['match_id']) )
        resp_str = pay_req(winners[i]['address'], income, winners[i]['org_trans_id'], desc_per) #Mod add para trans id #fixed
        resp = json.loads(resp_str)
        if resp['code'] != 0:
            #logging.error('Send award failed:' + json.dumps(resp))
            print(resp)
            continue
        _sql_upd = 'update t_bet set pb_trans_id ={}, income={} where id={}'.\
                  format(resp['transid'], income, winners[i]['id'])
        print(_sql_upd)
        exec_sql(_sql_upd)
    _sql_pay = 'update t_match_{} set payed=1 where match_id={}'.format(_type, _match['match_id'])
    exec_sql(_sql_pay)
    return 0



def send_award():
    for i in match_type:
        _sql = 'select * from t_match_' + i
        print(_sql)
        match_info = get_result_from_db(_sql)
        if None == match_info:
             continue
        for j in range(len(match_info)):
            do_pay(match_info[j], i)



if __name__ == "__main__":
    send_award()
