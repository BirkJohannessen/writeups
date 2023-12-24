# p26e Julekalender 2023 (PST)

## 1. Desember - mobil-detektiven

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

## 2. Desember - Scrambled
```
Over natten har det vært store utfordringer knyttet til en av maskinene i verkstedet. En serie feilproduserte leker har kommet på rullende bånd. Vi prøver å finne ut hva som har skjedd. Graver du ned i det her?

- Mellomleder

📎Bilde
```

<img alt="pinneved reversert" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/02scrambled/oedelagte_leker.png">

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

## 3. Desember - Redacted

```
Det er krise! Filene på alvemaskinene har blitt kryptert, og vi har ingen backups tilgjengelig!

På nissens skrivebord fant vi det vedlagte brevet, sammen med en kryptert fil.

Det er ubeskrivelig viktig at vi får åpnet denne filen igjen umiddelbart, da Jule NISSEN ikke klarer å huske innholdet!

- Mellomleder

📎 Mitt utpressingsbrev.docx
📎 huskeliste.txt.enc 
```

placeholder

FLAGG
```
KRIPOS{Husk å se etter spor i snøen!}
```

da landet vi 10p med 30 totalt.


```
Flott!

Jeg kaller inn til et møte med Jule NISSEN og de andre påvirkede så vi kan få delt ut informasjonen igjen.
- Mellomleder
```

## 4. Desember - pinneved

```
Alvebetjentene på Jule NISSEN sitt verksted våknet i dag til et fryktelig syn; Julenissens slede er sprengt i fillebiter. Vi har satt folk på saken for å finne ut av hvem som er ansvarlig for ødeleggelsen, men det er kritisk at sleden blir reparert slik at vi får testet den før Jule NISSEN skal levere pakkene.

Alvebetjentene har samlet vrakrestene, samt verktøyet de mistenker at sabotørene har brukt.

Vi trenger at du rekonstruerer sleden så fort som mulig!

- Tastefinger

📎 pinneved.py
📎 pinneved.txt
```

Her får vi to filer, et python script og en fil med pinneved - uleslig data.

pinneved.py:

```
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

```
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
```
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
logikken i løsningen er å filtere på norge, siden busstoppet var rett med resturant (30 meter magic guess), titalls meter til fontenen (90m med litt slark fra resturanten) som igjen var 50m unna biblioteket.

<img alt="Resultat over norge" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/05mulvarpjakt/turbo2.png">

<img alt="Drøbak sentrum" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/05mulvarpjakt/turbo1.png">

Nøyaktig på frogn bibliotek.

FLAGG
```
PST{FROGN BIBLIOTEK}
```


```
Ypperlig! Nå har vi dem! :)
- Tastefinger
```


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

Som en stolt vim entuiast limte jeg denne oppskriften inn i et buffer jeg hadde åpent - Og der var svaret umiddelbart. Vim encoder ikke spesialbytes som andre teksteditorer, men printer de i <> format. Svaret var samlingen av bokstaven etter <200d> byten som vist på bilde.

<img alt="200d" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/06kaker/kake.png">

FLAGG
```
PST{pepperkakerermotbydelige}
```


```
Hvordan kan man ikke like pepperkaker?!
- Tastefinger
```


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


## 8. Desember - ransomware


```
Skjermen på en av datamaskinene på NISSENS verksted ble plutselig dekket av mange meldinger om at viktige filer var blitt kryptert. Et team av alver klarte å finne igjen denne filen sammen med en høyst mistenkelig fil, men klarer ikke å dekryptere filen. De har delt filene i et ZIP-arkiv med infected som passord. Klarer du å få tilbake den viktige filen?

- Tastefinger

📎mistenkelig_beslag.zip
```
```
red@red:~/personal/writeups/p26e-julekalender-2023/08ransomware$ 7z e mistenkelig_beslag.zip

7-Zip [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=en_US.UTF-8,Utf16=on,HugeFiles=on,64 bits,16 CPUs AMD Ryzen 7 5800X 8-Core Processor              (A20F12),ASM,AES-NI)

Scanning the drive for archives:
1 file, 923323 bytes (902 KiB)

Extracting archive: mistenkelig_beslag.zip
--
Path = mistenkelig_beslag.zip
Type = zip
Physical Size = 923323


Would you like to replace the existing file:
  Path:     ./flagg.kryptert
  Size:     1538 bytes (2 KiB)
  Modified: 2023-11-09 14:44:04
with the file from archive:
  Path:     flagg.kryptert
  Size:     1538 bytes (2 KiB)
  Modified: 2023-11-09 14:44:03
? (Y)es / (N)o / (A)lways / (S)kip all / A(u)to rename all / (Q)uit? y


Enter password (will not be echoed):
Everything is Ok

Files: 2
Size:       1873410
Compressed: 923323
red@red:~/personal/writeups/p26e-julekalender-2023/08ransomware$ ls
flagg.kryptert  mistenkelig_beslag.zip  wuauclt.exe


```

FLAGG
```
placeholder flagg
```

```
placeholder response
```


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

<img alt="høyre fremre side av bygingen er hvor bildet er tatt" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/09kronolokalisering/overview.png">

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

viser det er ganske likt fordelt mengder med [a-zA-Z0-9], inkludert endel NULL bytes. men bare en "{" og "}" vist som ascii verdier i hex (7d, 7b) 

litt frem og tilbake ender vi på dette python scripet, med god hjelp fra meldingen som "sortere", "null", "langt ord": (litt synd på de som gikk på "rot" som "ROT-13")

```
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

Her bare lagde jeg noen dummy kontoer for å laste ned zipfilene til KRIAPOS og NISM. hver zip fil kommer med et passord angitt i meldingen, den er det bare å hive inn i z7 for å få hemmelighet filene:
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
```
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

## 13. Desember - GeoJettr
```
Ledelsen har fått dilla på GeoGjettr og jeg er med i en konkurranse, men klarer ikke finne ut av hvilken by bildet her er fra. Kan du hjelpe meg litt fort?

Svar meg med KRIPOS{navn på by}.

- Mellomleder

📎bilde.jpg
```

<img alt="GeoJettr" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/13geogjettr/bilde.png">

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
Et raskt skjekk om det går opp for PST, bekrefter teknikken her: (sidetall, linje, ord, ordnummer med startindex 1)

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


## 15. Desember - Bit-Råte

```
Brukerveiledningen til en av de eldste maskinene på verkstedet har blitt borte. Heldigvis har Julenissens arkiv 1000 sikkerhetskopier av dokumentet på magnetbånd. Det viser seg at alle kopiene er kraftig angrepet av bit-råte så dokumentet må gjenoppbygges. Ifølge arkivalven så er brukerveiledningen skrevet på gammel-nordpolarsk som har samme alfabet som norsk, men inneholder ikke nye tegn som disse: {}#$[]§¤@

Når du finer ut av det så send meg MD5-sjekksummen til det gjenoppbyggede dokumentet på formen PST{checksum}. Svaret er ikke versalfølsomt.

- Mellomleder

📎backups.zip
```


rot.py
```
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
## 16. Desember - Invasjon
```
Gjennom temmelig hemmelige innhentingsmetoder har vi fått tak i det vedlagte dokumentet som avslører den egentlige hensikten bak løsepengeangrepet: Sydpolare aktører planlegger å invadere Nordpolen for å stoppe julen én gang for alle!

I dokumentet nevnes det at aktørene har plantet deep-cover agenter i blant oss, og at de har hemmelige koder for å etablere kontakt med disse. Analyser materialet og se om du klarer å avsløre de hemmelige kodene slik at vi kan få disse agentene på kroken!

I mellomtiden iverksetter vi umiddelbare mottiltak for å stanse invasjonen.

- Tastefinger

📎aksjon_2023.zip
```
I aksjon_2023 ligger det en pre-merge-commit hook (git) med endel interessante sed kommandoer.

```
```

De hemmelige kodene er base64 encodet og kan kjøres rett i terminalen.

FLAGG
```
KRIPOS{Flagg i alle kriker og kroker}
```

```
Jeg tenker vi skal vagge ned til fiskeforhandleren og se hva vi ser jeg!
- Tastefinger
```


## 17. Desember - Innebygde ord 
```
Vi har snappet opp to meldinger som ble sendt til hovedobjektet i J-SAK EMBED. Vi mistenker at meldingene ikke er hva det ser ut til å være.

Den første meldingen som ble sendt var en merkelig tekst om å telle, mens melding nummer to bare ser ut til å være en rekke med tall. Vi tror det er en betydning i disse tallene, kan du se på det og gi oss tilbakemelding hvis du finner noe meningsfylt?

- Tastefinger

📎melding_1.txt
📎melding_2.txt
```

FLAGG
```
pst{nede for telling}
```

```
Naturligvis! Nå tror jeg vi har en vektor for å få løst denne saken.
- Tastefinger
```
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

read.py
```
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

## 19. Desember - Hide and Seek

```
Som følge av et stadig økende trusselbilde, spesielt ifra sydligere strøk, har Nordpolar sikkerhetstjeneste etablert en intern enhet som skal beskytte tjenestens egne digitale systemer mot angrep. Enheten består av nøye selekterte tidligere alveteknologer som har god erfaring med bekjempelse av sydpolare aktører.

Grunnet tidligere prestasjoner på Nordpolen har NISSEN selv navngitt enheten til Julens Utvalgte Lærde Elektronisk databehandlende Sikkerhets og Operative Center, forkortet JULESOC. JULESOCen kan blant annet bidra til å finne ondsinnede fugler i datasystemene til Julenissens verksted, grave i sildcoin transaksjoner og analyse av speilglatte kopier.

JULESOC har nylig mottatt en speilkopi av en arbeidsstasjon lokalisert på Julenissens verksted. Det er mistanke om at noen uautoriserte har vært inne på maskinen og tukla. Vi trenger at du graver frem noen spor.

- Mellomleder

📎image.raw.gz
```

```
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

offsettene er kalkulert ved start * 512 units for hver partition.
det vi finner i partisjonene er blant annet en nissetekst og en kode. PTSen kicker inn fra dag 17, men viser seg å være en mye snillere utgave. dette er direkte indekser i filen og vi får flagget ved dette python scriptet.

solution.py
```
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
## 20. Desember - Rudolfs Eventyr

```
Julefreden har begynt å senke seg over Nordpolen, og alvene har blitt hekta på på et retro spill. I følge noen av alvene er det visstnok mye hemmeligheter her!

Et lite avbrekk i julestria må da være lov?

- Tastefinger

📎rudolfs_eventyr.gba
```

Del 1:
Det er en papirlapp, men  nesten alt av den har
blitt revet bort.
Paa det lille som er igjen staar det 'NSM{'.


Del 2:
"Jeg hoerte at en del av flagget ligger i VRAM!"

<img alt="RUDO" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/del2.png">


Del 4:

<img alt="RUDO" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/20rudolfseventyr/del4.png">

Oversatt fra taktilt blir dette:

Del4
EDDE

FLAGG
```
NSM{RUDO????EDDE????????

--NSM{RUDOlf rEDDEr dagen}
--NSM{RUDOlf_rEDDEr_dagen}
--NSM{RUDOlf rEDDEr jula}
--NSM{RUDOlf_rEDDEr_jula}
--NSM{RUDOlf_rEDDEr_julen}
--NSM{RUDOlf rEDDEr julen}

--NSM{RUDOlf rEDDEt dagen}
--NSM{RUDOlf_rEDDEt_dagen}
-- NSM{RUDOlf rEDDEt julen}
--NSM{RUDOlf rEDDEt jula}
NSM{RUDOlf_rEDDEt_jula}
NSM{RUDOlf_rEDDEt_julen}
--NSM{RUDOlf_rEDDEt_jul}

NSM{RUDOlf_rEDDEr_jul}
NSM{RUDOlf rEDDEr jul}
```

## 21. Desember - Rudolf "The Stag"'s Pepperkaker

```
Nasjonens sikkerhetsalver leter febrilsk etter sin temmelig hemmelige pepperkakeoppskrift, men det peker til at Rudolf "The Stag" kanskje har spist opp denne. Klarer du skanne "The Stag"'s kropp og lese av denne før den går sin naturlige gang og blir borte for alltid?
- Mellomleder
```

## 22. Desember - Gaveliste endring
```
Hei helf,

JULESOC har fått en alarm fra informasjonssystemet tilknyttet NISSENS gavelager på VALøya i Tromsø. Alarmen handlet om en uautorisert modifikasjon i databasen som styrer inventaret til lageret, og JULESOC har sendt oss databasefilene slik de forekom på tidspunktet alarmen gikk.

Har du mulighet til å sjekke ut filene og finne ut hvilken rad som er blitt modifisert?

📎 ALARM_JULESOC.zip

Returner UUID til den modifiserte raden, f.eks. PST{6eab374e-735f-416e-bcc6-81b4b8dfc7a9}
```

```
```

## 23. Desember

```
Hei helf,

Taskforce ALV utvides stadig og trenger derfor nye lokaler, og dermed er det satt i gang en Konseptvalgsutredning.

Vi har leid inn arkitektfirmaet Juxx og Fauxtneri for å bistå med forslag til nye bygg. Men i lys av aktuelle hendelser har vi innsett at vi må gå arbeidet deres litt mer i sømmene.

Vi må forsikre oss om at det ikke skjuler seg noe juks eller fanteri i arbeidet deres. Vi har fått tilgang til budsjettet deres, og et utkast til et nytt bygg. Problemet er at budsjettet er kryptert, så vi får ikke lest det. Har du noen alternative løsninger?

📎
```

<img alt="blueprint" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/23juxogfanteri/blueprint.png">

med et verktøy fra [stegonline](https://stegonline.georgeom.net/image) kan vi se på manipulerte deler av bildet. Her finner vi en kode i bakdøren

<img alt="code" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/23juxogfanteri/code.png">


```
```

Etter nærmere titt på Cashflow.xlsx.encrypted er dette Base64url encodet (med - og _ replacet med + og / i Base64) og vi kan få den krypterte filen med

```
$ cat Cashflow.xlsx | basenc --base64url -d > Cashflow.xlsx.enc
```

## 24. Desember
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

## Bonus & Egg

### Fun
Dag 13 kom det ut en Minesveiper spill i dashbordet. Der var det en "Berømmelsestavle". Etter en nærmere titt i nettverkstrafikken når vi leverte et minesveiper spill, går det en postrequest med tiden vår som blir registrert på tavlen.
Dette er svakt mot et klientside http manipulasjon angrep.

Vi kan modifiserere forespørselen i Postman med den tiden vi ønsker. Problemet er bare at JSON ikke encoder Infinity. Men siden JavaScript er veldig ivrig til å gjøre artimatiske kalkulasjoner med strenger kan vi sende med tidsparameter som strengen "-Infinity" og vi havner på 6. plass!

<img alt="GeoJettr" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/minesveiper-highscore.png">

### Egg 1
Dag 14 Kom det et nytt nivå i minesveiper spillet, "ufødt pengvin". Når du treffer en bombe viser alle bombene seg, og de staver: EGG{retro}.

<img alt="GeoJettr" src="https://github.com/BirkJohannessen/writeups/blob/master/p26e-julekalender-2023/fun/egg1.png">
