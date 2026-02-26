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

// Snake state
let snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
];
let direction = { x: 1, y: 0 };

function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);
    snake.pop();
}

function draw() {
    clearCanvas();

    // Draw snake
    ctx.fillStyle = "lime";
    snake.forEach(segment => {
        ctx.fillRect(
            segment.x * GRID_SIZE,
            segment.y * GRID_SIZE,
            GRID_SIZE - 1,
            GRID_SIZE - 1
        );
    });
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
