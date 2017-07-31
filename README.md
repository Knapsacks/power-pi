# Power-Pi
### Optimizing Power Sockets for Phantom Load

## Background

No Consumer Electronic device is Ideal. That is, some electrical energy is lost in the form of dissipation (like eddy current loss, joules heating loss, hysteresis etc.) Similarly, devices also lose energy while idling. That is, on standby mode. In technical terms, this is also called No Load Power, Vampire Power, Phantom Load or Leaking electricity.

![Transformer](https://github.com/ankitrai96/power-pi/blob/master/resourcestransformer.gif)

If there is no current flowing in the secondary side , there is no de-magnetising flux generated that means there is no need to draw more current from the source . So primary current would contain only the exciting current (i.e. 'NO LOAD CURRENT').

![Phasor diagram to demonstrate no-load power factor](https://github.com/ankitrai96/power-pi/blob/master/resources/phasor.gif)

On a macroscopic scale, such taken for granted tiny idling load accounts for enormous power wastage over time.

## General Overview 

1. Power-Pi is the manifestation of Internet of Things. It reflects the elegant power of Raspberry Pi to control Direct current based electronics, which here inturn controls Alternating Current (Power Sockets). A python based Daemon for linux (or a service for windows) updates a database on cloud. The database contains the Mac Address(unique) of devices, its charging status (charging/discharging) and strength of battery
2. The above database is accessed by a Raspberry Pi (and thence implementing the core essence of IoT). The data received is then processed on raspberry-pi to control a relay switch accordingly
3. The relay switch (embedded on Power Socket) acts as an auxiliary circuit underneath the primary switch. So that even when someone forgets to pull the plug or switch off power socket, the Power Pi opens the circuit
4. Moreover, the data can be processed to analyze power consumption and conservation

## Getting Started with Power Pi

### Daemon

1. Download 'client-module.zip' (from this repository)
2. Extract 'client-module.zip'

3. Change Directory to the path of the Client-Module in Terminal 

4. ```
   cd path/to/client-module
   
5. Change Permissions to make it executable

6. ```
   sudo chmod +x linux.sh

7. RUN the script

8. ```
   ./linux.sh

### Mobile Application for monitoring

Power-Pi also has an android mobile application (PowerPi.apk) which has been developed keeping in mind the need to visualize the entire process. It facilitates the user to see how much energy his Power-Pi setup is saving. Additionaly, the same app can also be doubled up as a home automation interface working on top of the same Power-Pi setup.

![Walkthrough of Mobile App](https://github.com/ankitrai96/power-pi/blob/master/resources/animatedWalkThrough.gif)
