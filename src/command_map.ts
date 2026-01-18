import type { State } from "./state.js";

export async function commandMapForward(state: State): Promise<void> {
    const result = await state.pokeapi.fetchLocations(state.nextLocationsURL ?? undefined);
    for (const loc of result.results) {
        console.log(`${loc.name}`);
    }
    state.nextLocationsURL = result.next;
    state.prevLocationsURL = result.previous;
}

export async function commandMapBack(state: State): Promise<void> {
    if (state.prevLocationsURL === null) {
        console.log("You're on the first page");
        return;
    }
    const result = await state.pokeapi.fetchLocations(state.prevLocationsURL ?? undefined);
    for (const loc of result.results) {
        console.log(`${loc.name}`);
    }
    state.nextLocationsURL = result.next;
    state.prevLocationsURL = result.previous;
}