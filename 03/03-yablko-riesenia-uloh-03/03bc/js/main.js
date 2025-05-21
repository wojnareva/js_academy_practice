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

// najdeme formular a inputy v nom
const form = document.querySelector('form');
const titleInput = form.querySelector('input[name=title]');
const contentInput = form.querySelector('input[name=content]');

// SUBMIT EVENT sa spusti pri odoslani formularu
form.addEventListener('submit', function (event) {
	event.preventDefault();

	// ak mame texty
	if (titleInput.value && contentInput.value) {
		// pridame novy card
		createNewCard(titleInput.value, contentInput.value);

		// toto premaze formular
		form.reset();

		// nastavime sa do title inputu, nech mozeme hned pisat znova
		titleInput.focus();
	}
});
