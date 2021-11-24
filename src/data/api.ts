import {EntityType, IPokemon, IItem} from './type'
import axios from "axios";

interface ISpeciesResponse {
    flavor_text_entries: {
        flavor_text: string,
        language: {
            name: string,
            url: string
        },
        version: {
            name: string,
            url: string
        }
    }[]
}

interface ISpecies {
    flavor_text_entries: {
        flavor_text: string,
        version: {
            name: string,
        }
    }[]
}


export const getEntityList = async (key: EntityType, offsetValue: number) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/${key}?limit=30&offset=${offsetValue}`);
    return res.data.results.map((entity:any) => entity.name);
}

export const getEntity = async (key: EntityType, id: string) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/${key}/${id}`);
    return transforms[key](res.data)
}

export const getSpecies = async (name: string) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    return transformSpecies(res.data)
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

const transformSpecies = (res:ISpeciesResponse):ISpecies => {
    let species: ISpecies = {
        flavor_text_entries: []
    }

    species.flavor_text_entries = res.flavor_text_entries.filter((entry => entry.language.name === 'en'))
    species.flavor_text_entries = species.flavor_text_entries.map((entry) => {
        entry.version.name= entry.version.name.replace(/-/g, " ");
        return entry
    })

    return species
}