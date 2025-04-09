import mysql.connector
from os import getenv
from dotenv import load_dotenv

load_dotenv()

try:
    dataBase = mysql.connector.connect(
    host = getenv('MYSQL_HOST'),
    user = getenv('MYSQL_USER'),
    passwd = getenv('MYSQL_PASSWORD')
    )

    # cursor object

    cursorObject = dataBase.cursor()

    # Create database
    cursorObject.execute('CREATE DATABASE django_ecommerce')
    print('ALL Done')
except Exception as e:
    print(f'Error: {e}')