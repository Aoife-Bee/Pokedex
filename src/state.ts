import { createInterface, type Interface, } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
    caughtPokemon: Record<string, Pokemon>;
};

export function initState(cacheInterval: number): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    return {
        rl, 
        commands: getCommands(), 
        pokeapi: new PokeAPI(cacheInterval), 
        nextLocationsURL: null,
        prevLocationsURL: null,
        caughtPokemon: {}};

}