/**
 * ULOHA 02 g)
 *
 * ako so všetkým v programovaní:
 * je nekonečno spôsobov, ko vyriešiť túto úlohu
 *
 * samozrejme by som to všetko mohol mať v jednej funkcii
 * ale chcem zopakovať, že ak funkcia používa return,
 * tak jej výsledok sa ocitne na mieste, kde ju voláme
 *
 * takže som spravil 2 funkcie
 * jedna vráti iba výšku zľavy
 * druhá vráti výslednú sumu po uplatnení zľavu v percentách
 * tá v sebe používa 2 ďalšie funkcie :)
 */
function financial(number) {
	number = number.toLocaleString('cs-CZ', {
		style: 'currency',
		currency: 'CZK'
	});

	return number;
}

// vráti výšku zľavy
function getDiscount(price, percent) {
	return price * (percent / 100);
}

// vráti výslednú sumu po uplatnení zľavy
function priceAfterDiscount(price, percent) {
	let discountedPrice = price - getDiscount(price, percent);
	return financial(discountedPrice);
}


// ---------- KÓD SA ZAČÍNA SPÚŠŤAŤ TU

// ak chceš koľko je 1000Kč po zľave 20%, čiže výslednú cenu
console.log(
	priceAfterDiscount(1000, 20) // 800,00 Kč
);

// ak chceš výšku zľavy
console.log(
	financial(getDiscount(1000, 20)) // 200 Kč
);