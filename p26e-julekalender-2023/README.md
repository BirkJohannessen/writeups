# p26e Julekalender 2023 (PST)

Julekalenderen til PST 2023, i samarbeid med Kripos og NSM. Dette er en personlig writeup.

<img alt="scoreboard" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/scoreboard.png">

Resultat for 2023 (helf).

# Table of Contents

  * [1. Desember - Mobil-detektiven](#luke1)
  * [2. Desember - Scrambled](#luke2)
  * [3. Desember - Redacted](#luke3)
  * [4. Desember - Pinneved](#luke4)
  * [5. Desember - Mulvarpjakt](#luke5)
  * [6. Desember - KAKER-kontroll](#luke6)
  * [7. Desember - Alle gode ting er tre](#luke7)
  * [8. Desember - Ransomware \[IKKE LØST\]](#luke8)
  * [9. Desember - Kronolokalisering](#luke9)
  * [10. Desember - Alvesortering](#luke10)
  * [11. Desember - Informasjonsdeling](#luke11)
  * [12. Desember - Pakkestorm](#luke12)
  * [13. Desember - GeoJettr](#luke13)
  * [14. Desember - 📖 Bokorm](#luke14)
  * [15. Desember - Bit-Råte](#luke15)
  * [16. Desember - Invasjon](#luke16)
  * [17. Desember - Innebygde ord ](#luke17)
  * [18. Desember - Melding fra antikken](#luke18)
  * [19. Desember - Hide and Seek](#luke19)
  * [20. Desember - Rudolfs Eventyr](#luke20)
  * [21. Desember - Rudolf "The Stag"'s Pepperkaker \[IKKE LØST\]](#luke21)
  * [22. Desember - Gaveliste endring](#luke22)
  * [23. Desember - KVU-dokumenter](#luke23)
  * [24. Desember - Stopp robot-armadaen!](#luke24)
  * [Egg](#egg)
    * [Egg 1 - Minesveiper, Ufødt pingvin](#egg1)
    * [Egg 2 - stego + nonogram](#egg2)
    * [Egg 3 - git dangling blob](#egg3)
    * [Egg 4 - Minesveiper, Pen GWYN](#egg4)
  * [Bonus](#bonus)


<a name="luke1"/>

## 1. Desember - Mobil-detektiven


```
Her får du den første oppgaven!

Under etterforskningen av hendelsen på jule-verkstedet har vi oppdaget noe rart. Et av meldingssystemene som sender varslinger til beredskapsvaktene for verkstedet har sendt en SMS til et ukjent nummer. Meldingen er dessverre helt uleselig for oss, så vi trenger dine mobildetektiv-egenskaper. Når du finner ut av det, send meg svar på formatet PST{ditt svar her}.

7-4 9-3 7-4 8-1 3-2 6-1 0-1
4-3 6-2 3-3 4-3 7-4 3-2 7-3
8-1 0-1 4-1 7-3 8-2 6-2 5-2
3-2 7-3 0-1 4-3 6-2 2-3 6-3
6-1 4-3 6-2 4-1

- Tastefinger
```

Første dagen som alvebetjent "helf" gikk jeg litt full kodeknekkemodus med rot-13 og feilet ganske fort. Som tittel, brev og avsender hinter til, er dette telefonrelatert, spesifikt de gamle NOKIA-type telefon med 12~ knapper, blant annet 0-9 som representerer det første tallet i meldingen, og antall ganger det skap trykkes blir mappet til en bokstav. Husker eda når det var "inn" å være rask på disse. \
resultatet blir da:

FLAGG
```
PST{SYSTEM INFISERT GRUNKER INCOMING}
```

vi får 10 poeng på tavla og en vittig melding fra tastefinger

```
🤦🏻
- Tastefinger
```

<a name="luke2"/>

## 2. Desember - Scrambled

```
Over natten har det vært store utfordringer knyttet til en av maskinene i verkstedet. En serie feilproduserte leker har kommet på rullende bånd. Vi prøver å finne ut hva som har skjedd. Graver du ned i det her?

- Mellomleder

📎Bilde
```

<img alt="odelagte leker" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/02scrambled/oedelagte_leker.png">

Bildet viser noen ødelagte leketøy, men det som stikker seg ut er bokstaver på firkantet fargebakgrunn. Det viser seg å være en "åpnet" rubikskube. Strategien var da å finne ut hvordan denne kuben så ut som "løst". Jeg har aldri løst en rubiks kube med strategi, men jeg vet fra barndommen at det går ann å demontere en og så "pusle" de tilbake. Med tunga rett i munnen la jeg ut seks post-it lapper og manuelt løste kuben, samlet de på en stor firkantet matboks og løsningen kunne man lese fra { til }, og Rød side hadde PST (og litt blank data):

```
            Rød:
            R B W -- ignorer disse
            G O Y -- ignorer disse
            P S T


Blå:        Hvit:        Grønn:
{ L Ø       _ D E        M _ P
S T E       N N E        U S L
_ D U       _ S O        E S P


            Orange:
            I L L
            _ E L
            L E R

            Gul:
            _ K U 
            B E ?
            : ) }

```

FLAGG
```
PST{løste_du_denne_som_puslespill_eller_kube?:)}
```

```
Her var det mye røre! Bra du klarte å finne ut av det!
- Mellomleder
```

<a name="luke3"/>

## 3. Desember - Redacted

```
Det er krise! Filene på alvemaskinene har blitt kryptert, og vi har ingen backups tilgjengelig!

På nissens skrivebord fant vi det vedlagte brevet, sammen med en kryptert fil.

Det er ubeskrivelig viktig at vi får åpnet denne filen igjen umiddelbart, da Jule NISSEN ikke klarer å huske innholdet!

- Mellomleder

📎 Mitt utpressingsbrev.docx
📎 huskeliste.txt.enc 
```

Hvis vi åpner 'Mitt utpressingsbrev.docx' i google docs kan vi for se hvor mange svakheter som er i utpressingsbrevet..

Nøkkelen til den krypterte filen som egentlig er skjult, kan flyttes på og vi ser den tilgjengelig (hex encodet).

IV'en kan vi hente fra historien i dokumentet som "Utgangsvektor123"

Algoritmen som er brukt for kryptering kan vi se fordi forfatteren har bare visuelt croppet bildet, der ser vi det er AES-CTR. Vi ser også at IVen har blitt kjørt rot13 på.

<img alt="utpressingsbrev" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/03redacted/doc.png" width="600" height="600">

iven må kjøres [rot13](https://rot13.com/) på, og konverteres til hex for openssl kommandoen.

```
$ openssl enc -aes-192-ctr -nosalt -d -in huskeliste.txt.enc  -out huskeliste.txt \
-K 'dda2846b010a6185b5e76aca4144069f88dc7a6ba49bf128' \
-iv '4867746E617466497278676265313233'
```

huskeliste.txt
```
Nissing 101:

Snille barn: Morosaker, spenstigheter og snurrepiperier
Slemme barn: Ukomprimerte diamanter
Nissebetjenter: Flagg

Forslag til morosaker, spenstigheter og snurrepiperier:
Dukker
Lekebiler
Sokker

Forslag til flagg:
Norsk
Nordpolsk
KRIPOS{Husk  se etter spor i snen!}
```

FLAGG
```
KRIPOS{Husk å se etter spor i snøen!}
```

```
Flott!

Jeg kaller inn til et møte med Jule NISSEN og de andre påvirkede så vi kan få delt ut informasjonen igjen.
- Mellomleder
```
<a name="luke4"/>

## 4. Desember - Pinneved

```
Alvebetjentene på Jule NISSEN sitt verksted våknet i dag til et fryktelig syn; Julenissens slede er sprengt i fillebiter. Vi har satt folk på saken for å finne ut av hvem som er ansvarlig for ødeleggelsen, men det er kritisk at sleden blir reparert slik at vi får testet den før Jule NISSEN skal levere pakkene.

Alvebetjentene har samlet vrakrestene, samt verktøyet de mistenker at sabotørene har brukt.

Vi trenger at du rekonstruerer sleden så fort som mulig!

- Tastefinger

📎 pinneved.py
📎 pinneved.txt
```

Her får vi to filer, et python script og en fil med pinneved - uleslig data.

[pinneved.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/04pinneved/pinneved.py):

```python
"""TEMMELIG HEMMELIG"""
"""Sør-Polar Sikkerhetstjeneste"""
"""Høyeksplosivt script for tilintetgjørelse av Julenissens slede"""


otp = [23, 2, 0, 5, 13, 16, 22, 7, 9, 4, 19, 21, 18, 10, 20, 11, 12, 14, 6, 1, 3, 8, 17, 15]

def explode(input, antall):
    størrelse = len(input) // antall
    fragmenter = []
    
    for i in range(0, len(input), størrelse):
        fragment = input[i:i+størrelse]
        fragmenter.append(fragment)
    
    return fragmenter

with open("slede.txt", "r") as file:
    slede = file.read()

bang = explode(slede, 24)
eksplosjon = [''.join([chr(ord(c) + 2) for c in fragment]) for fragment in bang]
pinneved = [str(eksplosjon[i]) for i in reversed(otp)]

with open("pinneved.txt", "w") as file:
    file.write(''.join(pinneved))
```

pinneved.py leser en fil "slede.txt", gjør endel operasjoner på filen og gjør en output til pinneved.txt. Det er enkle operasjoner som blir utført i scriptet som gjør at vi kan reversere rekkefølgen scriptet kjører i på pinneved.txt.
 
pinneved.py deler slede.txt i 24 biter, gjøre en forflytning på hver tegn i filen som ASCII verdien to opp, og "scrambler" rekkefølgen på verdiene i otp tabellen.

strategien er da å dele i 24 biter, gjøre en forflytning på hvert tegn to ASCII verdier ned. nøkkelen her er å mappe otp listen til indexen av den originale rekkefølgen (range(0, 24)) for å få riktig rekkefølge på de 24 bitene.

[slede.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/04pinneved/slede.py):
```python
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
```

<img alt="pinneved reversert" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/04pinneved/pinneved.png">

FLAGG
```
PST{ASCII_art_er_kult}
```


```
Et faktisk kunstverk! Godt jobbet!
Vi setter i gang testingen sporenstreks.
- Tastefinger
```

<a name="luke5"/>

## 5. Desember - Mulvarpjakt

```
Gjennom temmelig hemmelige innhentingsmetoder har vi fanget opp en melding om et nært forestående møte på Fastlands-Norge mellom en mistenkt kildefører som jobber for sydpolare tjenester og et ukjent objekt vi mistenker kan være en muldvarp.

For at våre spaningsalver skal settes i stand til å observere møtet og identifisere det ukjente objektet må vi vite hvor vi skal sende våre alver.

Vi prøvde å spørre OSINT-alvene våre, men de var travelt opptatt med å saumfare sosiale medier etter snille og slemme barn. De mumlet noe om at vi kunne fikse det selv med “turbo overgang”.

Kan du ut fra meldingen finne ut hvor de skal møtes?

    Ta bussen og gå av på holdeplassen rett ved begravelsesbyrået som ligger inntil en sjømatbutikk. Jeg vil stå klar ved fontenen noen titalls meter fra bussholdeplassen. Når du har kommet frem til fontenen, vil vi sammen gå til det nærliggende biblioteket som ligger under 50 meter fra fontenen og gjennomfører overføringen.

Svar meg med navnet på møtestedet og på formen PST{BERGEN LUFTHAVN}

- Tastefinger
```

Geolokasjon / OSINT verktøy er noe jeg aldri har tatt i bruk. Som hintet i vrevet fra Tastefinger kan man bruke Overpass Turbo til å finne en lokasjon som passer beskrivelsen i meldingen.

Overpass Turbo "kodesnutten" her finner to lokasjoner, som er god nok filtrering til å se at Drøbak sentrum er hvor møte er.
```python
area
  ["ISO3166-1"="NO"]
  ["admin_level"="2"];
out geom;

node(area)[highway=bus_stop];
node(around:30)[amenity=restaurant];
node(around:90)[amenity=fountain];
node(around:50)[amenity=library];
out;
```
Logikken i løsningen over er først å filtere på norge (linje 1-4). Vi starter med å så hente alle busstopp noder (innenfor norge filteret, linje 6). Vi kan bruke "around" operatoren for å si finne alle resturanter innen 30 meter fra busstoppene (30 meter magic guess). Så titalls meter til fontenen (90m med litt slark fra resturanten, linje 8) som igjen var 50m unna biblioteket (linje 9).

<img alt="Resultat over norge" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/05mulvarpjakt/turbo2.png">

<img alt="Drøbak sentrum" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/05mulvarpjakt/turbo1.png">

Det gir oss to biblioteker, vi ser noden i drøbak også stemmer med begravelsesbyrå, og svaret er at skal møtes på frogn bibliotek.

FLAGG
```
PST{FROGN BIBLIOTEK}
```

```
Ypperlig! Nå har vi dem! :)
- Tastefinger
```

<a name="luke6"/>

## 6. Desember - KAKER-kontroll

```
I en standard KAKER-kontroll (Kontroll Av Kommuniké med Eksport-Restriksjoner) har det blitt tatt en kopi av dette dokumentet. Vi syns det er snodig at akkurat denne personen har hatt med seg dokumentet siden personen har hatt anti-jul-holdninger tidligere, og vi vil derfor at du tar en nærmere kikk for å se etter uhumskheter.

- Tastefinger

PE‍PPERKAKER {
    POR‍SJONER {
        20 kaker
    }
    ‍TYPE ‍{
        julekake
    }
    INGREDIENSER {
        KAKEDEIG {
            2 ts ‍Pepper
            2 ts Malt ing‍efær
            0,5 ts Malt nellik
            3 dl Mørk siru‍p
            300 g Smør
            2 ts Malt kanel
            4 ts Natron
            2 stk. Egg
            300 g Sukker
            ca. 900 g Hvetemel
        }
        MELISGLASUR {
            ca. 250 g Melis
            1 stk. Eggehvite
            0,5 ts Sitronsaft
        }
    }
    OPPSKRIFT {
        STEG1 { Bland smør, siru‍p og sukker i en kjele. Varm opp til sukkeret er sm‍eltet. Tilsett nellik, ingefæ‍r, pepper og kanel, og rør godt sammen. }
        STEG2 { Ta ‍kjelen av platen og avkjøl bl‍andingen noe. Rør inn egg. }
        STEG3 { Ha i natron, og si‍kt inn mel. Rør alt sammen til ‍en jevn deig. Deigen skal væ‍re ganske myk og klissete, den vil bli mye hardere når den blir kald! }
        STEG4 { Hell deigen over i en bolle og dryss litt hvetemel på toppen. Dekk til med litt plastfolie og sett deigen kaldt noen timer, gjerne over natten. }
        STEG5 { Skjær løs et stykke av deigen. Plasser resten av deigen tilbake i kjøleskapet. ‍Elt deigen forsiktig. Tilsett litt me‍r mel om den virker for myk. }
        STEG6 { ‍Mel en flate, ‍og kjevle deigen ut til ca 3 mm tykkelse. Det er enklest når deigen er myk som plas‍tilina. Stikk ut pepperkakefigurer og flytt dem over på et ‍bakepapirkledd stekebrett. Samle restene av deigen og legg den kaldt. Skjær ut et n‍ytt stykke av ‍deigen og gjenta prosessen. Deigen blir vanskelig å jobbe med når den blir for varm, så da kan d‍en få hvile i kjøleskapet igjen. }
        STEG7 { Stek kakene midt i stekeovnen på 175 °C i ca. 10 minutter. Avkjø‍l kakene helt på rist. }
        STEG8 { Bland sammen mel‍is, eggehvite og sitronsaft til en tykk ‍glasur, og dekorer kaken‍e. }
    ‍}
}
```

Som en stolt vim entuiast limte jeg denne oppskriften inn i et nytt vim buffer - Og der var svaret umiddelbart. Vim encoder ikke spesialbytes som andre teksteditorer, men printer de i [caret notation](https://en.wikipedia.org/wiki/Caret_notation). Svaret var samlingen av bokstaven etter <200d> byten som vist på bilde.

<img alt="200d" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/06kaker/kake.png">

FLAGG
```
PST{pepperkakerermotbydelige}
```

```
Hvordan kan man ikke like pepperkaker?!
- Tastefinger
```

<a name="luke7"/>

## 7. Desember - Alle gode ting er tre

```
Alveresepsjonen fant en mystisk lapp i postboksen til Nissens verksted i dag tidlig. Vanligvis er dette noe Ronny, Shahana og Ada fra alvdeling for kryptografi ville tatt seg av. Dessverre er alle tre bortreist på en viktig konferanse i San Francisco for å høre om den siste utviklingen innen eksponenter og modulær aritmetikk. Kan du steppe inn for dem og finne ut av hva denne beskjeden egentlig er for noe?

- Mellomleder

📎msg.txt
```
msg inneholder en fil med tre verdier:
```
N = 0x5993c05eac819aa17ae7e4e4b9f75b2d6fdbaec913e0b2d6f4ba585a991b62279ed9ac53aeadee3327321e02c0c06ecda184952df5d1cc8b3024643c0afdd9bbd52bf2d830f54d6e59e76844394eb0ffc498995dd270b9b95bf1614984472a3ef12d8c1bad64529be7b638c5d0fccf61c5ac2ab4564e5215748eb2533d4d949afd9486426dbf0c06a07c2c0f6d482e4f8cf3052e6ab9df20878b747936d590c3b8bb0219a378cbec03baee4ea8d0641c57bcc18706bbe92c3f2d7569c424062d9b79464958419b4000e3e31c077bba27ef2fc6ed15b7ebdcdb41d1cbf7708737e200904015d341ef94c537a916f1fec61e0b1bf64762e5a97bafdde290b939c3
e = 3
C = 0x755040806d1d699c76cf2b3fffc28ad8831a8667e1b064297a43733b89f6272483a5a728b725d02b069f8fc65eb51d89ce9133df8f5f2d5e13f63c5423021eb2b56eeb91b11d78717528dfce169450a08d40f5ab451c8ac1f8c6875cffbd4d70259d436ed70baeae37b9bdafc5965
```
Med litt hint fra meldingen (Ronny, Shahana og Ada - RSA) er dette verdier i RSA algoritmen.\

Min løsning for dekryptering var med [RsaCtfTool](https://github.com/RsaCtfTool/RsaCtfTool) med N og E som parametere, og C som ciphertext.
```
./RsaCtfTool.py -n 0x5993c05eac819aa17ae7e4e4b9f75b2d6fdbaec913e0b2d6f4ba585a991b62279ed9ac53aeadee3327321e02c0c06ecda184952df5d1cc8b3024643c0afdd9bbd52bf2d830f54d6e59e76844394eb0ffc498995dd270b9b95bf1614984472a3ef12d8c1bad64529be7b638c5d0fccf61c5ac2ab4564e5215748eb2533d4d949afd9486426dbf0c06a07c2c0f6d482e4f8cf3052e6ab9df20878b747936d590c3b8bb0219a378cbec03baee4ea8d0641c57bcc18706bbe92c3f2d7569c424062d9b79464958419b4000e3e31c077bba27ef2fc6ed15b7ebdcdb41d1cbf7708737e200904015d341ef94c537a916f1fec61e0b1bf64762e5a97bafdde290b939c3 \
 -e 3 \
--decrypt 0x755040806d1d699c76cf2b3fffc28ad8831a8667e1b064297a43733b89f6272483a5a728b725d02b069f8fc65eb51d89ce9133df8f5f2d5e13f63c5423021eb2b56eeb91b11d78717528dfce169450a08d40f5ab451c8ac1f8c6875cffbd4d70259d436ed70baeae37b9bdafc5965
```

FLAGG
```
NSM{af0dbd13cee45990593c182b213f978d}
```


```
Jeg tror jeg trenger hele alvdelingen for kryptografi for å forstå meg på denne her, men bra du fikk det til!
- Mellomleder
```

<a name="luke8"/>

## 8. Desember - Ransomware

```
Skjermen på en av datamaskinene på NISSENS verksted ble plutselig dekket av mange meldinger om at viktige filer var blitt kryptert. Et team av alver klarte å finne igjen denne filen sammen med en høyst mistenkelig fil, men klarer ikke å dekryptere filen. De har delt filene i et ZIP-arkiv med infected som passord. Klarer du å få tilbake den viktige filen?

- Tastefinger

📎mistenkelig_beslag.zip
```
```
$ 7z e mistenkelig_beslag.zip

7-Zip [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=en_US.UTF-8,Utf16=on,HugeFiles=on,64 bits,16 CPUs AMD Ryzen 7 5800X 8-Core Processor              (A20F12),ASM,AES-NI)

Scanning the drive for archives:
1 file, 923323 bytes (902 KiB)

Extracting archive: mistenkelig_beslag.zip
--
Path = mistenkelig_beslag.zip
Type = zip
Physical Size = 923323

Enter password (will not be echoed):
Everything is Ok

Files: 2
Size:       1873410
Compressed: 923323
$ ls
flagg.kryptert  mistenkelig_beslag.zip  wuauclt.exe
```

Krevende reverseringsoppgave. Klarte ikke denne..

<a name="luke9"/>

## 9. Desember - Kronolokalisering

```
Gjennom et beslag har vi fått tak i et papirark. På den ene siden står det “Oppmøtested for den topphemmelige sydpolinfiltrasjonen 2023, rekognosering 23. november”. På den andre siden av arket er det et bilde. For å kunne hente inn overvåkingsbilder og identifisere hvem som har planlagt arrangementet trenger vi det nøyaktige tidspunktet bildet er tatt.

Send meg svar på denne eposten som KRIPOS{tidspunkt}, f.eks. KRIPOS{23:35}, rundet av til nærmeste fem minutter.

- Mellomleder

📎 bilde.jpeg
```

Bilde som er vedlagt i meldingen er i lav kvalitet og er vanskelig å tyde hva som står på bygningen.

<img alt="vedlagt bilde" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/09kronolokalisering/bilde.jpeg">

Men med et reverse image google søk finner man fort ut dette er Interpol HQ i Haag, Nederland.

<img alt="høyre fremre side av bygingen er hvor bildet er tatt" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/09kronolokalisering/overview.png" width="600" height="600">

Solen er nøkkelen for å finne ut hva klokka var da bildet ble tatt. Da kan vi bruke vinkelen venstre bygning beskygger høyre for å finne hvor sola stod på himmelen den 23. November.

Her kan man bruke verktøy som [sunearthtools](https://www.sunearthtools.com) - vi setter kooridnatene der bygningen blir skygget på 

52.09304334129273, 4.282084778166853


Nøyaktige estimeringen med dette verktøyet ble gjort med linjal for å line opp sol mot skygge, og vi havner på kl 13:20 justert for UTC+1.


<img alt="" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/09kronolokalisering/sunangle.png">

FLAGG
```
KRIPOS{13:20}
```

```
Strålende! Jeg setter igang Tastefinger for å finne skurken!
- Mellomleder
```

<a name="luke10"/>

## 10. Desember - Alvesortering

```
De strenge alvene har skrevet ned et julekodeord, men i den ivrige sorteringen av pakker har det skjedd en horribel feil og alt er blitt rot! Ordet har blitt borte i det som ser ut som et virrvarr av tilfeldig tekst! Nå trenger de hjelp til å gjenfinne ordet. De har null peiling på hvor langt ordet er. Kan du å gjenfinne ordet?

- Mellomleder

📎random_text.bin
```

filen random_text.bin er ekstremt lang og uleselig, la oss ta en titt på hva som er inni den.

```
$ xxd -p random_text.bin | fold -w 2 | sort | uniq -c | sort -nr
  24511 4f
  24389 38
  24383 67
  24362 41
  24361 77
  24345 55
  24343 35
  24341 54
  ...

  23945 4d
  23850 49
  23823 52
  10024 00
      1 7d
      1 7b
```

Det viser det er ganske likt fordelt mengder med \[a-zA-Z0-9\], inkludert endel NULL bytes (00). men bare en "{" og "}" vist som ascii verdier i hex (7d, 7b) 

litt frem og tilbake ender vi på dette python scripet, med god hjelp fra meldingen som "sortere", "null", "langt ord": (litt synd på de som gikk på "rot" som "ROT-13")

[solver_randomtext.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/10alvesortering/solver_randomtext.py):
```python
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
```

Vi splitter filen på nullbytes, mapper på lengden av strengen mellom hver nullbyte, sorterer på lengden. vi bryr oss bare om det første tegnet i sekvensen (pga { og } er rett ved siden av nullbyte).
de første 24 i rekkefølgen er de eneste som har unik lengde. vi printer ut og får:


FLAGG
```
PST{julenisseStreng0Alv}
```

```
Bra det ble orden på sakene!
- Mellomleder
```

<a name="luke11"/>

## 11. Desember - Informasjonsdeling

```
NISSENS verksted har mottatt en mystisk melding og litt kode for å dekryptere meldingen. Noen alver i førstelinjen har sett på det, og blir ikke helt kloke. De mistenker at kun denne ene hemmeligheten ikke er nok. Kanskje er det andre som sitter på mer info?

- Mellomleder

📎 filer.zip
```
```
Heisann alle sammen!

Det kom et bud innom med en pakke som vi ikke klarer å finne ut av. Budet la igjen en post-it lapp med 61d42b52b5334fe4f513c24c6da2a4251b069def05ae7c96a4152038c4b1f712 på og pakken er vedlagt i meldingen.
- 📞 Sentralbordet
```

Vi fikk to meldinger idag, en fra mellomleder om en fra sentralbordet til alle i NPST - skjoldet jeg valgte dag 4 (ut ifra NPST, KRIAPOS og NISM).
Som tittelen hinter til må man samarbeide på tvers av (alv)delingene.

Her bare lagde jeg noen dummy kontoer for å laste ned zipfilene til KRIAPOS og NISM. hver zip fil kommer med et passord angitt i meldingen, den er det bare å hive inn i unzip for å få hemmelighet filene:
```
npst.zip:
Hemmelighet #1
980daad49738f76b80c8fafb0673ff1b

NISM.zip:
Hemmelighet #2
a3c5a5a81ebc62c6144a9dc1ae5cce11

KRIAPOS.zip:
Hemmelighet #3
fc78e6fee2138b798e1e51ed15e0a109
```

fra filer.zip ligger melding_dekryptert.py:
```python
from Crypto.Cipher import AES
from base64 import b64decode
import json

key = ???

with open("melding.enc", "rb") as f:
try:
data = json.loads(f.read())
nonce = b64decode(data["nonce"])
ciphertext = b64decode(data["ciphertext"])
tag = b64decode(data["tag"])
cipher = AES.new(key, AES.MODE_GCM, nonce = nonce)
plaintext = cipher.decrypt_and_verify(ciphertext, tag)
print("Dekryptert melding: " + plaintext.decode('utf-8'))
except (ValueError, KeyError):
print("Oisann, noe gikk galt!")
```

og melding.enc
```
{"nonce": "iGfRlHEx5cYvehl2YYZv9w==", "ciphertext": "E3nvYDlJHG7R0XBQevJEBAHmoaqOdaI1sfX64d5bF+82cvzdZXhS9IVYVmXgE72kvdkZ+h92mGZ0YLx9pX+PbPPtB/JS", "tag": "nAjcHbhnjYtwMAHSHrcHsA=="}
```

Denne AES algoritmen aksepterer bare 128, 192 og 256 bits nøkler, som ikke går opp med konkatineringen av de samlete nøklene fra NISM, KRIAPOS og NPST.
Nøkkelen her er å gjøre en XOR operasjon på hemmelighetene i kronologisk rekkefølge og bruke den nye nøkkelen (som er 128 bits) i scriptet.

FLAGG
```
NSM{9c7cac722d55da1dbfa13025d85efeed45e9ddea2796c0e5ea2fda81ea4de17d}
```

```
Strålende samarbeid her! Flott dere får til å samarbeide på tvers sånn.
- Mellomleder
```
<a name="luke12"/>

## 12. Desember - Pakkestorm
```
Jeg har vært på et temmelig hemmelig oppdrag og fulgt med på en server som har hatt mistenkelig oppførsel tidligere. Nå tok vi den igjen når den begynte å sende masse pakker, men selv om jeg som alle andre alver liker pakker så ble det litt for mye av det gode. Kan du finne de onde for meg?

- Tastefinger

📎fangede_pakker.pcap
```

Når vi åpner fangede_pakker.pcap i wireshark, er kan det legges merke til uhåndterlige mengder pakker. men det er noe struktur her..\
Samtlige pakker har 8 eller 9 bytes i payloaden og begynner på 0b - et symbol for byte påfølgene 1ere og 0ere. det er rundt 40+- pakker til hver addresse i filen.

Strategien her var først å lage et python script som samlet bytene til en streng som går til hver addresse. Men da får vi enorme mengder flagg tilbake - her må vi gjøre noe mer.

Her må vi lese nøyere på oppgave teksten:
```
Kan du finne de onde for meg?
```

Et rask google søk viser at en ond pakke faktisk er aprilsnarr fra [2003](https://www.ietf.org/rfc/rfc3514.txt).
Med utdypelse fra [denne](https://ctftime.org/writeup/36170) artikkelen finner vi de relevante pakkene, og samler de sammen og dekoder: 

```
PST{I_cAn_HaZ_rEciprOCaTeD_tRuzT?}
```

```
Flott at du fant ut av det her. Jeg har gått skikkelig lei av å sitte og stirre på den serveren.
- Tastefinger
```

<a name="luke13"/>

## 13. Desember - GeoJettr
```
Ledelsen har fått dilla på GeoGjettr og jeg er med i en konkurranse, men klarer ikke finne ut av hvilken by bildet her er fra. Kan du hjelpe meg litt fort?

Svar meg med KRIPOS{navn på by}.

- Mellomleder

📎bilde.jpg
```

<img alt="GeoJettr" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/13geogjettr/bilde.png" width="600" height="600">

QR-koden ser veldig interessant ut, men det er noe i veien for "Finder pattern" nede til venstre.
Her kan man bruke verktøy som Figma til å fylle den manglende "Finder pattern" for å så scanne QR koden med mobilen.

QR-koden er en lenke til å koble på WIFIen i "The state building". Google søk finner ut at dette ligger i Perth, Australia.

FLAGG
```
KRIPOS{PERTH}
```

```
Haha! Nå leder jeg!
- Mellomleder
```

Bildet i dagens oppgave hadde også ett [Egg](#egg2) når vi så på stegografiske hemmeligheter.

<a name="luke14"/>

## 14. Desember - 📖 Bokorm
```
En snok vi mistenker å stå i ledetog med Pen GWYN har blitt arrestert etter å ha brutt seg inn i NordPolarBiblioteket og stjålet noen bøker. Vi mistenker at de har vært ute etter noe spesifikt, men vi blir ikke helt kloke på hva det er. Snoken ble tatt med en stabel bøker og et notat.

Bøkene har vi gitt tilbake til biblioteket, men her er en liste av dem som ble stjålet:

    Norrøn arverett og samfunnsstruktur
    Radium og radioaktive stoffer, samt nyere opdagelser angaaende straaler
    Undertrykking av objekter med høy luminans ved hjelp av en romlig lysmodulator under avbildning med CCD- og lysforsterkningskamera
    Om den yngre Jernalder i Norge : 1. afdeling
    Storlogens Konstitution og Tillægslove
    Sild- og saltfiskretter

Notatet inneholdt dette her:
(55, 1, 2, 1), (65, 17, 6, 3), (19, 3, 8, 1), (13, 5, 6, 2), (14, 11, 4, 8), (27, 32, 12, 2), (9, 7, 12, 3), (82, 5, 2, 8), (78, 3, 11, 1), (71, 5, 1, 8), (76, 1, 6, 2), (92, 1, 1, 1), (50, 2, 1, 5), (15, 1, 1, 1), (82, 16, 10, 4), (23, 6, 1, 1), (34, 16, 7, 1), (92, 11, 3, 2), (50, 5, 6, 1), (1, 3, 5, 12), (42, 2, 1, 1), (15, 3, 1, 3), (23, 8, 1, 2), (90, 2, 5, 1), (83, 1, 1, 2), (59, 29, 9, 4), (93, 4, 1, 16), (82, 8, 3, 5), (39, 1, 1, 8), (77, 7, 9, 1), (93, 8, 6, 8), (1, 1, 3, 6), (83, 10, 8, 1), (23, 1, 1, 1), (69, 2, 9, 2), (76, 12, 3, 4), (7, 1, 3, 1), (3, 9, 9, 2), (19, 1, 6, 10), (93, 14, 7, 5), (13, 31, 7, 10), (3, 1, 9, 2), (7, 2, 6, 1), (23, 19, 4, 3), (50, 6, 5, 11)

Send svar til meg om du finner ut av det.
- Tastefinger
```

Alle disse bøkene er tilgjengelig på nasjonal biblioteket's nettsider, men kun "Om den yngre Jernalder i Norge : 1. afdeling" er tilgjegelig uten å sende inn søknad.
Et raskt skjekk om det går opp for PST, bekrefter nøkkelen: (sidetall, linje på siden, ord nummer på linjen, bokstav i ordet)

blir til:
```
pstkrøllparentesbokstavjaktkrøllparentesslutt
```

FLAGG
```
PST{bokstavjakt}
```

```
Da er det bare å legge snoken i jern da!
- Tastefinger
```

<a name="luke15"/>

## 15. Desember - Bit-Råte

```
Brukerveiledningen til en av de eldste maskinene på verkstedet har blitt borte. Heldigvis har Julenissens arkiv 1000 sikkerhetskopier av dokumentet på magnetbånd. Det viser seg at alle kopiene er kraftig angrepet av bit-råte så dokumentet må gjenoppbygges. Ifølge arkivalven så er brukerveiledningen skrevet på gammel-nordpolarsk som har samme alfabet som norsk, men inneholder ikke nye tegn som disse: {}#$[]§¤@

Når du finer ut av det så send meg MD5-sjekksummen til det gjenoppbyggede dokumentet på formen PST{checksum}. Svaret er ikke versalfølsomt.

- Mellomleder

📎backups.zip
```

Bitråte vil påvirke noen bits i en karakter, så i backups er det usannsynlig at en karakter vil få endret til en ny karakter flere ganger enn original karakteren. taktikken er derfor å finne hver karakter i backupsene å finne den som forekommer MEST og filtrer vekk "spesialtegn" som oppgaveteksten ber oss ignorere.

Løst med python

[rot.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/15bitrot/rot.py)
```python
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
```
Vi får ut [manual.txt](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/15bitrot/manual.txt):

Kjører md5sum på filen og leverer flagg på formatet vi er bedt om.
```
$ python3 rot.py
$ md5sum manual.txt 
e32ba07d1254bafd1683b109c0fd6d6c  manual.txt
```

FLAGG
```
PST{e32ba07d1254bafd1683b109c0fd6d6c}
```

```
Og jeg som trodde magnetbånd var noe en brukte for å henge opp bilder på kjøleskapet...
- Mellomleder
```

<a name="luke16"/>

## 16. Desember - Invasjon
```
Gjennom temmelig hemmelige innhentingsmetoder har vi fått tak i det vedlagte dokumentet som avslører den egentlige hensikten bak løsepengeangrepet: Sydpolare aktører planlegger å invadere Nordpolen for å stoppe julen én gang for alle!

I dokumentet nevnes det at aktørene har plantet deep-cover agenter i blant oss, og at de har hemmelige koder for å etablere kontakt med disse. Analyser materialet og se om du klarer å avsløre de hemmelige kodene slik at vi kan få disse agentene på kroken!

I mellomtiden iverksetter vi umiddelbare mottiltak for å stanse invasjonen.

- Tastefinger

📎aksjon_2023.zip
```
i zip filen ligger det en notat for å invandere nordpolen, og en git folder.

Det mest interessante er nok branchen ikke-merge-før-julaften, der vi har personellister og kode for å kommunisere med dem.

Det viser seg at det er en pre-merge-commit hook (git) med endel interessante sed kommandoer for å selvdestruere disse kodene fra "ikke-merge-før-julaften" før de blir merget inn i fks master (derav pre-merge-commit).

De hemmelige kodene i pre-merge-commiten er base64 encodet og kan kjøres rett i terminalen med ```echo BASE64STRING | base64 -d```.

FLAGG
```
KRIPOS{Flagg i alle kriker og kroker}
```

```
Jeg tenker vi skal vagge ned til fiskeforhandleren og se hva vi ser jeg!
- Tastefinger
```

Dagens oppgave hadde også ett [Egg](#egg3)

<a name="luke17"/>

## 17. Desember - Innebygde ord 
```
Vi har snappet opp to meldinger som ble sendt til hovedobjektet i J-SAK EMBED. Vi mistenker at meldingene ikke er hva det ser ut til å være.

Den første meldingen som ble sendt var en merkelig tekst om å telle, mens melding nummer to bare ser ut til å være en rekke med tall. Vi tror det er en betydning i disse tallene, kan du se på det og gi oss tilbakemelding hvis du finner noe meningsfylt?

- Tastefinger

📎melding_1.txt
📎melding_2.txt
```
Denne oppgaven kommer med en kryptisk tekst om telling 

melding_1.txt
```
{}

tells det å telle, gjør det det?
nummer en, nummer to, nummer tre,
en rekkefølge man må se.

oversikt og sekvens, en viktig oppgave i alle fall,
hva ellers er vel vitsen med tall?
```
og en annen fil med endel tall

melding_2.txt
```
26, 6, 3, 0, 16, 4, 8, 4, 7, 21, 19, 14, 7, 3, 4, 5, 5, 25, 16, 11, 1
```

Løsningen her er å sortere på forekomst av karakterer, omgjøre det til en liste og hente ut med index tallene som er vedlagt.

Løst med python script

[solver.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/17innebygde-ord/solver.py)
```python
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
```

```
$ python3 solver-py
pst{nede for telling}
```

FLAGG
```
pst{nede for telling}
```

```
Naturligvis! Nå tror jeg vi har en vektor for å få løst denne saken.
- Tastefinger
```

<a name="luke18"/>

## 18. Desember - Melding fra antikken

```
I riktig gamle dager hadde NISSEN flere regionskontor spredt rundt i verden. Disse kontorene fungerte både som mottak for ønskelister og distribusjonssenter for gaver. Da som nå var det ikke alle som oppførte seg like pent fram mot jul, og ifølge historiebøkene var spesielt organisasjonen PERSIUS (ledet av den onde Dr. Xerxes) stadig vekk på spion- og toktforsøk mot ett av NISSENs regionkontor. På sitt verste var det angivelig hele 300 alvebetjenter i sving for å forsvare gaver og ønskelister. De særs tapre alvene til tross, NISSEN var reelt bekymret for at viktig informasjon og gaver skulle havne på avveie. Siden den gang har derfor all julesensitiv informasjon blitt kryptert.

Takket være noen alvorlige logistikkproblemer (og muligens en streik eller to) har plutselig en slik gammel melding dukket opp. Julelovens paragraf §133-syvende ledd er imidlertid krystallklar

    Enhver julesensitiv informasjon må analyseres og vurderes før den avgraderes høytid.

Imidlertid er det ingen av Alvene som aner hvordan denne gamle meldingen skal leses. Kan du hjelpe dem?

- Mellomleder

📎melding.txt
```

melding.txt inneholder rundt 4000 [a-z#%&_!\?\[\]\{\}] karakterer i cipheret.
Krypteringsmetoden som er brukt er en [Scytale](https://en.wikipedia.org/wiki/Scytale). Med litt bruteforce finner vi 128 som "hoppet" som passer i cipherteksten. løst da med python:

[read.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/18meldingFraAntikken/read.py)
```python
with open("melding.txt", "r") as file:
    melding = file.read()
    for idx in range(0, len(melding)):
        if idx % 128 == 0:
            print(melding[idx], end="")
```

FLAGG
```
pst{var_julenissen_kong_leonidas}
```

```
For et funn! Dette hører jo hjemme i et museum!
- Mellomleder
```

<a name="luke19"/>

## 19. Desember - Hide and Seek

```
Som følge av et stadig økende trusselbilde, spesielt ifra sydligere strøk, har Nordpolar sikkerhetstjeneste etablert en intern enhet som skal beskytte tjenestens egne digitale systemer mot angrep. Enheten består av nøye selekterte tidligere alveteknologer som har god erfaring med bekjempelse av sydpolare aktører.

Grunnet tidligere prestasjoner på Nordpolen har NISSEN selv navngitt enheten til Julens Utvalgte Lærde Elektronisk databehandlende Sikkerhets og Operative Center, forkortet JULESOC. JULESOCen kan blant annet bidra til å finne ondsinnede fugler i datasystemene til Julenissens verksted, grave i sildcoin transaksjoner og analyse av speilglatte kopier.

JULESOC har nylig mottatt en speilkopi av en arbeidsstasjon lokalisert på Julenissens verksted. Det er mistanke om at noen uautoriserte har vært inne på maskinen og tukla. Vi trenger at du graver frem noen spor.

- Mellomleder

📎image.raw.gz
```
Første utfordringen er å extrahere partisjonene fra image.raw

```
$ gunzip image.raw.gz
$ file image.raw
image.raw: DOS/MBR boot sector; partition 1 : ID=0x83, start-CHS (0x0,32,33), end-CHS (0x19,159,6), startsector 2048, 409600 sectors; partition 2 : ID=0x83, start-CHS (0x19,159,7), end-CHS (0x4c,157,17), startsector 411648, 819200 sectors; partition 3 : ID=0x83, start-CHS (0x4c,157,18), end-CHS (0x66,28,54), startsector 1230848, 409600 sectors
$ fdisk -l image.raw
Disk image.raw: 1 GiB, 1073741824 bytes, 2097152 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x9e0c43d5

Device     Boot   Start     End Sectors  Size Id Type
image.raw1         2048  411647  409600  200M 83 Linux
image.raw2       411648 1230847  819200  400M 83 Linux
image.raw3      1230848 1640447  409600  200M 83 Linux

$ sudo mount -o loop,offset=1048576 image.raw /mnt/p26e23/
$ sudo umount /mnt/p26e23/
$ sudo mount -o loop,offset=210763776 image.raw /mnt/p26e23/
$ sudo umount /mnt/p26e23/
$ sudo mount -o loop,offset=630194176 image.raw /mnt/p26e23/
```

Offsettene i kommandoene er kalkulert ved start * 512 units for hver partition.
det vi finner i partisjonene er blant annet en nissetekst og en kode. PTSen kicker inn fra dag 17, men viser seg å være en mye snillere utgave. dette er direkte indekser i filen og vi får flagget ved dette python scriptet.

[solution.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/19lostandfound/solution.py)
```python
pubTxt = ""
with open("nissetekst", "r") as file:
    pubTxt = file.read()

with open("code", "r") as file:
    key = file.read()
    key = key.replace("[", "")
    key = key.replace("]", "")
    keyArray = list(map(lambda x: int(x),key.split(", ")))

    for idx, key in enumerate(keyArray):
        print(pubTxt[key], end="")
```

FLAGG
```
PST{TheGrinchWouldHateThis}
```

```
Det er alltid noen som skal snike seg inn og ødelegge jula. Heldigvis har vi deg til å stoppe disse grinchene!
- Mellomleder
```

<a name="luke20"/>

## 20. Desember - Rudolfs Eventyr

```
Julefreden har begynt å senke seg over Nordpolen, og alvene har blitt hekta på på et retro spill. I følge noen av alvene er det visstnok mye hemmeligheter her!

Et lite avbrekk i julestria må da være lov?

- Tastefinger

📎rudolfs_eventyr.gba
```
Dagens oppgave kan åpnes i en gameboy advanced emulator for å spille selveste rudolf på eventyr med flere julerelaterte elementer, som jule 8bit sanger, alver og godønsker.

Del 1:
```
Det er en papirlapp, men  nesten alt av den har
blitt revet bort.
Paa det lille som er igjen staar det 'NSM{'.
```
DELFLAGG
```
NSM{
```

Del 2:
```
Jeg hoerte at en del av flagget ligger i VRAM!
```

<img alt="vram" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/del2.png" width="600" height="600">

DELFLAGG
```
rudo
```

Del 4:

<img alt="taktilt" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/del4.png" width="600" height="600">

Dette er kodet taktilt 

```
Del 4 av flagget
```
DELFLAGG
```
edde
```
Del 6:

Den ene alven sitter på en hemmelighet hvis vi vinner et myntkast 100 ganger på rad. ved å bruke et minneverktøy for å se på verdier som endrer seg mens vi kaster mynt finner vi ut at addresse 0x03007b04 lagrer antall kast vi har vunnet. vi bytter den om til 0x63 (99) og gjør et nytt kast med alven.
Dette løste jeg med mGMA emulator.

<img alt="sisebit" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/5e1.png">

<img alt="sisebit2" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/5e2.png">

<img alt="sisebit3" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/5a.png">

<img alt="sisebit4" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/5b.png">

DELFLAGG
```
la!}
```

```
NSM{rudo????edde????la!}
```
Her kan vi se en klart mønster i flagget selv om vi mangler to biter. Ved litt bruteforce gjetter vi riktig flagg

FLAGG
```
NSM{rudolf_redder_jula!}
```

```
For en rebus! Tror du slo tiden min på å løse den også!
- Tastefinger
```

Imponerende oppgave, NSM!

<a name="luke21"/>

## 21. Desember - Rudolf "The Stag"'s Pepperkaker

```
Nasjonens sikkerhetsalver leter febrilsk etter sin temmelig hemmelige pepperkakeoppskrift, men det peker til at Rudolf "The Stag" kanskje har spist opp denne. Klarer du skanne "The Stag"'s kropp og lese av denne før den går sin naturlige gang og blir borte for alltid?
- Mellomleder
```

Ser ut som alle sliter med å få løst denne oppgaven på discord kanalen. Klarte noen i det hele tatt å løse hemmeligheten bak the stag? 

Ettersom jeg enda ikke har løst oppgave 8, eggene fra 24 og 8, havner denne på bunnen av prioriteringslista.

<a name="luke22"/>

## 22. Desember - Gaveliste endring

```
Hei helf,

JULESOC har fått en alarm fra informasjonssystemet tilknyttet NISSENS gavelager på VALøya i Tromsø. Alarmen handlet om en uautorisert modifikasjon i databasen som styrer inventaret til lageret, og JULESOC har sendt oss databasefilene slik de forekom på tidspunktet alarmen gikk.

Har du mulighet til å sjekke ut filene og finne ut hvilken rad som er blitt modifisert?

📎 ALARM_JULESOC.zip

Returner UUID til den modifiserte raden, f.eks. PST{6eab374e-735f-416e-bcc6-81b4b8dfc7a9}
```

Databasefilen kommer med en WAL fil og en SHM fil. WAL fil er en loggtype som logger endringer som kommer inn i databasen. Problemet er at den logger hele "chunken" med data som en endring har forekommet i. dvs den kommer med ca 56 potensielle kandidater som flagg. Men ved litt graving kan vi kjøre

```
sqlite3 inventory.db
> PRAGMA wal_checkpoint
```
i databasen for å rulle tilbake "staten" den var før walfilen ble skrevet til.

ved å kjøre en git diff --text og lime forskjellen i et [tekst sammenligningsverktøy](https://text-compare.com/) finner vi at det er "Nano Jade Mindflex" raden som har blitt endret.

FLAGG
```
PST{9da1b2a6-5a52-41ec-8bf0-32381e054db7}
```

```
Hm, det er noen som ikke liker Mindflex her, altså.
Takk for hjelpen!
```

<a name="luke23"/>

## 23. Desember - KVU-dokumenter

```
Hei helf,

Taskforce ALV utvides stadig og trenger derfor nye lokaler, og dermed er det satt i gang en Konseptvalgsutredning.

Vi har leid inn arkitektfirmaet Juxx og Fauxtneri for å bistå med forslag til nye bygg. Men i lys av aktuelle hendelser har vi innsett at vi må gå arbeidet deres litt mer i sømmene.

Vi må forsikre oss om at det ikke skjuler seg noe juks eller fanteri i arbeidet deres. Vi har fått tilgang til budsjettet deres, og et utkast til et nytt bygg. Problemet er at budsjettet er kryptert, så vi får ikke lest det. Har du noen alternative løsninger?

📎
```
Dagens fil er en .wim fil

```
$ file juxxOgFauxtneri.wim
juxxOgFauxtneri.wim: Windows imaging (WIM) image v1.13, reparse point fixup
```
Windows image kan mountes med unix verktøy, wimmountrw kan da brukes.
```
wimmountrw juxxOgFauxtneri.wim juxxOgFauxtneri/
```
Her finner vi en kryptert fil Cashflow.xlsx.encrypted og blueprint.png

<img alt="blueprint" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/23kvudokumenter/blueprint.png">

Med et verktøy fra [stegonline](https://stegonline.georgeom.net/image) kan vi se på manipulerte deler av bildet. Her finner vi en hex kode på blå bit pane 3 der døra er åpen på originalbilde.

<img alt="code" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/23kvudokumenter/code.png">


```
e24f5249
7bcf4c332
f1283ec92
5f77a1
```

et annet stego verktøy som kan være nyttig er [stylesuxx](https://stylesuxx.github.io/steganography/), men gir ingen nytting infomasjon fra LSB..

Etter nærmere titt på Cashflow.xlsx.encrypted er dette Base64url encodet (med - og _ replacet med + og / i Base64) og vi kan få den krypterte filen med

```
$ cat Cashflow.xlsx | basenc --base64url -d > Cashflow.xlsx.enc
```

etter endel leting viser det seg at det er en hemmelighet i selve .wim filen.

```
$ strings juxxOgFauxtneri.wim
...
from cryptography.fernet import Fernet
import base64
B3 = input("Skriv inn n
kkelord: ")
source_file = 'Cashflow.xlsx.encrypted'
key = base64.urlsafe_b64encode(bytes(B3, encoding='ascii'))
def decrypt_file(encrypted_filename, key):
cipher_suite = Fernet(key)
with open(encrypted_filename, 'rb') as encrypted_file:
encrypted_data = encrypted_file.read()
decrypted_data = cipher_suite.decrypt(encrypted_data)
decrypted_filename = encrypted_filename.replace('.encrypted', '')
with open(decrypted_filename, 'wb') as decrypted_file:
decrypted_file.write(decrypted_data)
decrypt_file(source_file, key)
print(f'{source_file} decrypted.')
```
limer dette inn i [unlock.py](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/23kvudokumenter/unlock.py)
```
$ python3 unlock.py Cashflow.xlsx.encrypted
Skriv inn nøkkelord: e24f52497bcf4c332f1283ec925f77a1
Cashflow.xlsx.encrypted decrypted.
```

Når vi åpner xlxs dokumentet i google drive finner vi flagget.

FLAGG
```
PST{alternativ_pengestrøm}
```

Dokumentet inneholder også endel vittige penge prioriteringer, blant annet "champange og kaviar".

```
Takk, det var bra du fant dette!

For å ha godtatt dette tilbudet måtte vi uansett ha pådratt oss gjeld med ugunstige vilkår, og som vi alle vet er det kun Nissetinget som har lov til å pådra seg gjeld på vegne av den Nordpolarske stat.
Greit å unngå noen problemer der.
```

PST skyter fra hoften. [NSM ulovlig lån.](https://www.nrk.no/nyheter/nsm-tok-opp-ulovlige-lan-1.16670810) 

<a name="luke24"/>

## 24. Desember - Stopp robot-armadaen!
```
Hei helf,

Julegavemaskinen ved nissens verksted har over en lengre periode ikke produsert annet enn smokingkledde roboter med vaggende gange. Nå har endelig maskineriet blitt reparert, men det vagger fortsatt et par titalls tusen robot-pingviner rundt i kontorene her som truer vår suverenitet over Nordpolen.

Vi har vanligvis et innebygget override passord i alle brikkene våre for slike nødtilfeller, men det ser ut til at passordet har blitt endret!

Undersøkelsene våre viser at noen har tuklet med maskineriet, og lastet opp ukjent fastvare til mikrokontrollerene som vanligvis styrer lekene. I tillegg var produksjonssettings-pipelinen kompromittert, hvor vi fant en ukjent enhet koblet til USART-grensesnittet som utfører den endelige konfigurasjon av mikrokontrollerene. Dessverre gikk denne enheten opp i røyk da vi prøvde å koble den fra, så den er totaldestruert.

Etter noen innledende eksperimenter tror vi at disse brikkene kan være sårbare mot fault injection angrep, og KRIAPOS har latt oss få remote tilgang til elektronikk-laben deres for å jobbe videre med dette:

kriapos.no

Laben er allerede satt opp med en brikke som vi har tatt ut av en robot-pingvin. Se om du klarer å få tak i dataen fra denne slik at vi kan se hva override passordet har blitt satt til.

Vi har delt all dataen dere trenger med de samarbeidende etatene allerede, så du vil motta disse fra din kontaktperson veldig snart.
Svar meg på denne eposten når du finner ut av dette!

```

```
Hei alle sammen!

Vi har fått utdelt noen filer i forbindelse med Nisse-saken, og jeg har blitt bedt om å dele disse videre til relevant personnel. Filene ligger vedlagt.

Vi fikk også denne beskjeden sammen med filene:

    Vedlagt ligger den ondsinnede fastvaren som er ekstrahert fra julegavemaskinen: “mykepakkervare.bin”, samt databladet for NISSE32-brikken. Vi tror også kanskje at de har bygget videre på vår vanlige fastvare, så alvdelingen for fastepakkervare har ordnet en debug-variant av fastvaren vi vanligvis bruker: “fastepakkervare.elf”.

Jeg fikk noe pakketap da jeg lastet ned filene, men det har sikkert gått fint. Eventuelt har vel dere teknikere kommunikasjon på tvers av etatene på discord? OBS! Ikke stol blindt på filer du mottar fra andre; dobbeltsjekk hashen i md5sum.txt og bruk gjerne en VM.
```
Veldig kult exploit Kripos! Vi er dypt nede i fysisk hacking for å "hoppe" over instruksjoner med "voltage fault injection". Jeg kommer aldri til å matche forklaringen om hvordan man kan utnytte dette som [Kripos](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/24stopprobotarmada/kriapos/help.html) gjorde, men her er hva jeg fant ut:

Oppgaven kom da med en lab (nettside) der den infiserte maskinvaren kunne ta imot diverse parametere til exploiten, samt diverse kommandoer nevnt i [manualen](https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/24stopprobotarmada/datasheet.pdf)

Ettesom mykepakkevare.bin er en endret versjon av fastepakkevare, er addressene til instruksjonene noe flyttet lenger ned. Det som ble target addressen er 0x800099e som er en passord skjekk mot systemet sitt "override". Disse verdiene fant jeg fra ghidra ved å bruke ARM v8 32-bit hentet fra instruksjonsmanualen. Forskjellen var bare at original varen startet på 0x8000000, mens .bin filen startetpå 0x00000000.

Ghidra generert c kode for det aktuelle område. vi vil skippe if skjekken som er highlightet, selv om vi ikke kan passordet.

<img alt="c" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/24stopprobotarmada/c.png">

ASM med highlight på instruksjonen vi vil skippe for å dumpe flash data - som har et override passord på addresse 0x000099e (ghidra), som er 0x800099e i labben.

<img alt="asm" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/24stopprobotarmada/asm.png">

Dette var parameterene jeg kjørte med:\
bredde: 27 ns \
delay: 4761 * 10 * 4 ns (4 instruksjoner for 100MHz klokkefrekvens - 10 ns)\
kommando: dump_flash HoHoHo123!

Her har ikke passordet noe å si (HoHoHo123), ettersom vi gjør en exploit for å skippe det, men valgte det fordi det er det factory resettet passordet fra originalvaren.

```
Entering command handler
Commencing flash dump:
OVERRIDE_PASSWORD=KRIPOS{Zipp Zapp, endelig napp!}

Start limb control sequence
```
FLAGG
```
KRIPOS{Zipp Zapp, endelig napp!}
```
Julen er iallefall reddet - selv om ikke alle oppgaver i år ble løst.
```
Tusen takk!

Julen er reddet! Takk for fantastisk innsats både i dag og i hele desember. Det har vært bra å ha deg med på laget.
God jul! 🎄🎁
```

<a name="egg"/>

## Egg
Egg er verdt 1 poeng, det ser ut fra scoretavla at det var totalt 7 egg. Eggene er tallgitt etter rekkefølgen jeg fant dem i.

Dette var de jeg fant:

<a name="egg1"/>

### Egg 1 - Minesveiper, Ufødt pingvin
Dag 14 Kom det et nytt nivå i minesveiper spillet, "ufødt pengvin". Når du treffer en bombe viser alle bombene seg, og de staver: EGG{retro}.

<img alt="GeoJettr" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/egg1.png">

EGG
```
egg{retro}
```

<a name="egg2"/>

### Egg 2 - stego + nonogram

[Dag 13's](#luke13) bilde er det [stegografi](https://stegonline.georgeom.net/) hemmeligheter i blått og grønt filter:

<img alt="geojettr stego" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/egg2A.png"  width="600" height="400">

<img alt="geojettr stego2" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/egg2B.png"  width="600" height="400">

Dette viser seg å være et [nonogram](https://en.wikipedia.org/wiki/Nonogram) som vi kan løse på [denne](https://www.peter.com.au/projects/nonograms.html) nettsiden ved å lime inn tallene fra bildene over.

<img alt="egg2" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/egg2.png">


EGG
```
egg{ruter_overalt}
```

<a name="egg3"/>

### Egg 3 - git dangling blob

[Dag 16](#luke16) fant vi også en pre-commit script.
```
$ ./pre-commit
Har noen sett egget mitt? Jeg vet HELT sikkert at jeg la det inn i git, men klarer ikke finne det igjen noe sted...
```
Etter litt sjeleleting finner vi en hengende blob, en endring som aldri kom ut av staging område.
```
$ git fsck --full
Checking object directories: 100% (256/256), done.
Checking objects: 100% (42/42), done.
dangling blob fdfbb6ab8dda68e83853bf372a100e8ff6e8830f
Verifying commits in commit graph: 100% (19/19), done.

$ git show fdfbb6ab8dda68e83853bf372a100e8ff6e8830f
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',,,,;:ldkO00000Okdoc;,,,,,,,,,,,,',,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:ldk0KXXXXXXXXXXXK0Oxoc;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;cdk0XXXXXXXXXXXXXXXXXXXXXKOxl:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:okKXXXXXXXXXXXXXXXXXXXXXXXXXXXKOdc;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,cx0XXXXXXXXXXXXXXXXXXXXXXXXXXXNXXXXXKkl;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,cx0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKko;,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,cx0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKkl;,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,:d0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKXXXXXNXXXXKkc,,,',,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,;lOXXXXXNXXX0kk0XXXXXXXXXXXXXXXXXXXXXK0kOKXXXXXXXXXX0d:,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,',,,:xKXXXNXXXXKOxxxxOKXXNXXXXXXNNXXXXXXX0kxxxkOKXXXXXXXXXXOl,,,,,',,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,lOXXXXXXXXKOkxxxxxxkOKXXXXXXXXXXXXXXKOxxxxxxxk0XXXXXXXXXX0d;,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,;d0XXXXXXXX0kxxxxxxxxxxk0XXXXXXXXXXXK0kxxxxxxxxxxOKXXXXXXXXXKx:,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,;oOXXXXXXXKOkxxxxxxxxxxxxxOKXXXXXXXX0kxxxxxxxxxxxxxkOKXXXXXXX0ko:,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,:oxkOKXXXKOkxxxxxxxxxxxxxxxxkOKXXXXKOkxxxxxxxxxxxxxxxxk0XXXX0Oxxxdc,',,,,,,,,,,,,,,,
,,,,,,,,,,,,,',:oxxxxk0K0kxxxxxxxxxxxxxxxxxxxxk0K0OkxxxxxxxxxxxxxxxxxxxxO0KOkxxxxxdc;,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,cdxxxxxxxkxxxxxxxxxxxxxxxxxxxxxxxxkxxxxxxxxxxxxxxxxxxxxxxxxkkxxxxxxxxdl;,,,,,,,,,,,,,,
,,,,,,,,,,,,,cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;,,,,,,,,,,,,,
,,,,,,,,,,,,cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;,,,,,,,,,,,,
,,,,,,,,,,,cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;',,',,,,,,,
,,,,,,,,,,:dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;',,,,,,,,,
,,,,,,,,,:oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc,,,,,,,,,,
,,,,',,,:oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc,,,,,,,,,
,,,,,,,;lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd:,,,,,,,,
,,,,,,,cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo;,,,,,,,
,,,,,,:dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;,,,,,,
,,,,,;oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc,,,,,,
,,,,,lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo:,,,,,
,,,,:dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;,,,,
,,,;lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc,,,,
,,,cdxxxxkO0kxxxxxxxxxxxxxxxxxxxxxk00kxxxxxxxxxxxxxxxxxxxxxxO0OkxxxxxxxxxxxxxxxxxxxxxO0Oxxxxxxxo;,,,
,';lxxxxOKXXX0kxxxxxxxxxxxxxxxxxkOKXXKOxxxxxxxxxxxxxxxxxxxk0XXXKOxxxxxxxxxxxxxxxxxxk0XXX0kxxxxxdc,',
,,cdxxk0XXXXXXKOxxxxxxxxxxxxxxxOKXXXXXXKOxxxxxxxxxxxxxxxxOKXXXXXX0kxxxxxxxxxxxxxxk0XXXXXXK0kxxxxo;,'
,;lxkOKXXXXXXXXXKkxxxxxxxxxxxk0XXXXXXXXXX0kxxxxxxxxxxxxk0XXXXXXXXXKOkxxxxxxxxxxxOKXNXXXXXXXKOxxxdc,,
,:dOKXXXXXXXXXXXXX0kxxxxxxxkOKXXXXXXXXXXXXKOxxxxxxxxxk0XXXXXXXXXXXXXKOxxxxxxxxk0XXXXXXXXXXXXX0kxxl;,
,l0XXXXXXXXXXXXXXXXKOxxxxxOKXXXXXXXXXXXXXXXXKkxxxxxxOKXXXXXXXXXXXXXXXX0kxxxxk0KXXXXXXXXXXXXXXXKOkd:,
:kXXXXXXXXXXXXXXXXXXX0kxk0XXXXXXXXXXXXXXXXXXXX0kxkO0XXXXXXXXXXXXXXXXXXXKOkxOKXXXXXXXXXXXXXXXXXXXKkl,
l0XXXXXXXXKKXXXXXXNXXXXKKXXXXXXXXXXKKXXXXXXXXXXKKXXXXXXXXXXXXKKXXXXXXXXXXKKXXXXXXXXXXKKKXXXXXXXXXXk:
oKXXXXXXX0kxkKXXXXXXXXXXXXXXXXXXXKOxxOKXXXXXXXXXXXXXXNXXXXXKkxk0XXXXXXXXXXXXXXXXXXXX0kxk0XXXXXXXXX0l
xXXXXXX0kxxxxkOKXNXXXXXXXXXXXXXX0kxxxxk0XXXXXXXXXXXXXXXXXKOxxxxxk0XXXXXXXXXXXXXXXXKOxxxxxOKXXXXXXXKo
kXXXXKOxxxxxxxxk0XXXXXXXXXXXXX0kxxxxxxxxOKXXXXXXXXXXXXNX0kxxxxxxxxOKXXXXXXXXXXXXKOkxxxxxxxk0KXXXXXXx
OXXX0kxxxxxxxxxxxOKXXXXXXXXXKOxxxxxxxxxxxxOKXXXXXXXXXXKOxxxxxxxxxxxk0XXXXXXXXXX0kxxxxxxxxxxxk0XXXXXk
0X0kxxxxxxxxxxxxxxkOKXXXXXX0kxxxxxxxxxxxxxxk0XXXXXXXKOxxxxxxxxxxxxxxxkKXXXXXXKOxxxxxxxxxxxxxxxOKXXXO
0Oxxxxxxxxxxxxxxxxxxk0XXXKkxxxxxxxxxxxxxxxxxxOKXXXK0kxxxxxxxxxxxxxxxxxxOKXXKOkxxxxxxxxxxxxxxxxxk0KX0
xxxxxxxxxxxxxxxxxxxxxxO0OxxxxxxxxxxxxxxxxxxxxxkO0Okxxxxxxxxxxxxxxxxxxxxxk00kxxxxxxxxxxxxxxxxxxxxxk0k
dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd
dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd
oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo
oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo
lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl
:dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx EGG{h3ng3r 0g d1ngl3r} xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc
;oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo:
,cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;
,;oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd:,
',cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl;,
,,;lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd:,,
,,,;oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc,,,
,,,,:oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdl;,,,
,,,,,:dxxxkkxxxxxxxxxxxxxxxxxxxxxxxkkxxxxxxxxxxxxxxxxxxxxxxxxkkxxxxxxxxxxxxxxxxxxxxxxkkxxxxxxxo;,,,,
,,,,,,:dxk0KOkxxxxxxxxxxxxxxxxxxxkOKKOkxxxxxxxxxxxxxxxxxxxxk0K0Oxxxxxxxxxxxxxxxxxxxxk0K0kxxxxo:,,,,,
,,,,,,,cxKXXXKOxxxxxxxxxxxxxxxxxk0XXXX0kxxxxxxxxxxxxxxxxxxOKXXXK0kxxxxxxxxxxxxxxxxkOKXXXKOkxo:,,,,,,
```
EGG
```
EGG{h3ng3r 0g d1ngl3r}
```

<a name="egg4"/>

### Egg 4 - Minesveiper, Pen GWYN
Minesveiper spillet PEN GWYN kommer med en ekstrem langt (2x160) spill.\
Når du spillte viser det seg å være hardkodet bomber på samme sted hver runde, akkurat som [egg 1](#egg1).\
Hvis vi konverterer begge radene binært, gjør en xor operasjon på de og dropper den siste (trailing) bit'en får vi:
```
00111111 00101100 10011000 01110010 11111010 11001100 00011100 01011001 01000010 01011010 11111101 11001001 10100010 01011100 01011001 10011000	10101001 00000011 10111101 11111011
XOR
01111010 01101011 11011111 00001001 10011000 10100011 01110001 00111011 00100111 00101000 10100010 10100110 11000101 00000011 00111111 11110100	11001000 01100100 11011010 10000110
=
10001010 10001110 10001110 11110110 11000100 11011110 11011010 11000100 11001010 11100100 10111110 11011110 11001110 10111110 11001100 11011000 11000010 11001110 11001110 11111011
```

1000101 1000111 1000111 1111011 1100010 1101111 1101101 1100010 1100101 1110010 1011111 1101111 1100111 1011111 1100110 1101100 1100001 1100111 1100111 1111101

```
EGG{bomber_og_flagg}
```

<a name="bonus"/>

## Bonus

### Bonus 
Dag 13 kom det ut en Minesveiper spill i dashbordet. Der var det en "Berømmelsestavle". Etter en nærmere titt i nettverkstrafikken når vi leverte et minesveiper spill, går det en postrequest med tiden vår som blir registrert på tavlen.
Dette er svakt mot et klientside http manipulasjon angrep.

Vi kan modifiserere forespørselen i Postman med den tiden vi ønsker. Problemet er bare at JSON ikke encoder Infinity. Men siden JavaScript er veldig ivrig til å gjøre artimatiske kalkulasjoner med strenger kan vi sende med tidsparameter som strengen "-Infinity" og vi havner på 6. plass!

<img alt="GeoJettr" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/minesveiper-highscore.png">

