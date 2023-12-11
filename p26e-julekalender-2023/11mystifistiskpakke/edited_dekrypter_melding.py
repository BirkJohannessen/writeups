from Crypto.Cipher import AES
from base64 import b64decode
import json

key = b"980daad49738f76b80c8fafb0673ff1b"

with open("melding.enc", "rb") as f:
    try:
        data = json.loads(f.read())
        nonce = b64decode(data["nonce"])
        print(data["nonce"])
        ciphertext = b64decode(data["ciphertext"])
        tag = b64decode(data["tag"])
        print(data["tag"])
        cipher = AES.new(key, AES.MODE_GCM, nonce = nonce)
        plaintext = cipher.decrypt_and_verify(ciphertext, tag)
        print("Dekryptert melding: " + plaintext.decode('utf-8'))
    except Exception as e:
        print(str(e))
        print("Oisann, noe gikk galt!")
