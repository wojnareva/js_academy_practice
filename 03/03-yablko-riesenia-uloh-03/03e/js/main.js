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
	container.prepend(newCard);
}


// -------------------------
// ---- TU TO REALNE ZACINA 


/**
 * NACITCAME DATA ZO SUBORU data.json
 */
fetch('/js/data.json')
	.then(response => response.json())
	.then(data => {
		// prebehneme cez vseky data
		// v cykle vytvorime card pre kazdu polozku pola
		data.cards.forEach(card => {
			createNewCard(card.title, card.content);
		});
	});



/**
 * FETCH z HARRY POTTER API
 * tu mas bonusovu srandicku
 *  
 * na hodine sme si nasli recepty 
 * v minulej verzii kurzu si studenti nasli harry potter api
 * tu si pytam udaje o postavach a vyrobim z nich html elementy
 *
 * BTW: ak si chces vytvoris vlastne json api,
 * mozes .json subor nahrat na github
 * ale pouzit sluzbu ako: https://jsonbin.io/
 *
 * tento https://jsonbin.io/ ulozi tvoje data iba DOCASNE
 * je to na to, aby si si skusal/a veci, na hranie sa
 */
fetch('https://hp-api.onrender.com/api/characters/staff')
	.then(response => response.json())
	.then(data => {
		// prebehneme cez vsetky data, ktore sa vratili z harry potter api
		// konkretne hladame postavy (myslim, ze zamestnancov skoly? ci co? who cares?)
		// postavy, cize characters, cize:
		data.forEach(character => {
			// zacneme s prazdnym stringom
			let content = '';

			// ak pozname fakultu, pridame fakultu
			if (character.house) {
				content += '<strong>' + character.house + '</strong>, ';
			}

			// ak pozname herca, pridame herca
			if (character.actor) {
				content += character.actor;
			}

			// nadpis cardu bude meno postavy, popis bude nas zlozeny content string
			createNewCard(character.name, content);
		});
	});