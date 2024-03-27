var speed = 200;
const yes = document.querySelector(".yes_button");
const no = document.querySelector(".no_button");

function typeWriter(elemId, txt, i = 0) {
    if (i < txt.length) {
        document.getElementById(elemId).innerHTML += txt.charAt(i);
        setTimeout(function() {
            typeWriter(elemId, txt, i + 1);
        }, speed);
    } else {
        showButtons(); // Wywołaj funkcję showButtons() po zakończeniu animacji pisania
    }
}

function showButtons() {
    const buttons = document.querySelector(".buttons");
    buttons.style.display = "flex";
}

no.addEventListener("click", () => {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
})

yes.addEventListener("click", () => {
    const ul = document.querySelector("ul");
    ul.style.display = "flex";
    setTimeout(() => {
        showGameElement();
    }, "6000")
})

function showGameElement() {
    const game = document.querySelector(".play");
    game.style.display = "flex";

    setTimeout(() => {
        window.location.replace("/game");
    }, "5000");
}

typeWriter("h1", 'Chcesz zostać strażakiem?');
