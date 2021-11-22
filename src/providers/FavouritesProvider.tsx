import React, { useState } from "react";
import { EntityType } from "../data/type";

interface IFavouriteKeys {
    [key:string]: boolean
}

interface IFavouriteState {
    pokemon: IFavouriteKeys,
    item: IFavouriteKeys
}

interface IFavouriteContext extends IFavouriteState {
    updateFavourite: (key: EntityType, id: number) => void
}

export const FavouritesContext = React.createContext<IFavouriteContext>(
    {} as IFavouriteContext
);

export const FavouritesProvider: React.FC = ({children}) => {
    const [favourites, setFavourites] = useState<IFavouriteState>({
        pokemon: {},
        item: {}
    })

    const updateFavourite = (key: EntityType, id: number) => {
        setFavourites(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                [id]: !prevState[key][id]
            }
        }))
    }

    return (
        <FavouritesContext.Provider value={{...favourites, updateFavourite}}>
            {children}
        </FavouritesContext.Provider>
    )
}