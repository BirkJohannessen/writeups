with open("melding.txt", "r") as file:
    melding = file.read()


    for idx in range(0, len(melding)):
        if idx % 128 == 0:
            print(melding[idx], end="")
