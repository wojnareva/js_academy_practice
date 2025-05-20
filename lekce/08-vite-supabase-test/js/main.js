import 'animate.css';
import dayjs from 'dayjs';


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = ''
const supabaseKey = ''
const supabase = createClient(supabaseUrl, supabaseKey)


function createNewCard(card, animate = false) {
	const container = document.querySelector('.card-list');
	const newCard = document.createElement('li');

	if (animate) {
		newCard.classList.add('animate__animated', 'animate__tada');
	}

	newCard.innerHTML = `
		<h3>${card.title}</h3>
		<p>${card.content}</p>
		<footer><em>${dayjs(card.created_at).format('DD.MM.YYYY dddd')}</em></footer>
	`;

	container.prepend(newCard);
}



// -------------------------
// ---- MAIN PROGRAM

const form = document.querySelector('form');
const titleInput = form.querySelector('input[name=title]');
const contentInput = form.querySelector('input[name=content]');


form.addEventListener('submit', async function (event) {
	event.preventDefault();

	if (titleInput.value.trim() && contentInput.value.trim()) {

		const { data, error } = await supabase
			.from('cards')
			.insert([
				{ title: titleInput.value, content: contentInput.value },
			])
			.select();

		if (!error) {
			createNewCard(data[0], true);

			form.reset();
			titleInput.focus();
		}

	}
});


let { data: cards, error } = await supabase
	.from('cards')
	.select('*')
	.order('id', { ascending: true });

if (!error) {
	cards.forEach(card => {
		createNewCard(card);
	});
}