import './App.css';
import Menu from './features/menu/Menu'
import Pokedex from "./features/pokedex/Pokedex";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <div className="App">
        <Title>Pokèdex</Title>
        <Menu />
        <Pokedex />
    </div>
  );
}

export default App;
