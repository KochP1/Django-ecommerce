import pymysql
from os import getenv
from dotenv import load_dotenv

load_dotenv()

try:
    db = pymysql.connect(
        host = getenv('MYSQL_HOST'),
        user = getenv('MYSQL_USER'),
        password = getenv('MYSQL_PASSWORD')
    )

    cur = db.cursor()
    cur.execute('CREATE DATABASE django_ecommerce')
    print('ALL DONE')
except Exception as e:
    print(f'Error {e}')