import React, { useState } from "react";

export const FavouritesContext = React.createContext();

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState({})

    const updateFavourite = (id) => {
        setFavourites(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    return (
        <FavouritesContext.Provider value={{...favourites, updateFavourite}}>
            {children}
        </FavouritesContext.Provider>
    )
}