import { FavouritesProvider} from "./favouritesProvider";
import { ListProvider } from "./listProvider";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import * as theme from '../theme/theme'
import {useState} from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.colors.background.primary)};
  }
`

export const GlobalProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState('light')


    return (
        <ThemeProvider theme={theme[currentTheme]}>
            <GlobalStyle />
            <FavouritesProvider>
                <ListProvider>
                    <button onClick={() => {setCurrentTheme(currentTheme === "light" ? "dark" : "light")}}>Click</button>
                    {children}
                </ListProvider>
            </FavouritesProvider>
        </ThemeProvider>
    )
}

export default GlobalProvider;