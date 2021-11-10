import './App.css';
import Menu from './features/menu/Menu'
import Dex from "./features/dex/Dex";
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
              <Dex />
          </div>
      </Router>
  );
}

export default App;
