import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    const area = await state.pokeapi.fetchLocation(args[0]);
    console.log(`Exploring ${args[0]}...`);
    console.log(`Found Pokemon:`);
    for (const encounter of area.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}