export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        try {
            const response = await fetch(pageURL || `${PokeAPI.baseURL}/location-area/`);
            if (!response.ok) {
                throw new Error(`Error fetching locations`);
            }
            const result: ShallowLocations = await response.json();
            return result;
        } catch (error) {
            throw new Error(`Error fetching locations: ${error}`);
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching location: ${locationName}`);
            }
            const result: Location = await response.json();
            return result;
        } catch (error) {
            throw new Error(`Error fetching location ${locationName}: ${error}`);
        }
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};