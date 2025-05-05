const cards = [];

function createNewCard(title, content, position) {
  const cardList = document.querySelector('.card-list');

  const card = document.createElement("li");
  card.classList.add("new-card");

  const newTitle = document.createElement('h3');
  newTitle.textContent = title;

  const newP = document.createElement('p');
  newP.textContent = content;

  card.append(newTitle, newP);

  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";

  if (position === "start") {
    cardList.prepend(card);
  } else if (position === "end") {
    cardList.append(card);
  }

  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  });
}

document.getElementById("form").addEventListener('submit', function(e){
  e.preventDefault();

  const title = document.querySelector(".cardTitle").value;
  const content = document.querySelector(".cardContent").value;
  const position = document.getElementById("positionSelect").value;

  createNewCard(title, content, position);

  this.reset();
});

const positionSelect = document.getElementById("positionSelect");
positionSelect.addEventListener("change", () => {
  anime({
    targets: positionSelect,
    scale: [1, 1.1, 1],
    duration: 400,
    easing: "easeInOutQuad"
  });
});

fetch("./js/data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(card => {
      cards.push({
        title: card.title,
        content: card.content,
        position: card.position
      });
    });
    cards.forEach(card => {
      createNewCard(card.title, card.content, card.position);
    });
  });
