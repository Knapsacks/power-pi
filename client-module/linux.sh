#!/bin/bash
sudo apt-get install python3-venv
python3 -m venv power-pi
source power-pi/bin/activate
pip install --upgrade pip
pip install pymysql
python linux.py
deactivate
#etc

