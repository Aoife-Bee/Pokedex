import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (const name in commands) {
        const cmd = commands[name];
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}