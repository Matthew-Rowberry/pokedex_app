import React, {useState} from "react";
import axios from "axios";
import {EntityType, IPokemon, IItem} from "../data/type";
import {getEntity, getEntityList} from '../data/api'

interface IListInit<T> {
    list: string[];
    data: {
        [key:string]: T
    };
    loading: {
        [key:string]: boolean;
    };
    loadingList: boolean;
    offset: number;
}

interface IListState {
    pokemon: IListInit<IPokemon>,
    item: IListInit<IItem>
}

interface IListContext extends IListState {
    nextPage: (key: EntityType) => void ,
    getEntityById: (key: EntityType, id: string) => void
}

export const ListContext = React.createContext<IListContext>(
    {} as IListContext
);

export const ListProvider: React.FC = ({children}) => {
    const [state, updateState] = useState<IListState>({
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

    const nextPage = async (key: EntityType) => {
        if(state[key].loadingList) return;

        updateState({
            ...state,
            [key]: {
                ...state[key],
                loadingList: true,
            }
        })

        const res = await getEntityList(key, state[key].offset)

        updateState(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                offset: prevState[key].offset + 30,
                list: [...prevState[key].list, ...res],
                loadingList: false,
            }
        }))
    }

    const getEntityById = async (key: EntityType, id: string) => {
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

        const res = await getEntity(key, id)

        updateState(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                data: {
                    ...prevState[key].data,
                    [id]: res
                },
                loading: {
                    ...prevState[key].loading,
                    [id]: false
                },
            }
        }))
    }



    return (
        <ListContext.Provider value={{...state, nextPage, getEntityById}}>
            {children}
        </ListContext.Provider>
    )
}
