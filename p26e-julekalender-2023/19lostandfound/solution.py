pubTxt = ""
lines = []
with open("nissetekst", "r") as file:
    pubTxt = file.read()



with open("code", "r") as file:
    key = file.read()
    key = key.replace("[", "")
    key = key.replace("]", "")
    keyArray = list(map(lambda x: int(x),key.split(", ")))

    for idx, key in enumerate(keyArray):
        print(pubTxt[key], end="")
