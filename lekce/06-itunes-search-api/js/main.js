/**
 * TODO:
 * na domacu ulohu mozes skusit vylepsenia:
 * 
 * - aby vzdy mohol hrat iba jeden song :)
 *   ze ked spustis jeden song, vsetky ostatne sa stopnu alebo zapauzuju
 * 
 * - nech sa zobrazuje iba posledny search
 *   teraz ked vyhladam talking heads, potom st. vincent a potom paramore
 *   tak sa vsetky z nich pridavaju do nekonecne rastuceho zoznamu
 *   mozno chces zobrazovat iba vysledky posledneho vyhladavania
 *   a teda pri kazdom searchi premazat zoznam
 */


/**
 * CREATE NEW CARD 
 * vytvori novy LI element a vlozi na spravne miesto
 * @param {Object} song 
 * @param {String} content 
 */
function createNewCard(song) {
	const container = document.querySelector('.card-list');
	const newCard = document.createElement('li');

	// objavi sa s animaciou
	newCard.classList.add('animate__animated', 'animate__tada');

	newCard.innerHTML = `
		<header>
			<img src="${song.artworkUrl100}" alt="${song.artistName + ' ' + song.trackName}">
			<h3>${song.artistName}</h3>
		</header>
		<figure>
  			<figcaption>
				
				<span>${song.trackName}</span>
			</figcaption>
  			<audio controls src="${song.previewUrl}"></audio>
		</figure>
	`;

	// s prepend sa objavi na zaciatok zoznamu
	container.prepend(newCard);
}


// -------------------------
// ---- TU TO REALNE ZACINA 

const form = document.querySelector('form');
const searchInput = form.querySelector('input[type=search]');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	if (searchInput.value.trim()) {
		let searchQuery = encodeURIComponent(searchInput.value.trim());

		// v skutocnosti pri praci s konkretne tymto itunes api
		// by sme taketo ziadosti posielat ZO SERVERA
		// napriklad pouzitim NODE

		// to zatial nevieme, tak to ukazujem takto, ze prehliadaca
		// cize vlastne pouzivame itunes api "neoficialny" sposobom
		// znamena to, ze fetch na tuto adresu z prehliadaca nemusi fungovat
		// specialne, ak ty tento kod skusis v Safari

		// toto je problem konkretne itunes api
		// ty si pokojne skus najst ine api, spolahlivejsie

		// ale ako vzdy - pointa tu neni ukazat ti depeche mode songy
		// pointa tu je ukazat, ze ako pracovat API vseobecne
		// ze v dokumentacii si najdes adresu, na ktoru posles ziadost
		// a tu adresu si vyskladas napriklad podla toho,
		// co user napise do inputu


		// fetch(`https://itunes.apple.com/search?term=${searchQuery}&entity=song`)

		// na domacu ulohu si vyhladaj CO su CORS chyby, CORS problemy
		// a ako ich riesit
		// v tomto je dobry ChatGPT alebo AI vseobecne

		// ja som pred adresu pridal https://corsproxy.io/?
		// mozes si na domaca ulohu vyhladat co to je 
		// a pouzivaj to iba takto, ked sa hras :) nie v realnych projektoch

		fetch(`https://corsproxy.io/?https://itunes.apple.com/search?term=${searchQuery}&entity=song`)
			.then(response => response.json())
			.then(data => {
				data.results.forEach(song => {
					createNewCard(song);
				});
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}
});