# Úloha 11 (json, API)

**toto budú prevažne úlohy na hranie sa s cudzími JSON APIs. podobne ako tie recepty**, čo som ukazoval na hodinách. fetchneš dáta z externého zdroja, spracuješ. cieľ je s tým zápasiť: ty nájdeš url adresu, na ktorú máš spraviť `fetch` a vrátia sa ti dáta. ty nie si ich autor, takže netušíš, ako dáta vyzerajú. takže `console.log(data)` a skúmaš a skúšaš a zisťuješ.

APIs často majú svoju dokumentáciu. cieľ týchto úloh je precvičiť si neustále kombo skúšania, console logovania, čítania dokumentácie, ďalšieho logovania a neustáleho skúšania a búchania si hlavy o stenu, až kým to nezačne fungovať 😄 **pretože *to* je programovanie.**

## a) fetch sa odošle po kliknutí
ukazoval som fetch na recepty:
```js
fetch('https://dummyjson.com/recipes')
    .then( res => res.json() )
    .then( data => { console.log(data) } );
```
v `05-events-click-form-submit-keyup.zip` (alebo v texte 11 o eventoch) nájdeš kód pre odchytenie kliknutia na buttom. prepíš fetch tak, že sa spustí až po kliknutí na button. a prepíš fetch tak, aby namiesto obyčajného console.logu používal našu `createNewCard` funkcia, ktorá nakreslí tie recepty na obrazovku. 
 
## b) harry potter api
na internete nájdeš tisíce free apis. možno ťa nezaujímajú recepty, možno chceš pottera. googlením som našiel: https://www.freepublicapis.com/harry-potter-api v stĺpci **Endpoints** nájdeš rôzne url adresy.

napríklad adresa, ktorá končí na `/api/spells` ti vráti všetky kúzla. skús takto fetchnúť všetky kúzla. 

dole nižšie máš adresu, ktorá vráti všetkých študentov fakulty **"ravenclaw"**. pokús sa vytvoriť nový card, kde nadpis bude **meno postavy** a text bude **meno herca**, _ak herec existuje_. pridaj **patronusa**, _ak patronus existuje_.

použi `<strong></strong>` tagy okolo patronusa. v CSS je zadefinované, že strong elementy sa vyznačia žltou farbou.

## c) https://jsonplaceholder.typicode.com
otvor si túto adresu v prehliadači. je to json api pre účely testovania a učenia sa. čiže presne to, čo ty robíš! `fetch`ni dáta z tejto adresy: `https://jsonplaceholder.typicode.com/todos` a pre každú položku vytvor nový card. to isté, čo robíme dokola.

z tej adresy sa ti vráti pole objektov. v každom objekte nájdeš text a pár ďalších údajov. ten text vložiš ako `content` nového cardu. a do nadpisu nového cardu dáš "✅" **ak** hodnota `completed` je `true`. v opačnom prípade **ak** `completed` je `false`, zobrazíš "❌".

## d) apple itunes hudba
apple zdarma ponúka tzv. iTunes Search API. vieš si vyhľadávať hudbu, interpretov... myslím, že to dokonca funguje na filmy, audioknihy a ďalšie veci, čo predávajú? na konci tejto vety je otáznik. vieš, ako ho dokážeš zmeniť na tečku? že si vyhľadáš dokumentáciu 🙂

**tvoja úloha:** znova v `05-events-click-form-submit-keyup.zip` (alebo v texte 11 o eventoch) nájdeš kód pre odoslanie formuláru a získanie textu, čo tam user napísal. sprav fetch žiadosť takú, že ak do inputu napíšeš ja neviem, "King Gizzard & The Lizard Wizard", tak to nájde niekoľko ich songov z itunes apička.

čiže tvoja úloha je zistiť adresu, na ktorú poslať fetch. a do to tej adresy vložiť text, ktorý user napísal do formuláru.

_ _
## e) https://www.freepublicapis.com/railway-station-photos
cez toto API vieš získať údaje o vlakových staniciach. v **Endpoints** máš príklad stanice v Hamburgu. pokús sa (napríklad do cardov?) zobraziť všetky fotky tejto stanice.

dole nižšie v Endpoints nájdeš adresu, ktorá končí na `/ch`. tá ti vráti stanice vo Švajčiarku. bez toho, aby som čítal dokumentáciu viem logicky odvodiť, že ak to zmením na `/cs` alebo možno `/cz`, dostanem České stanice. a `/sk` Slovenské.

pokús sa skombinovať všetky tieto informácie tak, aby si získala a na náš žltý web zobrazila fotky pre hlavné stanice Praha, Brno, Bratislava. **ak vôbec existujú**. alebo si samozrejme vyber hociktorú stanicu na planéte! fotky našich staníc tam možno ani nebudú existovať. možno ich tam chceli pridať, ale potom ich videli a prišlo im zle. tak si nájdi iné!

pointa je skúsiť si fetchovať dáta z rôznych adries a lepiť tie adresy dohromady a console logovať a skúmať a skúšať a zápasiť s tým, čo sa ti vráti.

_ _
## f) nahraj `data.json` na web
povedzme, že máš toto uložené v súbore `data.json`:
```js
{
  "cards": [
    {
      "content": "Our full development environment, available for Mac, PC, and Linux.",
      "createdAt": "2024-11-01T17:42:00Z",
      "title": "Playdate SDK"
    },
    {
      "content": "Covers both <strong>Lua</strong> and <strong>C</strong> programming.",
      "createdAt": "2023-10-12T10:12:00Z",
      "title": "Inside Playdate"
    },
    {
      "content": "Bitmap font editor for Playdate fonts—draw your own characters.",
      "createdAt": "2022-02-10T15:30:00Z",
      "title": "Caps"
    }
  ]
}
```
maj ho uložený v zložke tvojho projektu s skús naň spraviť fetch request. 

potom skús obsah tohoto súboru nahrať na https://jsonbin.io/quick-store tým ti vznikne webová url adresa, na ktorú vieš použiť `fetch` tak isto, ako v tom harry potter alebo recepty príklade. jsonbin je služba, ktorá ti dovolí **dočasne** odložiť údaje na internet.

pointa úlohy je **zápasiť so službami, ktoré nepoznáš.** v robote ti často povedia: _"sprav toto, použi na to toto."_ a nepoložia ti na stôl príručku o tom, ako sa daná používa. tvoja robota je zistiť to.

čiže ja ti hovorím: _"zobraz cez createNewCard() na stránku externé dáta. použi jsonbin.io, tam si tie dáta najprv nahráš."_

druhá možnosť: ak nie si, zaregistruj sa na github. pokús sa súbor `data.json` nahrať na github. alebo sprav tzv. github gist. a získat tie údaje znova cez `fetch`, zobraz ich na ten istý žltý web, jak vždy.

