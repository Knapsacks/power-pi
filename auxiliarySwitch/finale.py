import pymysql.cursors
import RPi.GPIO as gpio
import time

gpio.setmode(gpio.BCM)
gpio.setup(8,gpio.OUT)
gpio.output(8,0)
n = int(input("Enter strength: "))

database={'host':'hidden.rds.amazonaws.com',
'user':'anon',
'password':'secret',
'db':'workiot',}

try:
    while True:
            connection = pymysql.connect(host=database['host'],
                                        user=database['user'],
                                        password=database['password'],
                                        db=database['db'],
                                        charset='utf8mb4',
                                        cursorclass=pymysql.cursors.DictCursor)
            with connection.cursor() as cursor:
                            sql = "SELECT * FROM client WHERE mac LIKE '%s' ORDER BY ID DESC LIMIT 1"
                            cursor.execute(sql,(131996026774851))
                            connection.commit()
                            result=cursor.fetchall()
   
            if(result[0]["strength"]>99 and result[0]["status"]!=0):
                gpio.output(8,1)
                time.sleep(5)
            else:
                gpio.output(8,0)
                time.sleep(5)


except:
            connection.close()
            gpio.output(8,0)
            gpio.cleanup()
finally:
            connection.close()
            gpio.output(8,0)
            gpio.cleanup()
            
