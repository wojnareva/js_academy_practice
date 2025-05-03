// 1| PREMENNE
// 2| DATOVE TYPY
// v programovani pracujeme s data, tie su roznych typov
// a ukladadame ich do premennych
// tu mame jednu premennu typu String (text), a premennu typu Number (cislo)
let locale = 'us';
let subtotal = 124.40;

subtotal = subtotal + 542.90;
subtotal = subtotal + 1299.35;

// 3| FUNKCIE
// funkcie na pomozu upravit data z jedneho tvaru do druheho
// tzv. "formatovat" alebo "transformovat" data
subtotal = subtotal.toFixed(2);

// 4| PODMIENKY
// niektore riadky kodu sa spustia iba ak plati podmienka
if (locale == 'cz') {
	// napriklad tu su 2 riadky kodu, ktore sa spustia
	// iba ak v premennej local je hodnota 'cz'
	subtotal = subtotal + ' Kč';
	subtotal = subtotal.replace('.', ',');
}
else if (locale == 'us') {
	// tento riadok iba ak v local je 'us'
	// inak bude odignorovany
	subtotal = '$' + subtotal;
}
else {
	// tento riadok sa spusti ak v local je cokolvek ine ako 'us' alebo 'cz'
	subtotal = subtotal + '€';
}

console.log(subtotal);


// 5| OBJEKT
// objekt je datovy typ, podobne ako String alebo Number
// ale objekt nam dovoli o 1 veci evidovat viac udajov
// predstav si to jak jeden zaznam, jeden riadok v excel tabulke 
let movie = {
	title: 'Love Lies Bleeding',
	price: 30,
}

// sposob, ako pristupis ku konkretnej hodnote objektu
// nas movie evidujes nazov (v title) a cenu (v price)
// ak chces jeho cenu:
console.log(movie.price);


// 6| POLE, ARRAY
// pole je datovy typ (podobne ako String, Number alebo Object)
// pole je zoznam veci 
// ak robim eshop, mam v nom mnoho produktov
// ak by som si ich chce ulozit do jednej premennej, kedze ich je viac, pouzijem pole
let cart = [
	{
		title: 'Love Lies Bleeding',
		price: 30,
	},
	{
		title: 'I Saw the TV Glow',
		price: 27,
	},
	{
		title: 'The Witch',
		price: 40
	}
];

// toto je iba taky srandovy sposob ako poziadat konzolu v prehliadaci
// aby pole nakreslila do peknej tabulky
// nema to realny vyznam vo vyslednej aplikacii
// je to len sposob, ako si pekne vypisat hodnoty pocas toho, ako s nimi ako programator pracujem
console.table(cart);

// ukol 1
console.log(movie.title);

movie.year = 2022;
movie.cast = ["Zdeněk Svěrák", "Ondřej Vetchý", "Eva Holubová"];

console.log(movie);

// 7| CYKLUS
cart.forEach((book) => {
	console.log(book.title);
});

let years = [2014, 2023, 2005];

cart.forEach((book, index) => {
	book.year = years[index];
});

console.table(cart);

book = [{
	title: "Silmarilion",
	author: "J.R.R.Tolkien",
	price: 365,
	published: 1977
},
{
	title: "Šikmý kostel",
	author: "Karin Lednická",
	price: 269,
	published: 2020
}
];

console.table(book);