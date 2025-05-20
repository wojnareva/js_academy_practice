/**
 * kod pre tieto konfety som nasiel na:
 * https://confetti.js.org/more.html
 */
function shootConfetti() {
	const defaults = {
		spread: 360,
		ticks: 100,
		gravity: 0,
		decay: 0.94,
		startVelocity: 30,
	};

	function shoot() {
		confetti({
			...defaults,
			particleCount: 50,
			scalar: 1.2,
			shapes: ["circle", "square"],
			colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
		});

		confetti({
			...defaults,
			particleCount: 60,
			scalar: 2,
			shapes: ["emoji"],
			shapeOptions: {
				emoji: {
					value: ["🦄", "🌈"],
				},
			},
		});
	}

	setTimeout(shoot, 0);
	setTimeout(shoot, 100);
	setTimeout(shoot, 200);
}