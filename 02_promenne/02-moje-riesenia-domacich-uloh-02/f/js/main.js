/**
 * ULOHA 02 f)
 *
 * používam tu funkciu financial(number)
 * je rovnaká, ako naformatujSumu(cislo) z prvej hodiny
 * len po anglicky
 *
 * pointa tejto úlohy je ukázať,
 * že vo funkcii môžeš volať iné funkcie
 *
 * v funkcii payMe() zavolám funkciu financial()
 * a je to ok, lebo spomeň si, ako funguje return
 *
 * ak do payMe() pošlem payMe(15, 100) výsledok je 1500
 * takže posledný riadok payMe funkcie je akoby return financial(1500)
 * a funkcia financial používa return
 * čiže kdekoľvek v kóde mám financial(1500), akoby som tam mal "1 500 Kč"
 *
 * takže posledný riadok funkcie payMe je vlastne return "1 500 Kč"
 */
function financial(number) {
	number = number.toLocaleString('cs-CZ', {
		style: 'currency',
		currency: 'CZK'
	});

	return number;
}

// vynásobí count a price
// výsledok pošle do financial() ktorá číslo naformátuje na české koruny
function payMe(count, price) {
	return financial(count * price);
}


// ---------- KÓD SA ZAČÍNA SPÚŠŤAŤ TU

let count = 10;
let price = 12.50;

console.log(
	'Kúpil si ' + count + ' produktov, za ' + payMe(count, price) + ' dokopy.'
);