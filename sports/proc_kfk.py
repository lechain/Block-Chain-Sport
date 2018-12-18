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

from flask_cors import *
from flask import Flask
from flask import request
from flask import make_response, jsonify
from kafka import KafkaConsumer, TopicPartition
from DBUtils.PooledDB import PooledDB
from gevent import monkey
from gevent.pywsgi import WSGIServer

############### Global varables ####################3
BOOTSTRAP_SERVERS='k9002i.bjxy.db.lecloud.com:9002'
TOPIC='lecloud.securitycenter.onechain.organization.transaction.status.c0992b21c46db7931045581da65ad901'

#POOL = PooledDB(MySQLdb, 100, host='localhost', user='root', passwd='3obtyBR$87I{|xG_', db='guessing',charset='utf8', port=3306)
POOL = PooledDB(creator=pymysql, mincached=3, maxcached=3, maxshared=3, maxconnections=3, host='106.75.60.190', user='root', passwd='3obtyBR$87I{|xG_', db='guessing',\
                charset='utf8', port=3306, cursorclass=pymysql.cursors.DictCursor)
#POOL = PooledDB(MySQLdb, 100, host='106.75.60.190', user='root', passwd='3obtyBR$87I{|xG_', db='guessing',charset='utf8', port=3306)
g_conn = POOL.connection()        #连接数据库

##############r Set characters ####################3
reload(sys)
sys.setdefaultencoding( "utf8" )

def prn_obj(obj):
    print '\n'.join(['%s:%s' % item for item in obj.__dict__.items()])


#########################    MySQL Operation    ###############################################
def exec_sql(sql):
    #conn = POOL.connection()        #连接数据库 
    conn = g_conn
    _cursor = conn.cursor()
    try: 
        _cursor.execute(sql)
        conn.commit()
        _cursor.close()
        return True
    except Exception as e:
        print(e)
        _cursor.close()
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

def kafka_process():
    consumer = KafkaConsumer(TOPIC,
                                 bootstrap_servers=BOOTSTRAP_SERVERS,
                                 auto_offset_reset='earliest',
                                 #auto_offset_reset='latest',
                                 security_protocol='SASL_PLAINTEXT',
                                 sasl_mechanism='PLAIN',
                                 sasl_plain_username='onechain',
                                 sasl_plain_password='onechain-secret',
                                 api_version=(0,10),
                                 receive_buffer_bytes=1024,
                                 enable_auto_commit=False)
    consumer.subscribe([TOPIC])
    for msg in consumer:
        trans = json.loads(msg.value)
        print(trans)
        if trans:
             table = 't_' + trans['org_transid'].split('-', 1)[0]
             _srch = 'select * from {} where transid={}'.format(table, trans['transid'])
             data = get_result_from_db(_srch)
             if data == None or len(data) == 0:
                 qmarks = ','.join('"{}"'.format(str(item)) for item in trans.values())
                 cols = ', '.join(trans.keys()) # 字段名
                 _sql = "insert into %s (%s) values (%s)" % (table, cols, qmarks)
             else:
                 _sql = 'update {} set status={} where transid={} and status!=1 and status!=2'.format(table, trans['status'], trans['transid'])
             print(_sql)
             ret = exec_sql(_sql)
             if None == ret:
                 #Todo log 
                 continue
             #consumer.commit()
if __name__ == "__main__":
    kafka_process()
    g_conn.close()
