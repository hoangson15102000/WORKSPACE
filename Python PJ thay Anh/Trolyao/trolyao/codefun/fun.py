from speechtotext import speechtotext
from texttospeech import texttospeech
import speech_recognition as sr
import pyaudio
from gtts import gTTS
import playsound
from paho.mqtt import client as mqtt
broker_address="broker.hivemq.com"
client=mqtt.Client("P1")
client.connect(broker_address)
client.loop_start()
text = speechtotext()

if (text=="Hello"):
    texttospeech("chào sếp")
elif (text=="bật đèn số 1"):
    texttospeech("Đã bật đèn 1")
    client.publish("S1","1")
elif (text=="tắt đèn số 1"):
    texttospeech("Đã tắt đèn 1")
    client.publish("S1","0")
elif (text=="bật đèn số 2"):
    texttospeech("Đã bật đèn 2")
    client.publish("S2","1")
elif (text=="tắt đèn số 2"):
    texttospeech("Đã tắt đèn 2")
    client.publish("S2","0")
elif (text=="bật đèn số 3"):
    texttospeech("Đã bật đèn 3")
    client.publish("S3","1")
elif (text=="tắt đèn số 3"):
    texttospeech("Đã tắt đèn 3")
    client.publish("S3","0")
elif (text=="bật đèn số 4"):
    texttospeech("Đã bật đèn 4")
    client.publish("S11","1")
elif (text=="tắt đèn số 4"):
    texttospeech("Đã tắt đèn 4")
    client.publish("S11","0")
elif (text=="bật đèn số 5"):
    texttospeech("Đã bật đèn 5")
    client.publish("S22","1")
elif (text=="tắt đèn số 5"):
    texttospeech("Đã tắt đèn 5")
    client.publish("S22","0")
elif (text=="bật đèn số 6"):
    texttospeech("Đã bật đèn 6")
    client.publish("S33","1")
elif (text=="tắt đèn số 6"):
    texttospeech("Đã tắt đèn 6")
    client.publish("S33","0")
else:
    texttospeech("tạm biệt nhé người anh yêu em chúc anh vui yên bình vàng bạc đau thương ai giữa rồi")



# text = "tôi có thể giúp gì cho bạn" 
def texttospeech(text):
    output = gTTS(text,lang="vi", slow=False)
    output.save("output.mp3")
    playsound.playsound('output.mp3', True)



def speechtotext():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Mời bạn nói: ")
        audio = r.listen(source)
        try:
            text = r.recognize_google(audio,language="vi-VI")
            print("Bạn -->: {}".format(text))
        except:
            print("Xin lỗi! tôi không nhận được voice!")
    return text