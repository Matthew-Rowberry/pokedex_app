import {EntityType, IPokemon, IItem} from './type'
import axios from "axios";

export const getEntityList = async (key: EntityType, offsetValue: number) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/${key}?limit=30&offset=${offsetValue}`);
    return res.data.results.map((entity:any) => entity.name);
}

export const getEntity = async (key: EntityType, id: string) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/${key}/${id}`);
    return transforms[key](res.data)
}

export const transformPokemon = (data: any): IPokemon => {
    return {
        id: data.id,
        name: data.name,
        sprite: data.sprites.versions["generation-viii"].icons.front_default,
        artwork: data.sprites.other["official-artwork"].front_default,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        types: data.types
    }
}

export const transformItem = (data: any): IItem => {
    return {
        id: data.id,
        name: data.name,
        sprite: data.sprites.default,
    }
}

const transforms = {
    pokemon: transformPokemon,
    item: transformItem
}