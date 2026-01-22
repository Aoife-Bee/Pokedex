import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("You must provide a Pokemon name.");
    }

    const name = args[0];
    const pokemon = await state.pokeapi.fetchPokemon(name);

    console.log(`Throwing a Pokeball at ${name}...`);

    let catchChance = Math.random();
    if (catchChance < pokemon.base_experience / 255) {
        console.log(`${pokemon.name} escaped!`);
        return;
    } else {
        console.log(`${pokemon.name} was caught!`);
        console.log(`You may now inspect ${pokemon.name} with the inspect command.`);
        state.caughtPokemon[pokemon.name] = pokemon;
    }
}