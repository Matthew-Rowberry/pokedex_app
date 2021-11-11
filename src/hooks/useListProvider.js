import { useContext } from "react";
import { ListContext } from "../data/context";

export const useListProvider = () => {
    return useContext(ListContext);
}

export const useBaseItem = (key, id) => {
    const context = useListProvider();
    const data = context[key].data[id];
    const loading = context[key].loading[id];

    const fetch = () => context.getItemById(key, id);

    return {
        data,
        loading,
        fetch
    };
}

export const usePokemon = (id) => {
    return useBaseItem('pokemon', id)
}

export const useItem = (id) => {
    return useBaseItem('item', id)
}