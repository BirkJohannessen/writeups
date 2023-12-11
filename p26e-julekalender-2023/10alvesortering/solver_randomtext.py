with open("random_text.bin", "rb") as f:
    splits = f.read().split(b'\x00')

    list = []
    for n in splits:
        if (len(n) > 0):
            length = len(n.decode("utf-8"))
            firstChar = n.decode("utf-8")[0]
            obj = {"length": length,"firstChar": firstChar}
            list.append(obj)

    list.sort(key=lambda x: x["length"])

    solution = ""
    for n in list:
        if (n["length"] < 100):
            solution += n["firstChar"]

print(solution)
