// main.ts
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const scoreElement = document.getElementById("score")!;

type Point = { x: number; y: number };

// Game configuration
const GRID_SIZE = 20;
const CANVAS_SIZE = 400;

let lastTime = 0;
const FPS = 10;
const frameDelay = 1000 / FPS;

// Game state
let score = 0;
let food: Point = { x: 5, y: 5 };

// Snake state
let snake: Point[] = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
];
let direction: Point = { x: 1, y: 0 };

function generateFood() {
    const maxGrid = CANVAS_SIZE / GRID_SIZE;
    let newFood: Point;
    
    // Ensure food doesn't spawn on top of the snake
    while (true) {
        newFood = {
            x: Math.floor(Math.random() * maxGrid),
            y: Math.floor(Math.random() * maxGrid)
        };
        
        const onSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
        if (!onSnake) break;
    }
    
    food = newFood;
}

// Control the snake's direction
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    
    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = `Score: ${score}`;
        snake.unshift(head); // Add new head without removing tail
        generateFood();
    } else {
        snake.unshift(head);
        snake.pop();
    }
}

function draw() {
    clearCanvas();

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(
        food.x * GRID_SIZE,
        food.y * GRID_SIZE,
        GRID_SIZE - 1,
        GRID_SIZE - 1
    );

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

// Initial food placement
generateFood();

// Start the loop
requestAnimationFrame(gameLoop);

console.log("Snake Game Loop Started");
