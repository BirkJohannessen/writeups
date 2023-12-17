pubTxt = ""
with open("melding 1.txt", "r") as file:
     pubTxt = file.read()

with open("melding 2.txt", "r") as file:
    key = file.read()
    
    keyArray = map(lambda x: int(x),key.split(", "))


    pubTxt = pubTxt.split("\n ")

    for line in pubTxt
    for keyIdx in keyArray:
        print(pubTxt[keyIdx], end="")
