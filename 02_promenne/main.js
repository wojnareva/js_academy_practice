/* -------a) Vyrob funkciu pozdrav()
Sprav funkciu, do ktorej vieš poslať meno. Napríklad pozdrav('Vašo'); do konzole vypíše Ahoj Vašo!.

----------b) Uprav funkciu pozdrav()
Prerob funkciu pozdrav tak, aby prijímala 2 argumenty: meno a urazka. Napríklad pozdrav('Vašo', 'hlupák'); do konzole vypíše Ahoj Vašo, ty hlupák!.

----------c) Získaj meno cez prompt()
Prerob funkciu pozdrav tak, že tvoj web si najprv vypýta tvoje meno. Momentálne to robíme tak, že priamo v kóde máme napísané 'Vašo'. Namiesto toho získaj túto hodnotu pomocou funkcie prompt().
*/

function pozdrav(jmeno, vlastnost){
    console.log(`Ahoj ${jmeno}, jsi ${vlastnost}`)
};

pozdrav("Pablo", "optomista");


/* -------------d) Vytvor funkciu plus() ktorá dostane 2 argumenty
Čiže vieš do nej poslať 2 čísla. Ona spraví ich súčet. Prvé číslo plus druhé. Výsledok vráti do hlavného programu pomocou slovíčka return.
Cez console.log vypíš výsledok do konzole.

--------------e) Pošli do funkcie plus hodnoty získané cez prompt()
Podobne, ako v úlohe c), len teraz si vytvoríš 2 premenné a do každej si cez prompt vypýtaš hodnotu. Pozor, táto úloha je chyták, prompt totiž vracia String, ale tvoja funkcia plus() chce Number. Skús si nájsť, ako v JavaScript zo Stringu spravíš Number. */

function plus() {
    console.log()
};

/*-------------f) Sprav funkciu, ktorá naformátuje číslo na peniaze
Na hodinách som písal riadky kódu, ktoré postupne upravujú číslo do podoby českých korún. Vyrob z tohoto funkciu. Ak do funkcie pošlem číslo 123, prvá verzia tejto tvojej novej funkcie len do konzole vypíše "cena produktu je 123 Kč".

Druhá verzia funkcie vráti (slovíčkom return) text "123 Kč". Povedzme, že tvojej funkcii dáš názov financial() lebo akože spracuje číslo na finančnú hodnotu 😄  */



/* -------------g) Sprav funkciu, ktorá dostane 2 argumenty: počet produktov a cenu jedného
Funkcia vráti (cez return) celkovú sumu. A vráti ju pekne naformátovanú cez financial() z minulej úloh. To je na ukážku toho, že ty v jednej funkcii môžeš používať ďalšie funkcie!
Do konzole potom vypíš vetu na štýl: "Kúpil si 5 predmetov, za 1 235 Kč dokopy."  */



/* -------------g) Sprav funkciu discount(), ktorá vypočíta zľavu (slevu)
Čiže dostane 2 hodnoty: cenu a slevu v percentách. Napríklad pošlem do nej discount(1245, 13) a ona mi vráti pekne naformátovanú sumu o 13 percent nižšiu. */



/* -------------h) Uprav funkciu financial() nasledovne:
Pridaj schopnosť, že ďalším argumentom vieš zmeniť výstup z korún na doláre alebo eurá. Že za normálnych okolností funkcia naformátuje číslo na koruny. Ale ak pošlem argument 'usd', naformátuje ho na doláre, ak pošlem 'eur', naformátuje ho na eurá. Na internete si dohľadaj a preskúmaj .toLocaleString() pre lepšie formátovanie na peniaze. */