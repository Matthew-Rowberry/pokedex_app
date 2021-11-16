import './App.css';
import Menu from './features/menu/Menu'
import DexContainer from "./features/dexContainer/DexContainer";
import styled, {ThemeProvider} from "styled-components";
import { theme } from './theme/theme'
import { BrowserRouter as Router } from "react-router-dom";
import { ListProvider } from "./data/context";

const NavContainer = styled.div`
  position: sticky;
  z-index: 5;
  top: 0;
  background-color: ${props => props.theme.colors.background.secondary};
  padding: 10px 0;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <ListProvider>
              <Router>
                  <div className="App">
                      <NavContainer>
                          <Title >Pokèdex</Title>
                          <Menu />
                      </NavContainer>
                      <DexContainer />
                  </div>
              </Router>
          </ListProvider>
      </ThemeProvider>
  );
}

export default App;
