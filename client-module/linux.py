from subprocess import Popen
from time import sleep
def check_battery():
    return open('/sys/class/power_supply/BAT0/capacity').read().split()[0]

while True:
    sleep(1)
    level = check_battery()
    if level > '100':
        Popen(['notify-send','Please connect to the charger! '])