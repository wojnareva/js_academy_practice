# Úloha 09 (eventy, udalosti)

ok zopár sťavnatejších úloh pre tých, ktorí už ovládajú **EVENTY**. ak si robil sex mašinu, vieš eventy. ak si pridávala cardy cez input, vieš eventy. ak nevieš, naučím na hodinách. **eventy sú udalosti. udalosti ktoré vieš javascriptom reagovať**. ak napríklad user klikne niekam na webe. alebo ak odošle formulár. naše programy musia reagovať na (okrem iného) vstupy používateľa. i mean videohra by nebola moc zábavná, keby nereaguje na ovládač.

stiahni si `orb-clean.zip` alebo `orb-darker-clean.zip` vyrobil som 2 verzie, keby ťa od bielej boli oči. myšlienka za týmto orb webom je, že... tá stránka má pekný obrázok na pozadí! to je hlavné!! mám správne nastavené priority!!

taktiež je tam formulár a v ňom `textarea`. do nej vieš písať. nad ňou je `svg` element. kruh. vo formulári je ešte element, ktorý zobrazuje číslo 140.

reálna myšlienka je ukazovať, koľko znakov ešte môžeš do `textarea` napísať. sms alebo twitter mali kedysi limit 140 znakov. na toto sa hráme. keď píšeš do textarea, s každým znakom to číslo 140 klesá. počas toho sa ten kruh postupne vyfarbuje. keď sa blížiš k limitu, je naštvane červený 😡 **toto samozrejme nemusíš robiť!!** ale môžeš 😘 ty šialenec.

## a) precvič si EVENTY
stiahni si orb kód a:
- vypíš niečo do konzole, keď **klikneš na textarea**
- vypíš niečo do konzole, keď **klikneš na svg**
- vypíš niečo do konzole, keď **píšeš do textarea**
- keď píšeš do textarea, vypisuj do konzole, **ktorý znak bol stlačený**
- vypíš niečo do konzole, keď **vojdeš myšou do textarea**
- vypíš niečo do konzole, keď **vyjdeš myšou von z textarea**
- vypisuj do konzole celý čas, **ako sa hýbeš myšou nad textarea**

neboj, podobný kód ja vytvorím na hodinách. ak som to už nespravil. aj tak si toto skús. cieľ je precvičiť si písanie tých divných znakov! samozrejme každú z tých funkcií si môžeš vylepšiť vlastnými nápadmi! **podľa mňa to je ten moment, kedy sa človek reálne učí.** keď začneš kódom z kurzov/kníh/videí a **pridaš do toho niečo vlastné.**

tá vlastná vec môže byť akokoľvek maličká! napríklad namiesto kliknutia ľavým sprav klik pravým tlačítkom. alebo po dokončení zisti, že vlastne vieš spraviť sex mašinu 😉

## b) ZNIŽUJ COUNTER počas písania
`counter` je to číslo **140** vo formulári. znižuj ho s každým znakom v `textarea`. ak napíšem 5 znakov do `textrea`, bude ukazovať 135.

- ak narazíš **na nulu**, vypíš niečo do konzole. alebo vyskoč škaredý `alert`
- ak si **pod nulou**, môžeš skúsiť zmeniť farbu napísaného textu na červenú!
- ak si to chceš **poriadne skomplikovať**, môžeš skúsiť, že tie znaky, ktoré sú pod nulou, podčiarknuť červenou čiarou alebo dať im červené pozadie

prípadne **ak je counter pod 20**, zmeň farbu jeho textu na červenú. toto je menej komplikované a tá vec o riadok vyššie. tá vec vyššie je divná!

## c) ak si v `textarea` a stlačíš ESC
...vymaž `svg` element zo stránky!! normálne ho zavraždi. viem, koho volil, nezaslúži si život. potom skús pridať, že vypadne zo stránky von https://animate.style/ animáciou. ak to chceš extrémne prehnať, môžeš skúsiť pridať zvukový efekt, jak letí von. nejaký slide whistle sound. toto je vedľajšie, ale BBC nedávno zverejnilo knizňicu zvukových efektov https://sound-effects.bbcrewind.co.uk/ 🥹

## d) nový FORMULÁR
pridaj do `index.html` nový `form` element. bude s sebe mať dva `<input type="number">` elementy a jeden `<button>` element. keď stlačíš button, vypíš súčet čísel v tých dvoch inputoch.

skús pridať kontrolu: súčet sa vypíše iba ak v oboch inputoch je hodnota a iba ak táto hodnota je naozaj číslo (je typu number).

len tak, lebo prečo nie!

