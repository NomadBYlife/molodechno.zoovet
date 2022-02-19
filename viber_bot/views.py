import json
import requests
from django.shortcuts import HttpResponse
from django.views.decorators.csrf import csrf_exempt

auth_token = '4ec245f20fa7e0ef-41fc3c12266ed5f9-460f0de282db91bd'  # !ТОКЕН СТАВИМ СВОЙ ЭТО Фейковый неживой
url = 'https://chatapi.viber.com/pa/send_message'
headers = {'X-Viber-Auth-Token': auth_token}


# ДЕКОРАТОР ДЛЯ функций и отправки
def sending(func):
    def wrapped(*args):
        return requests.post(url, json.dumps(func(*args)), headers=headers)

    return wrapped


# Отправка текста
@sending
def send_text(agent, text, track=None):
    m = dict(receiver=agent, min_api_version=2, tracking_data=track, type="text", text=text)
    return m

# send sticker
@sending
def send_sticker(agent, sticker, track=None):
    s = dict(receiver=agent, min_api_version=2, tracking_data=track, type="sticker", sticker_id=sticker)
    return s

# send picture
@sending
def send_pic(agent, pic, text, track=None):
    p = dict(receiver=agent, min_api_version=2, tracking_data=track, type="picture", text=text, media=pic)
    return p


@csrf_exempt
def privet(request):
    if request.method == "POST":
        viber = json.loads(request.body.decode('utf-8'))
        print(viber)
        if viber['event'] == 'message':
            mes(viber)
            return HttpResponse(status=200)
        if viber['event'] == 'webhook':
            print(viber)
            print("Webhook успешно установлен")
            return HttpResponse(status=200)
        elif viber['event'] == 'conversation_started':
            conversation(viber)
            return HttpResponse(status=200)
        else:
            print("Это не Webhook - пробуй еще раз, или используй POSTMAN")
            return HttpResponse(status=500)
    return HttpResponse(status=200)


def conversation(viber):
    id = viber['user']['id']
    if viber['subscribed']:
        send_text(id, 'Напишите \новости, или \сорт винограда который вас интересует =)')
    else:
        send_text(id, 'Подпишись и будь в курсе всех новшеств в мире вина и виноделия! =)')

def mes(viber):
    id = viber['sender']['id']
    recieve_text = viber['message']['text'].lower()
    a = 'новости'
    n = 'настена'
    ne = 'настёна'
    print(recieve_text=='настёна','!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    if recieve_text == a:
        send_text(id, 'Бот Вайбер-Бендер готов !')
        send_pic(id, "https://www.linkpicture.com/q/The_Bender.jpg",'uuu suka')
    elif recieve_text == (ne) or recieve_text == (n):
        send_text(id, "Настёна и Корнюша")
        send_sticker(id, 40108)
        # send_text(id, ' и Лёвушка!!!')
        send_pic(id,"https://www.linkpicture.com/q/photo_2022-02-19_01-15-28.jpg","и Лёвушка")
    else:
        send_text(id, 'Нет совпадений')
