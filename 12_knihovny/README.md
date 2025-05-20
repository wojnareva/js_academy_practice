# Úloha 12 (knihovny, libraries)

## a) naformátuj dátum
v `03c-dayjs-format-datumu` máš pole cardov aj s dátumom. tam ten dátum do pre-oči-peknej formy formátujeme knižnicou dayjs. prerob to tak, že ty použiješ https://date-fns.org/ skús si rôzne formáty. skús do toho natiahnuť čestinu. pointa je naučiť sa pracovať s externými knižnicami a zápasiť s ich dokumentáciou. 

## b) uprav výpis, zosekni string
v úlohách 10 pracuješ s APIčkami. napríklad tie recepty. alebo harry potter postavy. skús si ich takto fetchnúť, pridať na web cez `createNewCard`. ak názvy/mená budeš pridávať do `title`, niektoré z nich budú príliš dlhé. a rozbijú dizajn. 

skús upraviť kód tak, že **ak má meno/názov viac ako 15 znakov, zvyšné sa odseknú** a pridajú sa 3 bodky, aka …

takže z `Wilhelmina Grubbly-Plank` sa stane `Wilhelmina Grub…`

preskúmaj knižnicu https://lodash.com/ možno v nej nájdeš niečo ako `truncate`, čo ti pomôže 😉 a keď už tam budeš, prelistuj si, čo všetko ďalšie ponúka. reálne toto je možno dôležitejšia časť tej úlohy. že ok, použiješ knižnicu na vyriešenie konkrétnej úlohy a to je fajn. ale teraz popozeráš, že čo všetko ďalšie ponúka. toto je spôsob, ako sa učíš. toto je spôsob, ako sa tvoj svet stáva väčším. 

## c) gsap animácie
v `03b-animacie-produkty` používam knižnicu animate.css na animácie. skús to prerobiť na https://gsap.com a nemusíš sa snažiť vyrobiť identické animácie. použi také, ktoré sa páčia tebe 😘

## d) sortable
naša žtlá appka je plná `li` elementov. skús použiť https://sortablejs.github.io/Sortable/ tak, že ich budeš môcť myšou po stránke presúvať.

## e) sortable + confetti
skús do predošlej úlohy pridať confetti https://confetti.js.org/more.html 🙂 že v momente, keď element presunieš na iné miesto, vystrelia konfety 🎉🥳