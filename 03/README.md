# Úloha 03 (HTML pomocou JS)

Stále platí (a teraz ešte viac!) že nečakám, že budeš vedieť spraviť všetky úlohy. Špeciálne tieto 🙂 Tieto úlohy ukážem / vysvetlím / vyriešim na ďalších hodinách! **Sú to úlohy z budúcnosti a keď začínaš, nemáš prečo vedieť ich spraviť!** 

Ale proste kto chce, môže skúšať makať už dnes. Prípadne si vymyslite nové úlohy: napríklad *ako vymazať card, ako upraviť texty...* Takto som sa ja naučil programovať. Robil som kópiu existujúcej stránky/appky a pridával som si do nej vlastné nápady, vymýšľal vlastné úkoly.

Aké cardy? Stiahni a rozbehaj web zo súboru `js-academy-template.zip`. Naša klasická extrémne žltá stránka.

## a) Funkcia, ktorá vytvorí nový tzv. card
V HTML kóde `js-academy-template.zip` nájdeš UL zoznam.
Ten má v sebe LI elmenty.
Každý LI element nazývame "card". 

Card neni žiaden oficiálny HTML názov, ale takto vyzerajúce boxy vo webdizajne zvykneme nazývať slovom Card. Proste tie 3 veci, ktoré sa zobrazujú na stránke 🙂 Každý z nich má **nadpis** a **text**  *(A ikonku. Ale tú zatiaľ ignorujeme. Ale sprav si mentálnu poznámku a existencii ikonky.)*

**Vytvor funkciu, ktoré vie do HTML stránky na správne miesto pridať ďalší LI element.**
To je tvoja úloha. Čiže funkcia, do ktorej pošleš **nadpis** a **text** (ja by som to v kóde nazval `title` a `content`) a pribudne nový card na stránke.

Povedzme, že tejto funkcii dáš názov `createNewCard()` pretože jej úloha bude vytvoriť nový card. To mi dáva zmysel!

Skús funkciu upraviť tak, aby sa nový card pridal _na začiatok zoznamu_. Prípadne tak, aby si vedela určiť, či sa má pridať na začiatok alebo na koniec.

## b) Nadpis a text pridaj cez INPUTY
Prípadne cez `<input>` a `<textarea>`.
Do HTML kódu pridaj tzv. formulár s inputmi, do ktorých vieš písať.
Po odoslaní formuláru (alebo stlačení enteru?) sa vytvorí nový card so zadanými textami.

## c) Pridaj peknú animáciu!
Zatiaľ card len tak pribudne na obrazovke. A to je nuda. Zmeň funkciu tak, aby sa objavili peknou, plynulou animáciou. Odporúčam preskúmať knižnice https://animate.style alebo https://gsap.com.

## d) Uprav funkciu tak, že bude pracovať s poľom objektov
Každé duo nadpis/text bude **objekt**.
Vytvoríš **pole objektov**.
**Cyklom** prebehneš toto pole a vytvoríš nový card pre každý prvok poľa.

Neboj, toto som ešte neukazoval.
Viem, že všetko sú to nové slová 🙂
Vysvetlím na ďalších hodinách.

## e) Načítaj toto pole zo súboru
Budeš mať súbor, ktorý bude obsahovať dáta.
Tieto dáta najprv načítaš zo **súboru**.
Možno sa ten súbor bude volať `data.json`.
Potom dáta prebehneš v **cykle** a pridáš nový card pre každý prvok.

Znova, vysvetlím, neboj 🙂