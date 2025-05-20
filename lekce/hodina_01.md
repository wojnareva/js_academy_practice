# 01 PREMENNÉ, funkcie, dátové typy Number a String, konzola

ok, poďme! budem sem textovo rekapitulovať každú hodinu. a keby si to na konci vytlačíš, budeš mať jednu veľmi zlú knihu základov programovania a javascriptu!!

` `  
` `  
## DEVTOOLS KONZOLA
prvý kód kurzu som písal do tzv. konzole v prehliadači firefox. každý prehliadač má tzv. devtools alebo "nástroje pro vývojáře". v každom prehliadači ich nájdeš inde a otvoríš trochu inak, ale internet je tvoj kamarát. často stačí right-click kdekoľvek na webstránke a nájsť "Inspect" alebo "Inspect element" alebo "Prozkoumat prvek" a doklikať sa ku konzole. prípadne skús klávesu F12 🤷‍♂️ to často zabere!

**konzolu budeš mať počas písania kódu otvorenú NONSTOP**. **N-O-N-S-T-O-P!!!** pretože každý, kto píše kód, robí chyby. a konzola ti výrazne červeným textom napíše _"hej! máš tam chybu!"_ a to dôležité. plus sa ti pokúsi vysvetliť _akú_ chybu a pridať aj riadok, na ktorom tá chyba je. nie vždy sa jej to podarí, ale snaží sa.

"skutočný" kód budem písať v programe **visual studio code**, čo je jeden z množstva tzv. textových editorov alebo IDE (divná skratka pre balík nástrojov na písanie/spúšťanie/testovanie kódu) ale na prvé dotyky s kódom (a ukážku toho, ako kód vyzerá) postačí aj konzola.

` `  
` `  
## A TAKTO NEJAK KÓD VYZERÁ, AHA
```js
4 + 5;
10 - 5 - 3 + 2;
10 * 2;
20 / 2;
```
toto boli 4 skutočné riadky regulérneho javascript kódu. keď napíšeš toto, programuješ.

` `  
` `  
## DÁTOVÉ TYPY Number, String, ...
**number** je číslo
**string** je reťazec znakov (zjednodušene texty, slová, vety...)
```js
let meno = "Vašo";
meno;

let priezvisko = "Patejdlistan 🥰";
priezvisko;

meno + " " + priezvisko;
```
v javascripte stringy píšeme medzi apostrofy `''` alebo úvodzovky `""` alebo - ak sa chces nabehat po klavesnici - tzv back ticks. number a string sú ľudsky najpochopiteľnejšie dátový typy, pretože... číslo a text! všetci vieme, čo to je! ďalšie dátové typy budem postupne ukazovať na príkladoch.

` `  
` `  
## ÚLOHA PROGRAMÁTORA
programátor je taaaaaaaaaaaaaaaakto široký pojem. **ale!** predstavme si, že sme ten typ programátora, ktorého úloha je vyrábať web/mobile aplikácie. konkrétne nakresliť tie dáta na obrazovku.

naša úloha vždy bude:
1. zobraziť **správne dáta**
2. zobraziť ich **správnym spôsobom**
3. neustále **upratovať kód**, nech je čitateľný pre človeka

toto je naša mantra. toto budeme recitovať. toto si budeme opakovať. musíme získať alebo vytvoriť správne dáta. upraviť ich do správnej podoby. a nemať bordel v kóde.

s druhým bodom nám pomôžu...

` `  
` `  
## FUNKCIE, METÓDY (METHODS)
pár funkcií pre prácu s textom:
```js
// text na velke/male pismena
meno.toUpperCase();
meno.toLowerCase();

// zopakuje meno 5x
meno.repeat(5);
```
javascript má množstvo funkcií pre prácu s každým dátovým typom. toto je len pár príkladov, ktoré som ukázal na prvej hodine. tieto tu hore sa netýkajú konkrétneho dátového typu, tuto konkrétne typu string.

pointa je, že napríklad string môžem zopakovať 5x `.repeat(5)`, ale neviem ho zoseknúť na 2 desatinné miesta `.toFixed(2)`. lebo to je nezmysel. absolútny nonsens. prečo by som to robil? ako by som to robil??! a napríklad číslo neviem zmeniť na kapitálky `.toUpperCase()`, ale viem ho zoseknúť na 3 desatinné miesta `.toFixed(3)`.

` `  
` `  
## VOLANIE FUNKCIÍ
takýmto funkciám (ktoré sú naviazané na konkrétny tzv. objekt) hovoríme aj **metódy**. spúšťame ich cez bodku. začneme hodnotou, ktorú chcem spracovať: `meno` pridáme bodku `meno.` a teraz či už konzola alebo každý správny textový editor ti ponúkne všetky metódy, ktorými vieš na túto premennú spracovať. v tom zozname nájdeš napríklad `toUpperCase` alebo `repeat` a ukončíš to zátvorkami `()` a vznikne ti:
```js
meno.repeat();
```
v niektorých prípadoch (ako napríklad `repeat`) od teba funkcia bude chcieť **argumenty**. lebo povedal/a si, že chceš to meno zopakovať. ok, ale nepovedal/a si koľkokrát. čo má ten chudák javascript spraviť??! tak do zátvoriek prihodíš hodnotu:
```js
meno.repeat(23);
```
ahaaaa!! 23x! _VašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašoVašo_

v programovaní sa používa fráza "zavolať funkciu". "call a function", "volaj funkciu", "zavolaj funkciu"... to je že je proste spustíš 🙂 keď poviem "zavolám funkciu", myslím tým, že ju používam. že ju spúšťam.

` `  
` `  
## REKAPITULÁCIA
naša robota je zobraziť správne dáta. tie dopredu nepoznáme, preto si vytvárame **premenné**. reálne dáta do nich prídu napríklad od používateľa alebo z databázy. často ale prídu v tvare, ktorý nám nevyhovuje. naša úloha je zobraziť tie dáta správnym spôsobom. a s tým nám pomôžu **funkcie**. kombináciou rôznych funkcií upravíme dáta do tvaru, ktorý nám vyhovuje. budeme vytvárať nové premenné, pridávať ďalšie riadky, kombinovať ďalšie funkcie a tým bude vznikať **bordel**. úloha programátora je vytvárať a neustále po sebe upratovať bordel. ale to ešte uvidíš. každopádne už programuješ!

` `  
` `  
## ČO ĎALEJ?
chcem od vás, aby ste si skúsili napísať kód. pokojne presne ten istý, ktorý som ja písal na hodine. zistit, ako na tvojom počítači otvoríš konzolu. a píš do nej kód. keď človek začína, už len nájsť všetky tie zátvorky a apostrofy na klávesnici je výzva. takže píš kód, ťukaj do toho, hľadaj, skúšaj.

vytvor si nejaké premenné. číselnú premennú. textovú premennú. skús na na volať rôzne funkcie/metódy. ja som ukázal napríklad `.repeat()` ale ty keď do konzole napíšeš za premennú bodku, dostaneš zoznam ďalších, ktoré môžeš volať. skúšaj si ich! aj keď nevieš, čo robia. skús, skús pochopiť čo sa stale a rozmýšľaj nad tým, že prečo. programovanie neni o tom tvrdo sa naučiť, čo presne sa stane, keď napíšeš riadok kódu. programovanie je často o skúšaní. o hraní sa. skús napísať riadok kódu bez toho, aby si vedela, čo sa stane. a potom rozmýšľaj na tým, čo sa stalo a prečo 🙂 ak ten riadok nefunguje alebo hodí chybu, to je ok! programovanie o posúvaní sa dopredu cez tieto chyby a u upravovaní a opravovaní kódu, ktorý nefunguje. takže skúšaj a hraj sa!

pre tých, čo už máte skúsenosti s programovaním: máte prístup ku všetkým skillmea kurzom a k celému internetu. študujte to, čo vás zaujíma. ja osobne by som odporúčal kurz **Vytvářej hry v JavaScriptu**, aj pre tých, ktorých vôbec nezaujímajú. pretože naučíš sa komplexnejšie programátorské postupy, ktoré sú užitočné všade.

kto máte skúsenosti s inými jazykmi a chcete sa naučiť JavaScript, pre vás je určený kurz **JavaScript a ES6** a pre každého je dobrý kurz s názvom **Základy programování a OOP**, kde oboje vysvetľujem v jazyku PHP, ale ide tu u princípy programovania a tie platia všade rovnako. naša úloha tu je naučiť sa _rozmýšľať ako programátor_ a tam nezáleží na jazyku 🙂

toto sú weby, ktoré som mal otvorené počas hodiny, posielam aj sem:

` `  
` `  
## WEBY, KTORÉ SOM UKAZOVAL NA HODINE
- https://github.com/yablko/not-so-solid-snake
- https://yablko.github.io/not-so-solid-snake
- https://github.com/yablko/slovka-hra-uhadni-slovo
- https://slovka.sk
- https://www.youtube.com/playlist?list=PLhB6F20C-jTPITEXEHus6fVZDfNxzRbv_
- https://strathell.com
- https://knihobot.cz/a/667
- https://jsonplaceholder.typicode.com
- https://play.date
- https://shop.a24films.com/collections/blu-rays
- https://github.com/public-api-lists/public-api-lists

` `  
` `  
## BONUS, TEN DIVNÝ `${}` ZÁPIS PRI STRINGOCH
```js
// premenna so sumou
let subtotal = '$60';

// pripravim si zatial prazdu premennu
let words;

// dva sposoby, ako do textu vlozit hodnotu z premennej:
words = `v nakupnom kosiku mam produkty za ${subtotal} a rad si ich kupim`;
words = 'v nakupnom kosiku mam produkty za ' + subtotal + ' a rad si ich kupim';

// oba sposoby vytvoria identicku vetu:
"v nakupnom kosiku mam produkty za $60 a rad si ich kupim"
```
ak text obalíš do apostrofov/úvodzoviek, pomocou `+` vieš zlepiť string hodnoty dokopy. čiže vieš ukončiť string, plus, pridať premennú, začať nový string

ak ale text obalíš backticks \`, môžeš hodnotu vložiť priamo do textu, zápisom `${tvojaPremennaTu}`

ani jeden z týchto spôsobov neni lepší ani horší 🙂 v programovaní všetko vždy vieš spraviť X spôsobmi a je na tebe, ktorý ti príde sympatický.