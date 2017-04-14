import pymysql.cursors
import RPi.GPIO as gpio
import time

gpio.setmode(gpio.BCM)
gpio.setup(8,gpio.OUT)
gpio.output(8,1)

database={'host':'somewhere.rds.amazonaws.com',
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
   
            print(result[0]["strength"],result[0]["status"])
            if(int(result[0]["strength"])>99 or int(result[0]["status"])==0):
                gpio.output(8,0)
                time.sleep(5)
                print("Cut off")
            else:
                gpio.output(8,1)
                time.sleep(5)
                print("active")


except:
            connection.close()
            gpio.output(8,0)
            gpio.cleanup()
finally:
            connection.close()
            gpio.output(8,0)
            gpio.cleanup()
            
