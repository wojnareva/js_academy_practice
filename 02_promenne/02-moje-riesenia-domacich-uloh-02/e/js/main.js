/**
 * ULOHA 02 e)
 *
 * učili sme sa o DÁTOVÝCH TYPOCH
 * 10 je Number, pretože 10 je číslo
 * ale "10" je String, rovnako ako "Vašo" je String
 *
 * sú situácie, kedy z jedného dátového typu musíme spraviť iný
 * napríklad zmeniť String na Number
 *
 * aha
 */
function plus(a, b) {
	return a + b;
}


// ---------- KÓD SA ZAČÍNA SPÚŠŤAŤ TU

// ak nechceš, nemusíš do premenných okamžite uložiť hodnotu
// tu som si vytvoril 2 nové premenné, ale zatiaľ sú prázdne
let firstNumber;
let secondNumber;

// ak teraz zadám 10 a 5
firstNumber = prompt('Prvé číslo:');
secondNumber = prompt('Druhé číslo:');

// namiesto súčtu sa mi vráti "105"
console.log(
	plus(firstNumber, secondNumber)
);

// pretože funkcia prompt() vracia String
// my vieme, že ak spravím "Vašo" + "Patejdl" dostanem "VašoPatejdl"
// rovnako ak spravím "10" + "5" dostanem "105"
// tie úvodzovky znamenajú String

// ja z "10" potrebujem spraviť 10
// zo Stringu spraviť Number
// napríklad takto

// ak zadám 10 a 5
firstNumber = Number(prompt('Prvé číslo:'));
secondNumber = Number(prompt('Druhé číslo:'));

// dostanem konečne 15
// pretože Number("10") vráti 10, zo Stringu spraví číslo
// a 10 + 5 = 15
console.log(
	plus(firstNumber, secondNumber)
);

// niektorí z vás namiesto Number() použili parseInt()
// to NEFUNGUJE s desatinnými číslami 🙂
// int znamená INTEGER a INTEGER v angličtine znamená CELÉ ČÍSLO