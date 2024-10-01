from MqttClient import MqttClient
import json

is_washing_line_up = False

def onMessage(client, userData, msg):

    global is_washing_line_up

    topic = msg.topic
    payload = msg.payload.decode("utf-8")
    data = json.loads(payload)

    if topic == "zigbee2mqtt/rainSensor/back":
        is_rain = data['water_leak']

        if is_rain:
            print("it's raining")
            if is_washing_line_up:
                print("WASHING IS OUT... QUICK BRING IT IN")
                #use the viber api to send message
        else:
            print("its not raining")

    if topic == "zigbee2mqtt/washingLine":
        if(data['contact']):
            is_washing_line_up = True
            print("washing line is up")
        else:
            is_washing_line_up = False
            print("washing line is down")


client = MqttClient(False).client

client.subscribe("zigbee2mqtt/rainSensor/back")
client.subscribe("zigbee2mqtt/washingLine")


client.on_message = onMessage

while True:
    x = 1