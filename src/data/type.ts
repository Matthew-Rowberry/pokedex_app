export type EntityType = "pokemon" | "item";

interface IEntity {
    id: number;
    name: string;
    sprite: string;
}

export interface IItem extends IEntity {
}

export interface IPokemon extends IEntity{
    artwork: string;
    height: number;
    weight: number;
    abilities: {
        ability: {
            name: string
        };
        is_hidden: boolean
    }[];
    types: {
        slot: number,
        type: {
            name: string,
            url: string
        }
    }[]
}