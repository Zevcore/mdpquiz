var speed = 200;
const yes = document.querySelector(".yes_button");
const no = document.querySelector(".no_button");
const buttons = document.querySelector(".buttons");

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
    buttons.style.display = "flex";
}

function hideButtons() {
    buttons.style.display = "none";
}

no.addEventListener("click", () => {
    hideButtons();
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
})

yes.addEventListener("click", () => {
    const ul = document.querySelector("ul");
    ul.style.display = "flex";
    hideButtons();
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
