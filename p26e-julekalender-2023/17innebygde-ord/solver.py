pubTxt = ""
sol = "{}\ntels dågjør?num,okfa.viph"
lines = []
with open("melding 1.txt", "r") as file:
    pubTxt = file.read()
    pubTxt = pubTxt.replace(" ", "").replace(",", "").replace("\n", "")
    lines = pubTxt.split(".")



with open("melding 2.txt", "r") as file:
    key = file.read()
    
    keyArray = list(map(lambda x: int(x),key.split(", ")))

    print(sol)

    for idx, key in enumerate(keyArray):
        print(sol[key], end="")
