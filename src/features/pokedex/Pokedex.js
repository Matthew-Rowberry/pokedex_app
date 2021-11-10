import DexItem from "../dexItem/dexItem";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  background-color: coral;
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100vh;
  overflow: scroll;
`;

const Pokedex = () => {
    const [pokemonArray, updatePokemon] = useState([])

    useEffect(() => {
        const fillPokedex = async () => {
            let updatePokemonArr = [...pokemonArray];
            let dexList = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            updatePokemonArr = updatePokemonArr.concat(dexList.data.results)
            updatePokemon(updatePokemonArr)
        }
        fillPokedex()
    }, [])



    return (
        <Container>
            <div>Insert page info</div>
            <div>
                {dexItem(pokemonArray)}
            </div>
        </Container>
    )

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