// ak chces viac vysvetleni
// napozeraj si tie moje ROB HRY V JAVASCRIPTE kurzy

/**
 * MOVE ELEMENT DOWN
 * funkcia dostane HTML element a postupne ho posuva smerom dole
 * az vypadne von z obrazovky, kedy element odstranime 
 * 
 * @param {HTMLElement} element 
 */
function moveElementDown(element) {
	// zvycajne hovorim, aby ste premennym nedavali jedno-pismenove nazvy
	// ale y vcelku dava zmysel, lebo ibe o poziciu na osi y
	// mas os x (pozicia elementu z lavej strany obrazovky)
	// mas os y (pozicia elementu od vrchu)
	// ak y je 100, element je vzdialeny 100px od vrchu obrazovky
	let y = 0; // Počiatočná pozícia
	const screenHeight = window.innerHeight;

	// pre lepsie vysvetlenie tohoto systemu vseobecne
	// a requestAnimationFrame funkcie konkretne
	// si pozri kurz Rob hry v JavaScripte 
	function animate() {
		// element sa bude posuvat dole tolkoto pixelov
		y = y + 3;

		// css vlastnost translateY posunie element po ose y
		element.style.transform = `translateY(${y}px)`;

		// ak je element stale na obrazovke, posuvame ho
		// kontrolujeme, ci vrchna pozicia obrazka je stale < velkost obrazovky
		// v opacnom pripade vypadol z obrazovky a GAME OVER!!
		if (element.getBoundingClientRect().top < screenHeight) {
			requestAnimationFrame(animate);
		}
		else { // GAME OVER
			// najdeme a odstranime vsetky img elementy 
			document.querySelectorAll('img').forEach(img => {
				img.remove();

				// zobrazime score
				alert('score: ' + score);

				// nacitame stranku znova, hra sa znova spusti
				window.location.reload();
			});
		}
	}

	// vsimni si, ze obrazok vznika animaciou
	// tento setTimeout je divny hack, aby kompenzoval tu animaciu
	// ze az ked skonci animacia vzniku elementu, startujeme
	setTimeout(() => {
		// start it up, boys!! and girls!! and nbs!!
		animate();
	}, 160);
}


/**
 * CREATE NEW TARGET
 * funkcia vytvory novy img element na cca nahodnej pozici
 * nahodna pozicia x, nahodna pozicia y vo vrchnej stvrtine obrazovky
 * 
 * @param {String} src 
 */
function createNewTarget(src) {
	// novy <img> element
	const img = document.createElement("img");
	img.src = src;
	img.style.position = "absolute";

	// zistime rozmery okna prehliadaca
	// kazdy ma monitor inej velkosti
	// kazdy mobil ma ine rozmery, atd... 
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight / 4; // chcem elementy vytvarat vo vrchnej stvrtine

	// vypocitame nahodnu x, y poziciu pre novy img
	// minus par pixelov zlava a zhora, nech sa sa nebjavi uplne pri hrane 
	const randomX = Math.random() * (windowWidth - 140);
	const randomY = Math.random() * (windowHeight - 60);

	// nastavime img na nahodnu poziciu
	img.style.left = `${randomX}px`;
	img.style.top = `${randomY}px`;

	// pridame novy img realne do stranky
	document.body.appendChild(img);

	// okamzite mu rozkazeme hybat sa
	moveElementDown(img);
}


// ---------------------
// HLAVNY PROGRAM

let score = 0;

// okazmite vytvorime prvy obrazok
createNewTarget('./images/vaso.jpg');


// kazdych 7 sekund pribudne bonusovy obrazok
// len tak, pre eskalujucu srandu
setInterval(() => {
	createNewTarget('./images/vaso.jpg');
}, 7000);


// po kliknuti
document.addEventListener('click', (event) => {
	// skontrolujeme, ci sme klikli konkretne na obrazok
	if (event.target.matches('img')) {
		// odstranime obrazok
		event.target.remove();

		// zvysime score
		score++;
		console.log('score: ' + score);

		// vytvorime novy element
		createNewTarget('./images/vaso.jpg');
	}
});