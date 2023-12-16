import re
import numpy as np

def isChar(c):
    return re.search("^[^\\{\\}#\\$\\[\\]§¤@]+$", c.decode("iso-8859-1")) is not None

def most_frequent(List):
    unique, counts = np.unique(List, return_counts=True)
    index = np.argmax(counts)
    return unique[index]

manual_matrix = [[] for _ in range(3271)]


for num in range(0, 999):
    file = "manual/manual.bak."
    numstr = ""
    if num < 10:
        numstr = "00" + str(num)
    elif num < 100:
        numstr = "0" + str(num)
    else:
        numstr = str(num)

    with open(file + numstr, "rb") as file:
        rot = file.read()
        for idx in range(0, len(rot)):
            byte = rot[idx].to_bytes(1, 'little')
            if isChar(byte):
                manual_matrix[idx].append(byte)

manualfile = []
for list in manual_matrix:
    manualfile.append(most_frequent(list))

with open("manual.txt", "w") as file:
    file.write(b''.join(manualfile).decode("utf-8"))
