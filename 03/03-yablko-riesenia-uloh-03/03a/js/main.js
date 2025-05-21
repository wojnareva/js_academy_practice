/**
 * CREATE NEW CARD 
 * vytvori novy LI element a vlozi na spravne miesto
 * @param {String} title 
 * @param {String} content 
 */
function createNewCard(title, content) {
	const container = document.querySelector('.card-list');
	const newCard = document.createElement('li');

	newCard.innerHTML = `
		<h3>${title}</h3>
		<p>${content}</p>
	`;

	container.appendChild(newCard);
}


// -------------------------
// ---- TU TO REALNE ZACINA 


createNewCard(
	'Prvý nadpis',
	'V texte <strong>toto bude tučné a žlté</strong>, pretože tam som si to v CSS nastavil.'
);

createNewCard(
	'Nový nadpis',
	'Toto je kúsok textu. Je krásny. Je priam nádherný. Čítaj ho očami a užívaj si ako znie v tvojich ušiak, ak ho niekto vysloví.'
);

createNewCard(
	'ja som 3',
	'tiež existujem:('
);


/**
 * keby HTML elementy vyrabam BEZ FUNKCIE
 * 
 * problem tejto verzie je napriklad ten, ze
 * ak by som potreboval vytvorit 5 novych elementov
 * musim vsetky tieto riadky kodu nakopirovat 5x pod seba 
 * a v tom sa ani besny pes neozrientuje
 * je to bordel a to nechceme
 * 
 * navyse co ak v tom kode najdem chybu?
 * teraz ju musim opravovat na 5 roznych miestach
 * co ak by tych miest bolo 50? 
 * skapem
 * 
 * co ak potrebujes nieco zmenit? pridat?
 * musim to pridat na 5 roznych miestach
 * je to na odstrel
 * 
 * preto vytvorim funkciu!
 * ak najdem chybu, staci ju opravit na jednom mieste
 * a ja viem presne, kde to miesto je
 * vo funkcii s nazvom createNewCard()
 */

/*
// najdem rodica, do ktoreho chcem pridavat nove HTML elementy
const cardContainer = document.querySelector('.card-list');

// novy element bude mat nadpis (h3) a text (p)
let title = 'Nový nadpis';
let content = 'Toto je kúsok textu. Je krásny. Je priam nádherný. Čítaj ho očami a užívaj si ako znie v tvojich ušiak, ak ho niekto vysloví.';

// vytvorim novy HTML element (li)
const newCard = document.createElement('li');
newCard.innerHTML = '<h3>' + title + '</h3><p>' + content + '</p>';

newCard.innerHTML = `
	<h3>${title}</h3>
	<p>${content}</p>
`;

// vlozim ho do rodica
cardContainer.appendChild(newCard);
*/