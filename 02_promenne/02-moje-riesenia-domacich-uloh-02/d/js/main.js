/**
 * ULOHA 02 d)
 *
 * nie každá naša funkcia bude konciť príkazom return
 * ale väčšina našich funkcí bude konciť príkazom return
 *
 * return takzvane "vráti výsledok" do kódu
 * return vráti hodnotu na to miesto, kde funkciu voláme
 *
 * v našom prípade to znamená, že:
 * na to miesto v kóde, kde mám "plus(5, 5.5)" sa vráti hodnota "10.5"
 *
 * čiže tam, kde som napísal "plus(5, 5.5)" ako keby som napísal "10.5"
 *
 * IBA AK vo funkcii použiješ return
 * TAK sa na miesto, kde funkciu používaš, vráti výsledok
 */
function plus(a, b) {
	return a + b;
}


// ---------- KÓD SA ZAČÍNA SPÚŠŤAŤ TU

let result = plus(5, 5.5);

console.log(result);