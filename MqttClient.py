"""My client class"""
from paho.mqtt import client as mqtt
from typing import Union


class MqttClient:
    """Manages connection to mqtt broker"""

    def __init__(self, local = False):
        self.clientId = "Youtube"
        self.port = 1883
        if local:
            self.broker = "localhost"
        else:
            self.broker = "192.168.1.180"
        self.connect()
        

    def connect(self):
        """Connects to an mqtt client"""
        client = mqtt.Client(self.clientId)
        client.connect(self.broker, self.port, 60)
        self._client = client
        client.loop_start()
    
    def pub(self, topic:str, payload:str):
        self.client.publish(topic, payload)

    @property
    def client(self):
        """Returns the client"""
        return self._client
    
    
