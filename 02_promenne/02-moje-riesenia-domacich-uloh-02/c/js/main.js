/**
 * ULOHA 02 c)
 *
 * chcem pracovať s hodnotou, takže si vytovrím premennú
 * do premennej name uložím hodnotu, ktorá príde cez prompt
 * prompt je to vyskakujúce okienko, kam viem písať
 *
 * funkcia greeting(name, insult) očakávam 2 hodnoty
 * ja do nej pošlem premenné whoAreYou a whatAreYou
 *
 * vo funkcii vznikne premenná name
 * do nej sa uloží tá hodnota, ktorá je v premennej whatAreYou
 *
 * rovnako pre insult a whatAreYou
 */
function greeting(name, insult) {
	console.log('Ahoj ' + name + ', ty ' + insult + '!');
}


// ---------- KÓD SA ZAČÍNA SPÚŠŤAŤ TU

let whoAreYou = prompt('Aké je tvoje ctené meno? Povedz prosím 🥺');
let whatAreYou = prompt('Jedno slovo, ktoré ťa vystihuje');

greeting(whoAreYou, whatAreYou);