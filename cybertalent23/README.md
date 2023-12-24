## Grunnleggende

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

## Utfordringer 

## Skjulte flagg

### 4_corax_dev_shm
Fant dette flagget i fjor ved find commandoen under rekoginisering. Det er tilgjengelig i år også.
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
