
export interface PokemonHomeDetails {
    name: string;
    picture: string;
    id: number;
    url: string;
    effect_entries: Effect_Entries[];
}
export interface PokemonResults {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}


export interface Pokemon {
    id: number;
    attributes: any[];
    baby_trigger_for: any;
    category: Category;
    cost: number;
    effect_entries: Effect_Entries[];
    flavor_text_entries: Flavor_Text_Entries[];
    fling_effect: string;
    fling_power: number;
    game_indices: Game_Indices[];
    held_by_pokemon: Held_By_Pokemon[];
    machines: any[];
    name: string;
    names: Names[];
    sprites: Sprites;
}

export interface Category {
    name: string;
    url: string;
}

export interface Effect_Entries {
    effect: string;
    language: Language;
    short_effect: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface Flavor_Text_Entries {
    language: Language;
    version_group: Version_Group;
}
export interface Version_Group {
    name: string;
    url: string;
}

export interface Game_Indices {
    game_index: number;
    generation: Generation;
}

export interface Generation {
    name: string;
    url: string;
}

export interface Held_By_Pokemon {
    pokemon: PokemonHeld;
    version_details: VersionDetails[];
}

export interface Names {
    language: Language;
    name: string;
}

export interface Sprites {
    default: string;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}

export interface PokemonHeld {
    name: string;
    url: string;
}

export interface VersionDetails {
    rarity: number;
    version: Version;
}

export interface Version {
    name: string;
    url: string;
}