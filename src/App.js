import './App.css';
import Menu from './features/menu/Menu'
import DexContainer from "./features/dexContainer/DexContainer";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
      <Router>
          <div className="App">
              <Title>Pokèdex</Title>
              <Menu />
              <DexContainer />
          </div>
      </Router>
  );
}

export default App;
