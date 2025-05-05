// ---- MAIN PROGRAM
// Funkce na vytvoření nové karty
function createNewCard(title, content, placement = "end") {
    const ul = document.querySelector(".card-list");

    const li = document.createElement("li");
    li.classList.add("new", "animate__animated", "animate__pulse");

    const header3 = document.createElement("h3");
    header3.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    li.append(header3, paragraph);

    if (placement === "start") {
        ul.prepend(li);
    } else {
        ul.append(li);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.querySelector("form");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault(); // zruší reload

        const title = this.querySelector(".title").value;
        const content = this.querySelector(".content").value;
        const placement = this.querySelector(".placement").value;

        createNewCard(title, content, placement);
        this.reset(); // vymaže formulář
    });
});

fetch("./cards.json")
    .then(response => response.json()) // převede odpověď na JS objekt
    .then(data => {
        data.forEach(item => {
            createNewCard(item.title, item.content, "end");
        });
    })
