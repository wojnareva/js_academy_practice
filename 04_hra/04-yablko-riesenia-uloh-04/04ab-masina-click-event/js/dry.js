// DRY (don't repeat yourself)
// toto je verzia, ktora funguje pre lubovolny pocet dudov
// -------------------------------------------------------

// najdeme vsetky HTML elementy s classom .dude
const dudes = document.querySelectorAll('.dude');

// pre kazdy element V CYKLE zopakujeme kod
dudes.forEach(dude => {

	// po kliknuti na duda
	dude.addEventListener('click', function () {
		// z HTML kodu vytiahneme jeho score
		const scoreElement = dude.querySelector('.score');
		const score = Number(scoreElement.textContent);

		// zvysime ho o 1
		scoreElement.textContent = score + 1;
	});

});