from subprocess import Popen
from time import sleep
from uuid import getnode
import pymysql.cursors
import json

def check_battery():
    return open('/sys/class/power_supply/BAT0/capacity').read().split()[0]

def check_status():
    if open('/sys/class/power_supply/BAT0/status').read().split()[0]=='Discharging':
        return 0
    else:
        return 1

#AWS CREDENTIALS
database=json.loads(open('db.json').read())[0]

mac = getnode()
strength = check_battery()
status = check_status()

try:
            connection = pymysql.connect(host=database['host'],
                                        user=database['user'],
                                        password=database['password'],
                                        db=database['db'],
                                        charset='utf8mb4',
                                        cursorclass=pymysql.cursors.DictCursor)
            with connection.cursor() as cursor:
                            sql = "INSERT INTO `client` (`mac`, `strength`, `status`) VALUES (%s, %s, %s)"
                            cursor.execute(sql,(mac, strength, status))
                            connection.commit()

finally:
        connection.close()

while True:
    sleep(1)
    print(mac, check_battery(), check_status())
    if strength!=check_battery() or status!=check_status():
        print('Change Occured')
        strength = check_battery()
        status = check_status()
        try:
            connection = pymysql.connect(host=database['host'],
                                        user=database['user'],
                                        password=database['password'],
                                        db=database['db'],
                                        charset='utf8mb4',
                                        cursorclass=pymysql.cursors.DictCursor)
            with connection.cursor() as cursor:
                            sql = "INSERT INTO `client` (`mac`, `strength`, `status`) VALUES (%s, %s, %s)"
                            cursor.execute(sql,(mac, strength, status))
                            connection.commit()
        finally:
                connection.close()
    if int(strength) > 100:
        Popen(['notify-send','Please disconnect to the charger!'])