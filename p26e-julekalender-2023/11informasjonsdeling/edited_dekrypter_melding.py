from Crypto.Cipher import AES
from base64 import b64decode
import json

key = bytes.fromhex("980daad49738f76b80c8fafb0673ff1ba3c5a5a81ebc62c6144a9dc1ae5cce11fc78e6fee2138b798e1e51ed15e0a1090000000000000000")
#key2 = bytes.fromhex("980daad49738f76b80c8fafb0673ff1bfc78e6fee2138b798e1e51ed15e0a109a3c5a5a81ebc62c6144a9dc1ae5cce11")
#key3 = bytes.fromhex("a3c5a5a81ebc62c6144a9dc1ae5cce11fc78e6fee2138b798e1e51ed15e0a109980daad49738f76b80c8fafb0673ff1b")
#key4 = bytes.fromhex("a3c5a5a81ebc62c6144a9dc1ae5cce11980daad49738f76b80c8fafb0673ff1bfc78e6fee2138b798e1e51ed15e0a109")
#key5 = bytes.fromhex("fc78e6fee2138b798e1e51ed15e0a109a3c5a5a81ebc62c6144a9dc1ae5cce11980daad49738f76b80c8fafb0673ff1b")
#key6 = bytes.fromhex("fc78e6fee2138b798e1e51ed15e0a109980daad49738f76b80c8fafb0673ff1ba3c5a5a81ebc62c6144a9dc1ae5cce11")
#list = [key1, key2, key3, key4, key5, key6]
listb = [bytes.fromhex("980daad49738f76b80c8fafb0673ff1b"),bytes.fromhex("a3c5a5a81ebc62c6144a9dc1ae5cce11"),bytes.fromhex("fc78e6fee2138b798e1e51ed15e0a109")]


#for key in list:
    #for i in range(0, len(key)-1):
        #keysize = 64 
        #if (i + keysize > len(key)):
            #rest = i + keysize % len(key)
            #tempkey = key[i:len(key)-1] + key[0:rest+1] 
        #else:
            #tempkey = key[i : i+keysize]
with open("melding.enc", "rb") as f:
    try:
        data = json.loads(f.read())
        nonce = b64decode(data["nonce"])
        ciphertext = b64decode(data["ciphertext"])
        tag = b64decode(data["tag"])
        cipher = AES.new(listb[1], AES.MODE_GCM, nonce = nonce)
        plaintext = cipher.decrypt_and_verify(ciphertext, tag)
        print("Dekryptert melding: " + plaintext.decode('utf-8'))
    except Exception as e:
        print(str(e))
