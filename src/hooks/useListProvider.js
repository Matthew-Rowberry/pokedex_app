import { useContext } from "react";
import { ListContext } from "../providers/listProvider";

export const useListProvider = () => {
    return useContext(ListContext);
}

export const useBaseEntity = (key, id) => {
    const context = useListProvider();
    const data = context[key].data[id];
    const loading = context[key].loading[id];

    const fetch = () => context.getEntityById(key, id);

    return {
        data,
        loading,
        fetch
    };
}

export const usePokemon = (id) => {
    return useBaseEntity('pokemon', id)
}

export const useItem = (id) => {
    return useBaseEntity('item', id)
}