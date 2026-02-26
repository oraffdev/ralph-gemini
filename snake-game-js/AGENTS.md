# Snake Game JS - Agents Knowledge

## Development setup
- The project uses TypeScript for development.
- Use `tsc` in the `snake-game-js` directory to compile `main.ts` to `main.js`.
- The `tsconfig.json` uses the `files` property to specify entry points because of potential configuration conflicts with the root.

## Technical Details
- Canvas size is fixed at 400x400.
- Grid size is 20x20.
- Game loop uses `requestAnimationFrame` with a fixed FPS control (currently 10 FPS).
- Main game script is `main.js`, which is compiled from `main.ts`.

## Learnings & Patterns
- The snake's direction is controlled by keyboard arrow keys (ArrowUp, ArrowDown, ArrowLeft, ArrowRight).
- Direction changes are restricted to prevent 180-degree turns (e.g., cannot go directly from left to right) to prevent the snake from eating itself instantly.
- Always use `npx -y -p typescript tsc --project snake-game-js/tsconfig.json` to compile if typescript is not locally installed.
- **Snake Growth:** Achieving snake growth is done by calculating a new head position and using `unshift` to add it, while only using `pop` (removing the tail) if the snake *doesn't* eat food in that frame.
- **Food Placement:** When generating food, always verify that the new position doesn't overlap with any segment of the snake to avoid unfair spawns.
- **UI Update:** Use `textContent` to update the score element in the DOM to avoid unnecessary HTML parsing.
