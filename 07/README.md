# Úloha 07 (začni jednoducho, buď sochár)

idem písať, tvoja úloha je len čítať 🙂

aha: ja keď niečo robím, **snažím sa najprv spraviť najjednoduchšiu možnú verziu úlohy**. na stránke sex mašiny máme dvoch chlapov. tvoja úloha je, ak klikneš na ktoréhokoľvek z nich, zvýši sa jeho score. čo je jednoduchšie ako kliknutie na dvoch chlapov? kliknutie na jedného chlapa! ja začnem jednoduchšou verziou: skúsim napísať kód, ktorý pracuje iba s vašom patejdlom. predstavím si, že nikto iný na stránke neexistuje. iba ak funguje vašo, skúsim to prerobiť na verziu, ktorá funguje aj s hasselhoffom. iba ak funguje toto, skúsim všeobecnú verziu, ktorá funguje so všetkými chlapmi.

takže vždy začnem s niečím, čo sa _približne podobá_ na riešenie úlohy. potom spravím verziu, ktorá sa viac podobá na riešenie. vyrábam ďalšie a ďalšie verzie a postupne sa posúvam k riešeniu. nikto nikdy nenapísal celý program na prvý pokus. vždy začneš jednoduchou verziou. postupne prepisuješ na komplikovanejšie.

ja nie som sochár a asi nikdy nebudem (ale brad pitt vraj je?) ale tipujem, že sochár keď plieska dlátom do skaly, tak najprv začne s veľmi hrubou kontúrou. postupne skalu opracováva. formuje sa mu pod rukami. až na konci pridáva detaily, aby z toho vznikla dokonalá busta vaša patejdla. ale kým sa k tomu dostane, vznikne niekoľko veľmi približných, v porovnaní s výsledkom jednoduchých, postupne sa komplikujúcich verzií.

**takto rozmýšľaj nad kódom.** kód nepíšeš jeden správny riadok po druhom. ty kód postupne opracovávaš. formuješ, pridávaš, odoberáš, vzniká ti pod rukami. pridáš riadok, vymažeš dva. tri presunieš vyššie, pridáš dva ďalšie. postupne ho formuješ. kód sa neustále mení a začínaš jednoduchou, približnou verziou. postupne pridávaš komplikácie, postupne pridávaš detaily.

povedzme, že javascriptom vytváram elementy a moja úloha je im pomocou https://animate.style dať CSS animácie. aby sa namiesto bliknutia do existencie zobrazili postupne, krásnou animáciou. **animate.style** sú predvyrobené CSS animácie, ktoré sa spustia, ak do HTML kódu pridáš správne classy. každá technológia bude mať dokumentáciu, takže v dokumentácii nájdeš, ktoré classy kam pridať.

viem, že my robíme javascript. ale keby ja mám túto úlohu, môj prvý krok bude **kompletne ignorovať javascript.** v dokumentácií vidíš, že aby sa niečo animovalo, stačí pridať classy do HTML kódu. ignoruj CSS a ignoruj JavaScript! neexistujú! najprv sa pokús spraviť najjednoduchšiu možnú verziu úlohy! a použiť jedno technológiu (HTML) je jednoduchšie ako použiť tri naraz (HTML, CSS, JS).

ja sa hrám na to, že javascript neexistuje. ak sa mi podarí rozbehať animácie priamo v HTML, až potom sa presuniem na komplikovanejšiu časť úlohy: až potom skúsim tie classy pridávať javascriptom počas toho, ako vzniká nový element.

**ak máš úlohu javascriptom vytvárať HTML elementy, ignoruj javascript. žiaden javascript neexistuje. najprv ten HTML kód napíš priamo do `index.html`. prečo? pretože to je jednoduchšie.** začni vždy jednoducho. žiadne programovanie. žiaden javascript. navyše takto získaš istotu, že vieš napísať správny HTML kód. iba ak máš istotu, že vôbec vieš napísať správny HTML kód, potom ho začni vytvárať javascriptom.

programovanie je o tom, že napíšeš jeden jednoduchý riadok. potom k nemu pridáš druhý jednoduchý riadok. a komplexita sa buduje pridávaním jednoduchých riadkov. nikdy nerozmýšľaj nad celým problémom. nerozmýšľaj nad celou úlohou. rozmýšľaj nad tým jedným jednoduchým riadok, ktorý vieš napísať. ak funguje, pridáš ďalší!

_ _
**ak si prečítaš zadanie úlohy a nevieš ju spraviť, to je normálne.** programovanie nefunguje tak, že ty sa naspamäť naučíš niekoľko príkazov a píšeš ich dokola. robota programátora je, že ty dostaneš úlohu a nevieš ju spraviť. ale v každej jednej úlohe budú existovať veci, ktoré spraviť dokážeš! a tými začni.

niekde je tu úloha, že máš vytvoriť padajúce obrázky a keď na niektorý z nich klikneš, zvýši sa score. ty si to možno prečítaš, a povieš si _"to neviem spraviť."_ ok. to je v poriadku. ale sú tam veci, ktoré vieš spraviť! garantujem ti na miliardu percent, že vieš! vieš zvýšiť score! to je obyčajná premenná a ty len spravíš `score = score + 1`.

a garantujem ti, že ak ešte nevieš, tak 100% budeš vedieť zvýšiť score po kliknutí na obrázok! pretože presne to budem robiť na hodinách o tzv. **eventoch**. vyrobím kód, ktorý budeš vedieť použiť.

v tej úlohe máš javacriptom vytvárať obrázky a tie obrázky začnú padať. ok, padanie možno nevieš spraviť. vytváranie obrázkov ale dokážeš spraviť! jednak pretože je vytváranie HTML elementu javascriptom budeme robiť na každej hodiny. plus je to v niekoľkých predošlých úlohách. vytvoríme na to funkciu `createNewCard`, ktorá vytvorí `li` element. ty to zmeníš, aby si vytváral/a `img` element. až na to, že... nie! prečo nie?

pretože čo som povedal: **najprv ignoruj javascript 🙂** žiaden javascript neexistuje. priamo v HTML kóde vytvor `img` element. potom napíš kód, ktorý zvýši score o 1 ak klikneš na tento `img` element. iba ak toto funguje, pokús sa ten img vytvoriť javascriptom. vždy začni jednoducho a postupne komplikuj. ak úloha je vytvoriť javascriptom HTML kód, najprv ho vytvor bez javascriptu. prečo? pretože to je jednodchšie. pretože stále opakujem: po každom riadku si kontroluj, či je správny. iba ak je správny, choď na druhý. napíš HTML kód priamo do `index.html` a iba ak funguje, choď ďalej. vtedy vieš s istotou aký presne HTML kód máš javascriptom vytvárať.

_ _
ak máš toto všetko, zostáva ti spraviť pohyb obrázku smerom dole. možno si povieš, že to je na teba už príliš. **a to je v poriadku 🙂** tie úlohy sú tu pre inšpiráciu. ber si z nich toľko, koľko ty chceš. pokojne si z nich uber. pokojne si do nich pridaj.