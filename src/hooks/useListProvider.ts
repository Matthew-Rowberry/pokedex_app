import { useContext } from "react";
import {IListState, ListContext} from "../providers/ListProvider";

interface IReturnObject<T> {
    data: T
    loading: boolean;
    fetch: () => void
}

export const useListProvider = () => {
    return useContext(ListContext);
}

export function useBaseEntity<
    K extends keyof IListState,
    V extends keyof IListState[K]['data'],
    >(key: K, id: V): IReturnObject<IListState[K]['data'][V]> {
    const context = useListProvider();
    const state = context.state;
    const data: IListState[K]['data'] = state[key].data;
    const loading: IListState[K]['loading'] = state[key].loading;
    // @ts-ignore
    const fetch = () => context.getEntityById(key, id);

    return {
        data: data[id],
        loading: loading[id],
        fetch
    }
}

export const usePokemon = (id: string) => {
    return useBaseEntity('pokemon', id)
}

export const useItem = (id: string) => {
    return useBaseEntity('item', id)
}