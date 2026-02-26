"use strict";
// main.ts
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
// Game configuration
const GRID_SIZE = 20;
const CANVAS_SIZE = 400;
let lastTime = 0;
const FPS = 10;
const frameDelay = 1000 / FPS;
// Game state
let score = 0;
let food = { x: 5, y: 5 };
let gameOver = false;
// Snake state
let snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
];
let direction = { x: 1, y: 0 };
function generateFood() {
    const maxGrid = CANVAS_SIZE / GRID_SIZE;
    let newFood;
    // Ensure food doesn't spawn on top of the snake
    while (true) {
        newFood = {
            x: Math.floor(Math.random() * maxGrid),
            y: Math.floor(Math.random() * maxGrid)
        };
        const onSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
        if (!onSnake)
            break;
    }
    food = newFood;
}
// Control the snake's direction
window.addEventListener("keydown", (event) => {
    if (gameOver) {
        if (event.key === "Enter" || event.key === " ") {
            location.reload();
        }
        return;
    }
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0)
                direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (direction.y === 0)
                direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (direction.x === 0)
                direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0)
                direction = { x: 1, y: 0 };
            break;
    }
});
function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}
function update() {
    if (gameOver)
        return;
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    // Check collision with walls
    const maxGrid = CANVAS_SIZE / GRID_SIZE;
    if (head.x < 0 || head.x >= maxGrid || head.y < 0 || head.y >= maxGrid) {
        gameOver = true;
        return;
    }
    // Check collision with self
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver = true;
        return;
    }
    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = `Score: ${score}`;
        snake.unshift(head); // Add new head without removing tail
        generateFood();
    }
    else {
        snake.unshift(head);
        snake.pop();
    }
}
function draw() {
    clearCanvas();
    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE - 1, GRID_SIZE - 1);
    // Draw snake
    ctx.fillStyle = "lime";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE - 1, GRID_SIZE - 1);
    });
    if (gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", CANVAS_SIZE / 2, CANVAS_SIZE / 2);
        ctx.font = "20px Arial";
        ctx.fillText("Press SPACE to Restart", CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 50);
    }
}
function gameLoop(currentTime) {
    requestAnimationFrame(gameLoop);
    const deltaTime = currentTime - lastTime;
    if (deltaTime < frameDelay) {
        return;
    }
    lastTime = currentTime - (deltaTime % frameDelay);
    update();
    draw();
}
// Initial food placement
generateFood();
// Start the loop
requestAnimationFrame(gameLoop);
console.log("Snake Game Loop Started");
