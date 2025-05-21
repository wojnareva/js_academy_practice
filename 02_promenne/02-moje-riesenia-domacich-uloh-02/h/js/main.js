/**
 * ULOHA 02 h)
 *
 * pointa tejto úlohy je vyskúšať si PODMIENKY (if else)
 * a tzv. DEFAULT PARAMETRE
 * alebo prednastavené hodnoty
 *
 * PODMIENKY sú klasika programovania
 * AK platí vec, spustíme jeden kus kódu
 * AK neplatí, spustíme druhý kus kódu
 *
 * v tomto prípade AK currency JE 'usd'
 * tak spustíme kód, ktorý číslo naformátuje na doláre
 *
 * všetky ostatné VETVY budú odignorované
 * v tomto príklade: if je jedna veta, else if je druhá vetva, else je tretia vetva
 *
 * currency = 'czk' znamená, že AK nepošlem žiadnu hodnotu,
 * tak sa do premennej currency uloží hodnota 'czk'
 */
function financial(number, currency = 'czk') {
	if (currency === 'usd') {
		number = number.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	}
	else if (currency === 'eur') {
		number = number.toLocaleString('sk-SK', {
			style: 'currency',
			currency: 'EUR'
		});
	}
	else {
		number = number.toLocaleString('cs-CZ', {
			style: 'currency',
			currency: 'CZK'
		});
	}

	return number;
}


// ---------- KÓD SA ZAČÍNA SPÚŠŤAŤ TU

// v currency bude 'eur'
console.log(
	financial(1235.45, 'eur')
);

// v currency bude 'usd'
console.log(
	financial(1235.45, 'usd')
);

// v currency bude 'czk'
console.log(
	financial(1235.45, 'czk')
);

// v currency bude 'czk'
console.log(
	financial(1235.45)
);