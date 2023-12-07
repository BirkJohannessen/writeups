otp = [23, 2, 0, 5, 13, 16, 22, 7, 9, 4, 19, 21, 18, 10, 20, 11, 12, 14, 6, 1, 3, 8, 17, 15]
otp.reverse();
otpreversed = list(map(lambda x: otp.index(x), range(0, 24)))

def explode(input, antall):
    størrelse = len(input) // antall
    fragmenter = []
    
    for i in range(0, len(input), størrelse):
        fragment = input[i:i+størrelse]
        fragmenter.append(fragment)
    
    return fragmenter

with open("pinneved.txt", "r") as file:
    pinneved = file.read()

bang = explode(pinneved, 24)
eksplosjon = [''.join([chr(ord(c) - 2) for c in fragment]) for fragment in bang]
pinneved = [str(eksplosjon[i]) for i in otpreversed]

with open("slede.txt", "w") as file:
    file.write(''.join(pinneved))
