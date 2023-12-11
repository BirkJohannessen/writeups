from Crypto.Cipher import AES
from base64 import b64decode
import json

key = bytes.fromhex("980daad49738f76b80c8fafb0673ff1ba3c5a5a81ebc62c6144a9dc1ae5cce11fc78e6fee2138b798e1e51ed15e0a109")

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
