const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');
const scoreElem = document.getElementById("score");
let gameRunning = true;

const maxFlames = 30;
const maxBombs = 5;
const generationInterval = 500;
const bombChance = 0.02;
let lastGenerationTime = 0;

const fire = new Image();
const bomb = new Image();
fire.src = "../images/fire.png";
bomb.src = "../images/bomb.png";

let score = 0;
let flames = [];
let bombs = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('load', () => {
    resizeCanvas();
    gameLoop();
});
window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);

function generateRandomFire() {
    const currentTime = Date.now();
    if (currentTime - lastGenerationTime > generationInterval && flames.length < maxFlames) {
        const x = Math.random() * canvas.width;
        const y = 0;
        const size = Math.random() * 100 + 20;
        const speed = Math.random() * 2 + 3;

        flames.push({ x, y, size, speed });
        lastGenerationTime = currentTime;
    }

    if (Math.random() < bombChance && bombs.length < maxBombs) {
        const x = Math.random() * canvas.width;
        const y = 0;
        const size = 50;
        const speed = Math.random() * 2 + 3;

        bombs.push({ x, y, size, speed, image: bomb });
    }
}

function drawFlames() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flames.forEach((flame, index) => {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(fire, flame.x, flame.y, flame.size, flame.size);
        flame.y += flame.speed;

        if (flame.y > canvas.height) {
            flames.splice(index, 1);
        }
    });

    bombs.forEach((bomb, index) => {
        ctx.drawImage(bomb.image, bomb.x, bomb.y, bomb.size, bomb.size);
        bomb.y += bomb.speed;

        if (bomb.y > canvas.height) {
            bombs.splice(index, 1);
        }
    });
}

function updateScore() {
    canvas.addEventListener('mousedown', function(event) {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        flames.forEach((flame, index) => {
            if (
                mouseX >= flame.x &&
                mouseX <= flame.x + flame.size &&
                mouseY >= flame.y &&
                mouseY <= flame.y + flame.size
            ) {
                updateScoreBoard(1);
                flames.splice(index, 1);
            }
        });

        bombs.forEach((bomb, index) => {
            if (
                mouseX >= bomb.x &&
                mouseX <= bomb.x + bomb.size &&
                mouseY >= bomb.y &&
                mouseY <= bomb.y + bomb.size
            ) {
                updateScoreBoard(-2);
                bombs.splice(index, 1);
            }
        });
    });
}

function updateScoreBoard(points) {
    score += points;
    if (score === 25) stopGame();
    scoreElem.textContent = score.toString();
}

function stopGame() {
    gameRunning = false;
    window.location.replace("/invite");
}

function gameLoop() {
    if (!gameRunning) return;

    drawFlames();
    generateRandomFire();
    updateScore();

    requestAnimationFrame(gameLoop);
}
