import React, { useState } from "react";

export const FavouritesContext = React.createContext();

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState({
        pokemon: {},
        item: {}
    })

    const updateFavourite = (key, id) => {
        setFavourites(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                [id]: !prevState[id]
            }
        }))
    }

    return (
        <FavouritesContext.Provider value={{...favourites, updateFavourite}}>
            {children}
        </FavouritesContext.Provider>
    )
}