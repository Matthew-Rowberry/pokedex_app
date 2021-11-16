import { FavouritesProvider} from "./favouritesProvider";
import { ListProvider } from "./listProvider";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import { theme } from '../theme/theme'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.colors.background.primary)};
  }
`

export const GlobalProvider = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <FavouritesProvider>
                <ListProvider>
                    {children}
                </ListProvider>
            </FavouritesProvider>
        </ThemeProvider>
    )
}

export default GlobalProvider;