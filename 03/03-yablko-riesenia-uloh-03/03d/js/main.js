/**
 * CREATE NEW CARD 
 * vytvori novy LI element a vlozi na spravne miesto
 * @param {String} title 
 * @param {String} content 
 */
function createNewCard(title, content) {
	const container = document.querySelector('.card-list');
	const newCard = document.createElement('li');

	// objavi sa s animaciou
	newCard.classList.add('animate__animated', 'animate__tada');

	newCard.innerHTML = `
		<h3>${title}</h3>
		<p>${content}</p>
	`;

	// s prepend sa objavi na zaciatok zoznamu
	container.appendChild(newCard);
}


// -------------------------
// ---- TU TO REALNE ZACINA 


/**
 * POLE OBJEKTOV
 * jedna z najpouzivanejsich struktur
 * 
 * priklad:
 * - o kazdom produkte potrebujem evidovat viac udajov: je to objekt
 * - a z databazy sa mi vrati ZOZNAM produktov: je to pole 
 * 
 * nase pole data mozeme brat* ako ZOZNAM CLANKOV
 * o kazdom clanku evidujem nadpis a text
 * 
 * tato uloha existuje, pretoze toto je bezna klasika
 * ty si z databazy vyziadas data, vrati sa ti pole udajov
 * a teraz ich chces vsetky nakreslit na obrazovku: chces cyklus
 */
const data = [
	{
		title: 'Nový nadpis',
		content: 'Toto je kúsok textu. Je krásny. Je priam nádherný. Čítaj ho očami a užívaj si ako znie v tvojich ušiach, ak ho niekto vysloví.'
	},
	{
		title: 'Druhý nadpis',
		content: 'Toto je druhý textu. Je o niečo menej krásny. HA! Je ešte krajší! Klamal som!'
	},
	{
		title: 'Tretí článok',
		content: 'Už nemám čo povedať. Minuli sa mi slová.'
	}
];
// (* it's like brat summer never even happened)


/**
 * CYKLUS forEach
 * 
 * s polami vies robit kopu veci, ale zaklad je prebehnut cez kazdu polozku
 * napisem funkciu, ktora sa spusti pre kazdy prvok pola 
 * 
 * v poli data mam 3 objekty, pre kazdy z nich vytvorim novy card
 */
data.forEach(card => {
	// tieto riady sa zopakuju 3x, pretoze v poli mam 3 objekty
	// v prvom opakovani v premennej card bude prvy objekt
	// v druhom opakovani v premennej card bude druhy objekt
	// a tak dalej

	// konkretnu hodnotu vlastnosti v objekte najdem cez tecku .
	createNewCard(card.title, card.content);
});


/**
 * PRE SRANDU
 * skus zakomentovat/vymazat tu verziu hore
 * a odkomentovat tuto verziu cyklu :)
 */
// data.forEach((card, index) => {
// 	setTimeout(() => {
// 		createNewCard(card.title, card.content);
// 	}, index * 1000);
// });