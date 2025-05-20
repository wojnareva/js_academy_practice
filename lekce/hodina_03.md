# 03 MAGICKÝCH 7 🪄 programovania
   
## ABSOLÚTNE ZÁKLADY PROGRAMOVANIA
pred kurzom som si určil **7 tém**, ktoré považujem za základy. cez ktoré chcem prebehnúť na prvých hodinách. **7 konceptov**, ktoré sa používajú všade, nonstop, vždy, pri každej úlohe a v každom programovacom jazyku:

1. premenné `let`, `const`
2. dátové typy `number`, `string`, `boolean`, ...
3. funkcie `function`
4. podmienky `if, else`
5. objekty `{}`
6. polia (arrays) `[]`
7. cykly `forEach`, `for`, ...

toto je **7 vecí**, ktoré potrebujem položiť na stôl. aby som na ne mohol ukázať prstom a povedať: _"aha, **toto** je programovanie!"_ ak ovládame toto, vieme dosiahnuť všetko.

` `  
` `  
## REÁLNEJŠÍ PRÍKLAD (fetch)
na prvej hodine som ukázal `fetch`:
```js
fetch('https://dummyjson.com/recipes')
    .then( res => res.json() )
    .then( data => { console.log(data) } );
```
ktorým vieš v javascripte komunikovať s cudzím počítačom. takzvaným serverom. alebo s databázou. vedia ti dať dáta. a ty ich vieš spracovať. napríklad ich zobraziť na obrazovku. alebo uložiť do súboru. vyrobiť z nich faktúru. a tak podobne. 

ja som sa pripojil na cudzí počítač, ten mi dal zoznam 30tich receptov. ak chcem, viem ich napríklad zobraziť na obrazovku. takto by som vyrobil web alebo mobilnú appku. toto príkaz, ktorý som ukazoval:

veľmi podobne by to fungovalo, keby robíš eshop ako https://knihobot.cz/ pripojíš sa na databázu, tá ti dá zoznam povedame 12tich kníh, a ty ich zobrazíš na stránke.

**a teraz blbé na programovaní je, že aby si toto vedel/a spraviť, _potrebuješ poznať_ tých 7 vecí tam hore.**

ak ja ti chcem ukázať takýto reálnejší, užitočnejší príklad programovania, potrebujem ti najprv vyvetliť 7 divných, pre teba nových vecí. pretože ten `fetch` príklad ich bude používať všetky naraz. a prakticky každá skutočná úloha ich bude používať všetky 🙂

tie koncepty zatiaľ ukazujem na menších, možno abstraktných príkladoch. **a preto môže byť ťažké nájsť si niečo, čoho sa chytiť.** ja som ten problém mal na strednej škole, na matematike: učiteľ rozprával o nejakých funkciách, kreslil akési grafy na tabuľu, ale nikdy nepovedal, na čo to je naozaj. k čomu je to v realite. a ja som sa stratil 🤷‍♂️

` `  
` `  
## TAKŽE TU JE REÁLNY PRÍKLAD
povedzme, že vyrábaš eshop ako https://knihobot.cz/a/667 otvor si túto stránku. momentálne, keď ja píšem tento text, na monitore počítača sa zobrazuje 12 kníh. eshop predáva knihy. údaje o každej knihe sú v databáze. ty ako programátor požiadaš databázu o knihy. ona ti dá zoznam 12 kníh. a ty ich po jednej chceš zobraziť na stránke.

**preložme si to do kódu:**
- databáza mi dá zoznam kníh, ja si ho potrebujem uložiť: `premenná`
- je to _zoznam_, tých kníh je _viac_, bude to: `pole`
- každá jedna kniha má _viac vlastností_ (názov, cena), bude to: `objekt`
- potrebujem knihy zobraziť jednu po druhej: `cyklus`
- na zobrazenie knihy (alebo naformátovanie čísla na české koruny) si napíšem: `funkciu`
- celý kód spustím _iba ak_ nejaké knihy mám: `podmienka if`
- cena bude _číslo_, názov bude _text_, kníh mám celý _zoznam_ a to všetko sú: `dátové typy`

tých odrážok je **7** a neni to náhoda:)

v ďalšom texte podrobne vysvetlím **polia** a **objekty** a neskôr **cyklus**. a potom vlastné funkcie. vysvetlím ich na menších, abstraktnejších príkladoch. ukazujem to na menších príkladoch, aby sme sa naučili tie zápisy, aby sme ich potom mohli používať na skutočných príkladoch.

ja ukážem pole, do ktorého si dám 3 filmy a o kažom evidujem nadpis a cenu. ale ty si pokojne predstav pole, v ktorom je 12 kníh a každá má pokojne desiatky údajov.

**môj príklad bude**: ja si priamo do kódu napíšem pole s 3 filmami.
**realita**: to pole naozaj príde z databázy a môže mať pokojne 10000 záznamov.

ale ak ja ti ukážem príkaz, ktorým zobrazíš tie moje 3 fiktívne filmy, tak tým istým príkazom ty zobrazíš 10000 reálnych hodnôt z databázy.

takže áno: blbé na programovaní je, že aby si vedel/a niečo spraviť, _potrebuješ poznať_ tých 7 vecí tam hore. ale zároveň...

` `  
` `  
## ❤️
**dobré na programovaní je, že aby si vedela spraviť čokoľvek, _stačí ti poznať_ tých 7 vecí tam hore.**

v programovaní sa detaily môžeš učiť donekonečna. ale zároveň stačí ti poznať toto. ak vieš tie veci tam hore, ich správnou kombináciou dokážeš všetko 😘

neboj sa, ak sa strácaš 🙂 sme iba na začiatku. a prvú polovicu kurzu budeme vlastne opakovať týchto 7 vecí dokola. zatiaľ som ich ešte ani poriadne nevysvetlil, iba som ich ukázal a naznačil ich význam. a všetko zatiaľ boli iba divné kúsky javascript kódu vo vscode v súbore, o ktorých hovorím, že _"aha, toto je objekt!"_

a ty si môžeš hovoriť _"....ok? no a?"_ a to je legitímna otázka 😅 ale onedlho tým začnem vyrábať reálne veci, podobné takým, ktoré denne používaš alebo vidíš na internete a postupne to začne do seba zapadať, neboj nič! ok, poďme na `objekty` a `polia` a neskôr `cykly` 😘