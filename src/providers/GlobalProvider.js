import { FavouritesProvider} from "./FavouritesProvider";
import { ListProvider } from "./ListProvider";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import * as themeStyles from '../theme/theme'
import ContextThemeProvider from "./ContextThemeProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.colors.background.primary)};
  }
`

export const GlobalProvider = ({children}) => {
    return (
        <ContextThemeProvider>
            {(theme) => {
                return (
                    <ThemeProvider theme={themeStyles[theme]}>
                        <GlobalStyle />
                        <FavouritesProvider>
                            <ListProvider>
                                {children}
                            </ListProvider>
                        </FavouritesProvider>
                    </ThemeProvider>
                )
            }}
        </ContextThemeProvider>
    )
}

export default GlobalProvider;