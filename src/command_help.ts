import type { State } from "./state.js";

export function commandHelp(state: State): void {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (const name in state.commands) {
        const cmd = state.commands[name];
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}