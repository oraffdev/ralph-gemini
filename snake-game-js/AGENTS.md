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
