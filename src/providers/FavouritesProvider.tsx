import React, { useState } from "react";

type EntityType = "pokemon" | "item";

interface IFavouriteKeys {
    [key:string]: boolean
}

interface IFavouriteState {
    pokemon: IFavouriteKeys,
    item: IFavouriteKeys
}

interface IFavouriteContext extends IFavouriteState {
    updateFavourite: (key: EntityType, id: string) => void
}

export const FavouritesContext = React.createContext<IFavouriteContext>(
    {} as IFavouriteContext
);

export const FavouritesProvider: React.FC = ({children}) => {
    const [favourites, setFavourites] = useState<IFavouriteState>({
        pokemon: {},
        item: {}
    })

    const updateFavourite = (key: EntityType, id: string) => {
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