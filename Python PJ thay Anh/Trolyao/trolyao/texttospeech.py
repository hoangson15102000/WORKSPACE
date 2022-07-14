from gtts import gTTS
import playsound

# text = "tôi có thể giúp gì cho bạn" 
def texttospeech(text):
    output = gTTS(text,lang="vi", slow=False)
    output.save("output.mp3")
    playsound.playsound('output.mp3', True)
