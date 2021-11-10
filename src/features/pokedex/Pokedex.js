import DexItem from "../dexItem/dexItem";
import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  background-color: coral;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const ScrollingDex = styled.div`
  height: 100%;
  overflow: scroll;
`;

const Pokedex = () => {
    const [pokemonArray, updatePokemon] = useState([])

    useEffect(() => {
        const fillPokedex = async () => {
            let updatePokemonArr = [...pokemonArray];
            let dexList = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            updatePokemonArr = updatePokemonArr.concat(dexList.data.results)
            updatePokemon(updatePokemonArr)
        }
        fillPokedex()
    }, [])

    return (
        <Container>
            <Routes>
                <Route exact path='/' element={pokemonDisplay()}/>
            </Routes>

            <ScrollingDex>
                {dexItem(pokemonArray)}
            </ScrollingDex>
        </Container>
    )
}

const pokemonDisplay = () => {
    return <p>This is the display</p>
}

const dexItem = (pokemonArray) => {
    return pokemonArray.map((dexItem, index) => {
        return (
            <DexItem
                pokemonUrl={pokemonArray[index].url}
            />
        )
    })
}

export default Pokedex;