import './App.css';
import Menu from './features/menu/Menu'
import DexContainer from "./features/dexContainer/DexContainer";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./providers/GlobalProvider";
import ThemeToggle from "./features/themeToggle/ThemeToggle";

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
  color: ${props => props.theme.colors.foreground.primary}
`;

const App = () => {
  return (
      <GlobalProvider>
          <Router>
              <div className="App">
                  <NavContainer>
                      <div>
                          <Title >Pokédex</Title>
                          <Menu />
                      </div>

                      <ThemeToggle

                      />
                  </NavContainer>
                  <DexContainer />
              </div>
          </Router>
      </GlobalProvider>
  );
}

export default App;
