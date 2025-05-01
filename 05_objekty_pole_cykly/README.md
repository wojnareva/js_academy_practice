# Úloha 05 (objekty, polia, cykly)

Budem vysvetľovať (a odvtedy) nonstop používať) `polia` a `objekty`. JavaScript má množstvo metód pre prácu a poliami. Pole je spôsob, ako do jednej premennej uložiť viac hodnôt. Zoznam. Často budeme pracovať s poľom plným objektov.

Ak mám databázu plnú produktov, každý produkt bude `objekt`.
Ak z nej chcem všetky produkty, vrátia sa mi v `poli`.
Mám pole objektov.
Každú položku poľa vieme spracovať cez tzv. `cyklus`.

Toto sú prevažne úlohy pre prácu s poľami a objektami.
Keďže tok času je komplikované, neviem, kedy toto čítaš. Možno som už vysvetľoval cykly a funkcie? Možno som ešte nevysvetľoval cykly a funkcie? Ak som ešte nevysvetľoval cykly a funkcie, tak možno ich nájdeš vysvetlené v <#1348937753836130336> 🙂 Ale ak som to ešte nevysvetľoval a nevieš, čo to je, pokojne úlohy ignoruj! Vrátiš sa k nim v budúcnosti a s komfortom v duši. 

Pričom stále platí, že ak máš vlastné nápady alebo projekte, vyrábaj vlastné projekty 🙂

## a) Pár nudných úloh pre prácu s poľom
toto sú úlohy na funkcie, cykly a rozmýšľanie a dohľadávanie si informácií na internete. 

skús vyrobiť:
- **funkciu**, do ktorej pošleš pole čísel, ona vráti ich súčet
- **funkciu**, čo nájde najväčšie číslo v poli
- **funkciu**, čo spočíta, koľkokrát je v poli slovo "Vašo"
- **funkciu**, čo spočíta, koľko je v poli párnych a koľko nepárnych čísel
- **funkciu**, čo každé číslo v poli zmení na 10 násobok, čiže `z [ 3, 5 ] bude [ 30, 50 ]`
- **funkciu**, ktorá vypíše iba každú druhú hodnotu poľa

čiže vytvor si jedno pole plné čísel. druhé pole plné stringov. tieto budeš posielať do funkcií.

pri párnych a nepárnych číslach: na internete nájdeš ako v javascripte zistiť, či je číslo párne. vytvor si premennú `even` s hodnotou `0`. vytvor premennú `odd` s hodnotou `0`. ak je číslo párne, zvýš `even` o jedna. v opačnom prípadne ak je číslo nepárne, zvýš `odd` o jedna. vylepšiť to môžeš o kontrolu, či je hodnota vôbec číslo.

lebo napr. ak máš v poli okrem čísel aj nejaké stringy, ťažko sa rozhodneš, či _'Vašo'_ je párne alebo nepárne 🙂 napríklad _'Vašo'_ je síce len **jeden človek, jedna legenda a to je nepárne. ale zároveň Vašo napísal song s názvom 'Dvaja'?? a to je pár!!** uuuhhhhhhhhhh... kde som?? som mentálne v poriadku?

_ _
## b) Úloha, ktorú nenávidím:
Na škole sme mali úlohy ako _"vypíš 5 hviezdičiek"_ a ja, že _"...čo? načo?!"_
Tieto úlohy sú abstraktné a nemám ich rád, anyway napíš kód, ktorý do konzole vypíše X hviezdičiek 😄
```js
// ak
let stars = 5;

// konzola vypise
*****
```
Čiže cyklus. Zopakuješ výpis hviezdičky 5x.

**Ale teraz tam pridaj druhý cyklus!!** Cyklus v cykle!! Nech tvoj kód vypíše:
```js
*****
****
***
**
*
```
V každom prechode sa to číslo 5 zníži o 1.
A v každom vypíšeš o 1 hviezdičku menej.

**Reálnejšia verzia cyklu v cykle:** mám úlohu zobraziť články. Každý článok môže mať komentáre. Články mám v poli. V cykle vypíšem každý článok. Ale každý článok v sebe má pole komentárov. Počas cyklu čo vypisuje články, spustím spustím ďalší cyklus, čo vypíše všetky jeho komentáre.

❤️

_ _
## c) Objekty v objektoch v poli a možno v knihách?
Kuk sem https://knihobot.cz/a/667 ako príklad eshopu. Spomínal som (alebo spomeniem, čas je zvláštny) že každý produkt bude objekt. A keď ich mám 12, tak mám pole 12tich objektov. Takže vytvor si pole objektov. Každý objekt bude jedna kniha. O každej knihe budeš evidovať:
- názov
- fotku obálky
- autora
- cenu
- dátum publikácie
- popis

Vytvor takéto objekty. Konkrétne hodnoty môžeš kopírovať priamo z knihobotu. Samozrejme pokojne si vymysli svoju vlastnú úlohu alebo tematiku, nemusíš robiť s knihami. V úvode som ukazoval, že chalan vyrobil toto https://strathell.com to rozhodne nebola téma, ktorú som ju zadal spracovať 😄 On sa iba inšpiroval vecami, ktoré som ja hovoril a poďla nich vyrábal vlastnú vec. A to je najlpšie! 

Každopádne vytvor objektu pre knihu. Ale s tým, že **autor bude ďalší objekt**, (čiže objekt v objekte) o ktorom budeš evidovať:
- meno
- fotku
- popis/bio
- dátum narodenia

Takže máš pole objektov. A teraz sprav:
- **funkciu**, ktorá zráta ceny všetkých kníh dokopy a naformátuje ich pekne na české koruny
- **funkciu**, ktorá nájde najdrahšiu knihu
- **funkciu**, ktorá nájde najstaršiu knihu

Pokojne si tie objekty uprav podľa seba. Nemusíš ani robiť s knihami, ak koncept písaného slova v tebe nebudí záujem 😌 Navyrábaj si dáta, ktoré ťa rajcujú, ide len o to pracovať s objektami. A poliami. A mať pole objektov a vedieť s nimi pracovať. Hlavne, ak každý objekt v sebe má ďalší objekt.

_ _
## d) Uprav `createNewCard()` aby pracovala s OBJEKTOM
`createNewCard()` je naša funkcia, ktorá vytvára nové HTML elementy. Možno ju už máš, pretože to bola jedna z úloh. Možno ju ešte len vyrobím na hodinách. Každopádne: 

Zmeň ju tak, aby prijímala 2 argumenty: `selector`, `object`.

Podľa `selectora` sa nájde rodičovský HTML element.
`object` bude objekt, ktoré v sebe drží `title` a `content`.

Jediná zmena je, že teraz do funkcie posielame `title` a `content` priamo. Teraz ich tam pošleš ako objekt. Funkcia potom bude lepšie pripravená na prácu s databázou a pod.

## e) Pridaj cardom `class` atribút
V HTML kóde nášho žltého webu má každý `<li>` element `class` atribút.
Ak preskúmaš CSS, uvidíš, že podľa classu sa zobrazuje ikonka vedľa nadpisu.
Moja funkcia zatiaľ `class` ignoruje.

**Prerob funkciu, aby `<li>`  dostali aj `class` atribút.** `class` hodnota je jedno slovo. znova žiadne medzery, žiadna interpunkciu, špeciálne znaky.

Hodnotu pre class posielaj objekte (spolu s title a content). Potom to skús prerobiť tak, že hodnotu pre `class` vytvoríš _z prvého slova nadpisu_.

Napr. ak nadpis je `Inside Playdate`, tak vznikne element `<li class="inside">`.
Pretože prvé slovo nadpisu je _Inside_. Ak nadpis je `Krásny nový nadpis`, tak `<li class="krasny">`.

Skús z textu nájsť prvé slovo, šup na malé písmená a ideálne odstrániť interpunkciu.
V angličtine jej často hovoríme_"accents"_ alebo _"diacritics"_.
To keď budeš hľadať odpoveď 😉

