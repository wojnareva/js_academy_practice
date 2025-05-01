# Úloha 02 (premenné, funkcie)

**v momente, keď pridávam tieto prvé úlohy, som ešte ani na hodinách nevysvetľoval a neukazoval ako ich vyriešiť 😄**
sme veľká skupina, každý máme iné skúsenosti. skúsenejší môžu pracovať na úlohách počas toho, ako vysvetľujem veci, ktoré už ovládajú.

**opakujem**: rozhodne nečakám, že každá úloha bude pre každého. že každý bude vedieť spraviť každú úlohu. a rozhodne nečakám, že tie úlohy budete vedieť vyriešiť z hlavy. pokojne počas riešenia úloh používajte všetok kód, ktorý počas kurzu napíšem. a všetok kód, ktorý nájdete na internete (a v knihách, článkoch, kdekoľvek inde...). všetky texty, ktoré napíšem do <#1348937753836130336> a všetky kurzy, ktoré nájdete na skillmea. 

prosím, ak niektoré zadanie nedáva zmysel, dajte mi otázku! 
buď na discore alebo na hodine.
ja sa vždy pokúsim to vysvetliť, prípadne ukázať, ako by som danú úlohu riešil ja.

zároveň cháp, že tieto úlohy sú z budúcnosti 🙂 ja som na hodinách ukazoval, že môžeš používať funkcie ako napríklad `alert()`, `.toFixed()` alebo `.repeat()`. na tretej hodine budem ukazovať, ako si vieš vlastné funkcie a tým doprogramovať do javascriptu nové schopnosti. takže ak začínaš, tieto úlohy sú to do budúcna. 

**aha!!  https://discord.com/channels/1147117106450681876/1367509004271747183  pre prípad, že máš čas a chuť si naštudovať funkcie predstihu, text!**

## a) Vyrob funkciu `pozdrav()`
Sprav funkciu, do ktorej vieš poslať meno. Napríklad `pozdrav('Vašo');` do konzole vypíše `Ahoj Vašo!`.

## b) Uprav funkciu `pozdrav()`
Prerob funkciu pozdrav tak, aby prijímala 2 argumenty: meno a urazka.
Napríklad `pozdrav('Vašo', 'hlupák');` do konzole vypíše `Ahoj Vašo, ty hlupák!`.

## c) Získaj meno cez `prompt()`
Prerob funkciu pozdrav tak, že tvoj web si najprv vypýta tvoje meno.
Momentálne to robíme tak, že priamo v kóde máme napísané 'Vašo'.
Namiesto toho získaj túto hodnotu pomocou funkcie `prompt()`.

Je podobná ako `alert`, ale s tým rozdielom, že do okna vieš písať a tento text si vieš uložiť do premennej.

## d) Vytvor funkciu `plus()` ktorá dostane 2 argumenty
Čiže vieš do nej poslať 2 čísla.
Ona spraví ich súčet. Prvé číslo plus druhé.
Výsledok vráti do hlavného programu pomocou slovíčka `return`.

Cez `console.log` vypíš výsledok do konzole.
  
## e) Pošli do funkcie plus hodnoty získané cez `prompt()`
Podobne, ako v úlohe **c)**, len teraz si vytvoríš 2 premenné a do každej si cez prompt vypýtaš hodnotu.
Pozor, táto úloha je chyták, `prompt` totiž vracia String, ale tvoja funkcia `plus()` chce Number.
Skús si nájsť, ako v JavaScript zo Stringu spravíš Number.
  
## f) Sprav funkciu, ktorá naformátuje číslo na peniaze
Na hodinách som písal riadky kódu, ktoré postupne upravujú číslo do podoby českých korún.
Vyrob z tohoto funkciu. Ak do funkcie pošlem číslo 123, prvá verzia tejto tvojej novej funkcie len do konzole vypíše "cena produktu je 123 Kč". 

Druhá verzia funkcie vráti (slovíčkom `return`) text "123 Kč".
Povedzme, že tvojej funkcii dáš názov `financial()` lebo akože spracuje číslo na finančnú hodnotu 😄
  
## g) Sprav funkciu, ktorá dostane 2 argumenty: počet produktov a cenu jedného
Funkcia vráti (cez `return`) celkovú sumu.
A vráti ju pekne naformátovanú cez `financial()` z minulej úloh.
To je na ukážku toho, že ty v jednej funkcii môžeš používať ďalšie funkcie!

Do konzole potom vypíš vetu na štýl: _"Kúpil si 5 predmetov, za 1 235 Kč dokopy."_
  
## g) Sprav funkciu `discount()`, ktorá vypočíta zľavu (slevu)
Čiže dostane 2 hodnoty: cenu a slevu v percentách. Napríklad pošlem do nej `discount(1245, 13)` a ona mi vráti pekne naformátovanú sumu o 13 percent nižšiu.
  
## h) Uprav funkciu `financial()` nasledovne:
Pridaj schopnosť, že ďalším argumentom vieš zmeniť výstup z korún na doláre alebo eurá. Že za normálnych okolností funkcia naformátuje číslo na koruny. Ale **ak** pošlem argument `'usd'`, naformátuje ho na doláre, ak pošlem `'eur'`, naformátuje ho na eurá. Na internete si dohľadaj a preskúmaj `.toLocaleString()` pre lepšie formátovanie na peniaze.