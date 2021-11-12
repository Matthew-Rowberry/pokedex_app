import React, {useState} from "react";
import axios from "axios";

export const ListContext = React.createContext();

export const ListProvider = ({children}) => {
    const [state, updateState] = useState({
        pokemon: {
            list: [],
            data: {},
            loading: {},
            loadingList: false,
            offset: 0
        },
        item: {
            list: [],
            data: {},
            loading: {},
            loadingList: false,
            offset: 0
        }
    })

    const nextPage = async (key) => {
        if(state[key].loadingList) return;

        updateState({
            ...state,
            [key]: {
                ...state[key],
                loadingList: true,
            }
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/${key}?limit=30&offset=${state[key].offset}`);

        updateState(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                offset: prevState[key].offset + 30,
                list: [...prevState[key].list, ...res.data.results.map(item => item.name)],
                loadingList: false,
            }
        }))
    }

    const getItemById = async (key, id) => {
        if(state[key].loading[id]) return;

        updateState({
            ...state,
            [key]: {
                ...state[key],
                loading: {
                    ...state[key].loading,
                    [id]: true
                },
            }
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/${key}/${id}`);
        updateState(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                data: {
                    ...prevState[key].data,
                    [id]: res.data
                },
                loading: {
                    ...prevState[key].loading,
                    [id]: false
                },
            }
        }))
    }



    return (
        <ListContext.Provider value={{...state, nextPage, getItemById}}>
            {children}
        </ListContext.Provider>
    )
}
