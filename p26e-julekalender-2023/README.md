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
Bildet viser noen ødelagte leketøy, men det som stikker seg ut er bokstaver på firkantet fargebakgrunn. Det viser seg å være en "åpnet" rubikskube. Strategien var da å finne ut hvordan denne kuben så ut som "løst". Jeg har aldri løst en rubiks kube med strategi, men jeg vet fra barndommen at det går ann å demontere en og så "pusle" de tilbake. Med tunga rett i munnen la jeg ut seks post-it lapper og manuelt løste kuben, samlet de på en stor firkantet matboks og løsningen kunne man lese fra { til }, og Rød side hadde PST (og litt blank data):
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

```
KRIPOS{Husk å se etter spor i snøen!}
```

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

Geolokasjon / OSINT verktøy er noe jeg aldri har tatt i bruk. Som hintet i vrevet fra Tastefinger kan man bruke Overpass Turbo til å finne en lokasjon som passer beskrivelsen i meldingen.\
Overpass Turbo "kodesnutten" her finner to lokasjoner, som er god nok filtrering til å se at Drøbak sentrum er hvor møte er. Nøyaktig på frogner bibliotek.
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
<img alt="Drøbak sentrum" src="https://github.com/BirkJohannessen/writeups/tree/master/p26e-julekalender-2023/05mulvarpjakt/turbo1.png">
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

Som en stolt vim entuiast limte jeg denne oppskriften inn i et buffer - Og der var svaret umiddelbart. Vim encoder ikke spesialbytes som andre teksteditorer, men printer de i <> format. Svaret var samlingen av bokstaven etter <200d> byten som vist på bilde.

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
./RsaCtfTool.py -n 0x5993c05eac819aa17ae7e4e4b9f75b2d6fdbaec913e0b2d6f4ba585a991b62279ed9ac53aeadee3327321e02c0c06ecda184952df5d1cc8b3024643c0afdd9bbd52bf2d830f54d6e59e76844394eb0ffc498995dd270b9b95bf1614984472a3ef12d8c1bad64529be7b638c5d0fccf61c5ac2ab4564e5215748eb2533d4d949afd9486426dbf0c06a07c2c0f6d482e4f8cf3052e6ab9df20878b747936d590c3b8bb0219a378cbec03baee4ea8d0641c57bcc18706bbe92c3f2d7569c424062d9b79464958419b4000e3e31c077bba27ef2fc6ed15b7ebdcdb41d1cbf7708737e200904015d341ef94c537a916f1fec61e0b1bf64762e5a97bafdde290b939c3 -e 3 --decrypt 0x755040806d1d699c76cf2b3fffc28ad8831a8667e1b064297a43733b89f6272483a5a728b725d02b069f8fc65eb51d89ce9133df8f5f2d5e13f63c5423021eb2b56eeb91b11d78717528dfce169450a08d40f5ab451c8ac1f8c6875cffbd4d70259d436ed70baeae37b9bdafc5965
```

```
NSM{af0dbd13cee45990593c182b213f978d}
```

```
Jeg tror jeg trenger hele alvdelingen for kryptografi for å forstå meg på denne her, men bra du fikk det til!
- Mellomleder
```


## 8. Desember


## 9. Desember


## 10. Desember


## 11. Desember


## 12. Desember


## 13. Desember


## 14. Desember


## 15. Desember


## 16. Desember


## 17. Desember


## 18. Desember


## 19. Desember


## 20. Desember


## 21. Desember


## 22. Desember


## 23. Desember


## 24. Desember
