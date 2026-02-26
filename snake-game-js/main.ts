// main.ts
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const scoreElement = document.getElementById("score")!;

// Game configuration
const GRID_SIZE = 20;
const CANVAS_SIZE = 400;

let lastTime = 0;
const FPS = 10;
const frameDelay = 1000 / FPS;

function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function update() {
    // Current story doesn't require update logic yet, just the loop
}

function draw() {
    clearCanvas();
    // Current story doesn't require drawing game objects yet, just clearing
}

function gameLoop(currentTime: number) {
    requestAnimationFrame(gameLoop);

    const deltaTime = currentTime - lastTime;
    if (deltaTime < frameDelay) {
        return;
    }

    lastTime = currentTime - (deltaTime % frameDelay);

    update();
    draw();
}

// Start the loop
requestAnimationFrame(gameLoop);

console.log("Snake Game Loop Started");
