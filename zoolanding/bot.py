import json
import requests
from zoolanding.configurations import TOKEN

url = 'https://chatapi.viber.com/pa/send_message'
headers = {'X-Viber-Auth-Token': TOKEN}


# decorator for sending from bot
def sending(func):
    def wrapped(*args):
        return requests.post(url, json.dumps(func(*args)), headers=headers)
    return wrapped


# send text
@sending
def send_text(agent, text, track=None):
    m = dict(receiver=agent, min_api_version=2, tracking_data=track, type="text", text=text)
    return m

