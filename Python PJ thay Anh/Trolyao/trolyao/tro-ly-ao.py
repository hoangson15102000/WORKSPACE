from email.mime import audio
import speech_recognition
import pyttsx3
import tkinter
from paho.mqtt import client as mqtt
broker_address="broker.hivemq.com"
client=mqtt.Client("P1")
client.connect(broker_address)
client.loop_start()
robot_mouth = pyttsx3.init()
robot_ear = speech_recognition.Recognizer()
robot_brain =""
while True:
    with speech_recognition.Microphone() as mic:
        print("Robot: I'm listening")
        audio = robot_ear.listen(mic)
    print("robot ...")
    try:
        you = robot_ear.recognize_google(audio)
    except:
        you = ""

    print("you:" + you)
    
    if you == "":
        robot_brain = "I cant hear you, try again"
    elif "hello" in you:
        robot_brain = "Hello Teacher"
    elif "turn on one" in you:
        robot_brain = "turn on one"
        print("robot:" + robot_brain)
        client.publish("S1","1")
    elif "turn off one" in you:
        robot_brain = "turn off  one"
        print("robot:" + robot_brain)
        client.publish("S1","0")
    elif you == "turn on two":
        robot_brain = "turn on two"
        print("robot:" + robot_brain)
        client.publish("S2","1")
    elif you == "turn off  two":
        robot_brain = "turn off two"
        print("robot:" + robot_brain)
        client.publish("S2","0")
    elif you == "turn on three":
        robot_brain = "turn on  three"
        print("robot:" + robot_brain)
        client.publish("S3","1")
    elif you == "turn off three":
        robot_brain = "turn off three"
        print("robot:" + robot_brain)
        client.publish("S3","0")
    elif you == "turn on the light four":
        robot_brain = "turned on the light four"
        print("robot:" + robot_brain)
        client.publish("S11","1")
    elif you == "turn off the light four":
        robot_brain = "turned off the light four"
        print("robot:" + robot_brain)
        client.publish("S11","0")
    elif you == "turn on the light five":
        robot_brain = "turned on the light five"
        print("robot:" + robot_brain)
        client.publish("S22","1")
    elif you == "turn off the light five":
        robot_brain = "turned off the light five"
        print("robot:" + robot_brain)
        client.publish("S22","0")
    elif you == "turn on the light six":
        robot_brain = "turned on the light six"
        print("robot:" + robot_brain)
        client.publish("S33","1")
    elif you == "turn off the light six":
        robot_brain = "turned off the light six"
        print("robot:" + robot_brain)
        client.publish("S33","0")
    elif "bed" in you:
        robot_brain = "good night"
        print("robot:" + robot_brain)
        client.publish("S1","0")
        client.publish("S2","0")
        client.publish("S3","0")
        client.publish("S11","0")
        client.publish("S22","1")
        client.publish("S33","0")
    elif "reception" in you:
        robot_brain = "welcome home"
        print("robot:" + robot_brain)
        client.publish("S1","1")
        client.publish("S2","1")
        client.publish("S3","1")
    elif "movie" in you:
        robot_brain = "OK Have fun watching movies"
        print("robot:" + robot_brain)
        client.publish("S1","1")
        client.publish("S2","1")
        client.publish("S3","0")
        client.publish("S11","0")
        client.publish("S22","0")
        client.publish("S33","0")
    elif "bye" in you:
        robot_brain = "goodbye"
        print("robot:" + robot_brain)
        robot_mouth.say(robot_brain)
        robot_mouth.runAndWait()
        break
    else:
        robot_brain = "I wasn't taught how to do this"
    print("robot:" + robot_brain)
    robot_mouth.say(robot_brain)
    robot_mouth.runAndWait()
