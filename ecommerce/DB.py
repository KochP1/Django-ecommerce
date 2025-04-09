import pymysql

try:
    db = pymysql.connect(
        host = '',
        user = '',
        port = '',
        password = ''
    )

    cur = db.cursor()
    cur.execute('CREATE DATABSE "django_ecommerce"')
    print('ALL DONE')
except Exception as e:
    print(f'Error {e}')