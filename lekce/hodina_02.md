# 02 VSCODE, zložky a súbory, main.js

## ZLOŽKY (FOLDERS) a SÚBORY (FILES)
začíname pracovať vo https://code.visualstudio.com a v #soubory  nájdeš `js-academy-template.zip` stiahni si.

každý projekt je zložený zo súborov. pri web appkách sú to `.html`, `.css` a `.js` súbory. ja kód hádžem na discord v `.zip` súboroch. každý projekt bude mať svoju vlastnú zložku (folder, adresár, priečinok, ...). všetky všetky súbory pre daný projekt budú v jeho zložke. vo vscode vždy budeme mať otvorenú jednu zložku. nie menej. nie viac. vždy presne jednu zložku 🙂

tie `.html`, `.css` a `.js` súbory spolupracujú. ovplyvňujú sa navzájom. držia sa za ruky. ľúbia sa. aby vscode s nimi vedelo plnohodnotne pracovať, musí vscode **všetky** tie súbory vidieť. ak ty budeš potrebovať upraviť súbor `index.html`, **nikdy vo vscode neotváraj iba súbor `index.html`.** namiesto toho **vždy vo vscode otvor celú zložku projektu**, ktorá ten súbor obsahuje. vo vscode vľavo v sidebare musíš vidieť všetky súbory projektu.

**na svojom počítači si vytvor zložku pre všetky projekty, ktoré vytvoríš počas akadémie.** a pre každý jeden projekt si doň vytvor ďalšiu zložku, ktorá bude obsahovať všetky súbory toho projektu. vo vscode vždy budeš otvárať celú zložku daného projektu.

` `  
` `  
## LIVE SERVER
do vscode si doinštaluj rozšírenie (extension) s názvom `Live Server`. ak si potom vo vscode otvoríš súbor `index.html` projektu, vpravo dole vo vscode pribudne možnosť `Go Live`.

**takto to bude fungovať: **
ty si z discordu stiahneš `.zip` súbor, ktorý povedzme pridám po hodine. alebo ktorý nájdeš v #soubory. rozbalíš si ho do zložky pre všetky projekty akadémie, otvoríš **celú novo-vzniknutú zložku** vo vscode, vo vscode dvojklik na `index.html` a vpravo dole klik na `Go Live`. to otvorí živú webstránku v tvojom prehliadači. a ty **v tom momente okamžite otvoríš konzolu v prehliadači.** a si ready na prácu s kódom 🙂

:point_right: kód budeme písať do `main.js`

prihodím (na discord) ešte pár obrázkov, že cca ako asi to má vyzerať, a ideme!

` `  
` ` 
## ČO ĎALEJ?
stiahni si `01-js-nase-prve-funkcie.zip` a pokús sa kód spojazdniť na tvojom počítači podľa toho, ako popisujem hore v texte v sekcii o zložkách, súboroch a live serveri. **je v poriadku, ak ti to robí problém. nie je na tom nič zlé.** nikto sa nenarodil so schopnosťou používať program visual studio code. ak je to pre teba nové, je úplne normálne, že to bude frustrujúce. chce to len trpezlivosť, čas a opakované pokusy 🙂

ak máš ten kód rozbehnutý, javascript nájdeš v súbore `main.js`. kód je podrobne okomentovaný. dobrý spôsob, ako sa učiť, je meniť kód. vezmi môj kód a upravuj ho. hraj sa ním. ak ho pokazíš, nevadí, znova si z discordu stiahni ten súbor a ideš odznova. je oveľa jednoduchšie upravovať kód, ktorý už existuje. verzus písať čisto nový kód do prázdneho súboru. všetok môj kód máš k dispozícii. hraj sa s ním ✨

**👇 VŠETKO TOTO DOLE MÔŽEŠ IGNOROVAŤ 🙂** prečítaj si a uvidíš, či je to pre teba užitočné 👇 je v poriadku, ak neni.

` `  
` ` 
## WEB-APPKY ROZDELENÉ DO SÚBOROV
napíšem pár vecí o súboroch a zložkách. a keď hovorím _"pár vecí"_, myslím tým _"hrozne veľa slov! príšerne veľa slov"._ **ale ber to čisto informatívne!!** možno ti tieto informácie budú užitočné. ale nič z tohoto tu neni kód, ktorý by si musel/a písať. len chcem trošku bližšie vysvetliť priložený kód, s ktorým budeme pracovať. ak ti tieto veci nedávajú zmysel, pokojne ignoruj 🙂

web-appky sú zložené z `.html` súborov (obsah), `.css` súborov (vizuál) a `.js` súborov (interaktivita). väčšinu nášho kódu budeme písať do súboru s názvom `main.js`. do #soubory nahrávam môj kód. môžeš s ním pracovať. stiahni si ho. `main.js` nájdeš v pod-zložke `js` a ku html je "pripojený" cez `<script defer src="./js/main.js"></script>` čo nájdeš v hlavičke `index.html` súboru.

názov (`main.js`) je môj vlastný. často to je `script.js`, `app.js`, `base.js`, záleží... tých `.js` súborov môžeš mať 3, môžu ich byť desiatky, stovky... a v každom kód zodpovedný za niektorú časť appky. `main.js` môže byť považovaný za "štartovný" súbor. pri menších projektoch môžeš všetok kód mať v jednom súbore.

znova, neexistujú žiadne objektívne správne pravidlá ako rozdeľovať kód. v realite budeš pracovať v tíme a spoločne sa dohodnete. ak pracuješ sám/sama, rozdeľuj si kód do súborov tak, ako to tebe vyhovuje. cieľ je **nemať v kóde bordel**. čo sa považuje za bordel je individálne a bude sa to meniť skúsenosťami. ak si chceš doštudovať ďalšie veci, preskúmaj `import` a `export` v javascripte.

` `  
` ` 
## SCRIPT TAG
```html
<script defer src="./js/main.js"></script>
```
tento zápis hovorí, že naša web appka bude používať súbor `main.js` zo zložky `js`. v inštrukciách ste dostali moju žiadosť, aby ste si pozreli "webrebel reborn" sekciu videí z kurzu webrebel na skillmea. sú tam videá, ktoré sa venujú zložkám a súborom a týmto `./js/main.js` takzvaným cestám. je v poriadku, ak správa súborov zo začiatku robí problémy. **odporúčam na pozerať si tie videá a hlavne skúšať! ak niečo nefunguje, nevadí! to je základ programovania:** vec nefunguje a tvoja robota je búchať do toho tak dlho, kým to fungovať nezačne. a počas toho rozmýšľaš _"prečo to doteraz nefungovalo a prečo to zrazu funguje? kde nastala zmena?"_ a snažiť sa to pochopiť. padať na hubu je súčasť procesu. a nedá sa jej vyhnúť! padaj na hubu! (metaforicky. klávesnicovo.)

` `  
` ` 
## CESTY K SÚBOROM ZAČÍNAJ BODKOU (tečka)
**toto je pre teba relevantné iba ak si chceš vytvárať a pridávať ďalšie `.js` súbory.** nemusíš, neni to potrebné. ale keby chceš, dávam ti info 🙂
```html
<script defer src="./">
```
tečka (bodka) znamená "táto zložka". ak máš tento script tag píšeš do súboru `index.html`, tak tečka je odkaz na tú zložku, v ktorej sa nachádza `index.html`. tá bude vždy štart cesty. pointa tu ale je, že keď začneš v tomto prípade do `src=""` písať cestu bodkou a lomenom, čiže keď začneš takto: `<script src="./">` vscode ti začne dopĺnať a názvy pod-zložiek a súborov a pri každej stačí stlačiť Enter a cestu nemusíš písať ručne.

ak budeš musieť písať cesty k súborom, tak ak cestu začneš `./`, vscode ju začne písať za teba.

toto nedáva zmysel a znie komplikovane, keď to čítaš.
ale skús si to a sleduj očami, čo sa deje.
pochopíš.

zároveň ak ti nič z tohoto nedáva zmysel, nevadí 🙂 je to tu pre tých, ktorí to chcú 🙂 nepotrebuješ. nemusíš to chcieť.