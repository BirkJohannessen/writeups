sol = []
with open("melding 1.txt", "r") as file:
    bytearr = file.read()

    for byte in bytearr:
        if byte not in sol:
            sol.append(byte)

with open("melding 2.txt", "r") as file:
    key = file.read()
    keyArray = list(map(lambda x: int(x),key.split(", ")))

    for key in keyArray:
        print(sol[key], end="")
