#!/bin/bash
echo $"





 _______  _______           _______  _______         _______ _________
(  ____ )(  ___  )|\     /|(  ____ \(  ____ )       (  ____ )\__   __/
| (    )|| (   ) || )   ( || (    \/| (    )|       | (    )|   ) (
| (____)|| |   | || | _ | || (__    | (____)| _____ | (____)|   | |
|  _____)| |   | || |( )| ||  __)   |     __)(_____)|  _____)   | |
| (      | |   | || || || || (      | (\ (          | (         | |
| )      | (___) || () () || (____/\| ) \ \__       | )      ___) (___
|/       (_______)(_______)(_______/|/   \__/       |/       \_______/







"
sudo apt-get install python3-venv
python3 -m venv power-pi
source power-pi/bin/activate
pip install --upgrade pip
pip install pymysql
nohup python linux.py &
deactivate
#etc
