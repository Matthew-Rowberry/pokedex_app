import { useContext } from "react";
import { ListContext } from "../providers/ListProvider";

import {EntityType, IItem, IPokemon} from "../data/type";

interface IReturnObject<T> {
    data: T
    loading: boolean;
    fetch: () => void
}

export const useListProvider = () => {
    return useContext(ListContext);
}

export function useBaseEntity(key: 'pokemon', id: string):IReturnObject<IPokemon>;
export function useBaseEntity(key: 'item', id: string):IReturnObject<IItem>;
export function useBaseEntity(key: EntityType, id: string) {
    const context = useListProvider();
    const data = context[key].data[id];
    const loading = context[key].loading[id];

    const fetch = () => context.getEntityById(key, id);

    return {
        data,
        loading,
        fetch
    }
}

export const usePokemon = (id: string) => {
    return useBaseEntity('pokemon', id)
}

export const useItem = (id: string) => {
    return useBaseEntity('item', id)
}