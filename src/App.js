import './App.css';
import Menu from './features/menu/Menu'
import DexContainer from "./features/dexContainer/DexContainer";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ListProvider } from "./data/context";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
      <ListProvider>
          <Router>
              <div className="App">
                  <Title>Pokèdex</Title>
                  <Menu />
                  <DexContainer />
              </div>
          </Router>
      </ListProvider>
  );
}

export default App;
