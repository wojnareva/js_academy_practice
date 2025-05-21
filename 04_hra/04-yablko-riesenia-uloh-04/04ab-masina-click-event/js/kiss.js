// KISS (keep it simple, stupid)
// -------------------------------------------------------

// chcem v HTML najst element s .vasho, .mitch
const vasho = document.querySelector('.vasho');
const mitch = document.querySelector('.mitch');


// VASHO
// po kliknuti na .vasho element, chcem spustit kod
vasho.addEventListener('click', function () {
	// ktory v nom najde element .score
	const scoreElement = vasho.querySelector('.score');

	// vytiahne obsah elementu .score
	// (musime ho zo String zmenit na Number)
	let score = scoreElement.textContent;
	score = Number(score);

	// ulozi do elementu nove score, zvysene o 1
	scoreElement.textContent = score + 1;
});


// MITCH
// po kliknuti na ten .mitch element, chcem spustit kod
mitch.addEventListener('click', function () {
	// ktory v nom najde element .score
	const scoreElement = mitch.querySelector('.score');

	// vytiahne obsah elementu .score
	// musime ho zo String zmenit na Number
	let score = scoreElement.textContent;
	score = Number(score);

	// ulozi do elementu nove score, zvysene o 1
	scoreElement.textContent = score + 1;
});