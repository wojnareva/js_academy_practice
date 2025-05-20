/**
 * CREATE NEW CARD 
 * vytvori novy LI element a vlozi na spravne miesto
 * @param {Object} character 
 */
function createNewCard(character) {
	const container = document.querySelector('.card-list');
	const newCard = document.createElement('li');

	// objavi sa s animaciou
	newCard.classList.add('animate__animated', 'animate__tada');

	// pouzijeme _.truncate() z lodash kniznice
	// na zoseknutie mena na max 13 znakov
	// ak je meno dlhsie, doplnia sa …
	let shorterName = _.truncate(character.name, { 'length': 13 })

	// samozrejme je to len priklad pouzitie kniznice lodash
	// v realnom zivote NECHES CLOVEKU ODSEKNUT Z MENA 
	// ale casto napriklad chces kratsiu verziu popisu produktu
	newCard.innerHTML = `
		<h3>${shorterName}</h3>
		<p><img src="${character.image}" alt="${character.name}"></p>
	`;

	// s prepend sa objavi na zaciatok zoznamu
	container.appendChild(newCard);
}


// -------------------------
// ---- TU TO REALNE ZACINA 

const form = document.querySelector('form');
const searchInput = form.querySelector('input[type=search]');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	// ziskame "zamestnancov" skoly z harryho pottera
	fetch('https://hp-api.onrender.com/api/characters/staff')
		.then(response => response.json())
		.then(data => {
			// v cykle si okrem udaju vies vypyptat aj jeho index
			// index, cize pozicia v poli 
			data.forEach((character, index) => {

				// iba ak postava ma aj obrazok
				if (character.image) {
					// nechame kazdu zobrazi s pauzou 2 sekundy
					// a potom zobrazi vystrelime aj konfety
					setTimeout(() => {
						createNewCard(character);
						shootConfetti();
					}, index * 2000);
				}

			});
		})
		.catch(error => {
			console.error('Error:', error);
		});
});