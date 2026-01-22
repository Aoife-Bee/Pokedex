import { type State } from "./state.js";


export async function startREPL(state: State): Promise<void> {
    state.rl.prompt();

    state.rl.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            state.rl.prompt();
            return;
        }

        const commandName = words[0];
        const args = words.slice(1);    

        const cmd = state.commands[commandName];
        if (!cmd) {
            console.log(
                `Unknown command: "${commandName}". Type "help" for a list of commands.`
            );
            state.rl.prompt();
            return;
        }

        try {
            await cmd.callback(state, ...args);
        } catch (err) {
            console.log(err);
        }

        state.rl.prompt();
    });
};

export function cleanInput(input: string): string[] {
    return input
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length >0);
};