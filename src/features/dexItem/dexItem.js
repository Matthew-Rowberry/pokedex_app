import styled from "styled-components";
import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Item = styled(NavLink)`
  color: floralwhite;
  background-color: teal;
  border-radius: 25px 0 0 25px;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  column-gap: 15px;
  padding: 15px;
  margin-top: 8px;
  
  &:last-child {
    margin-bottom: 8px;
  }
`;

const Icon = styled.img`
  width: 100px;
`;

const Name = styled.p`
  text-align: left;
`;

const DexItem = (props) => {
    const [pokemonData, updatePokemon] = useState({})

    useEffect(() => {
        const fillPokemonData = async () => {
            let pokemonData = await axios.get(props.pokemonUrl)
            updatePokemon(pokemonData.data)
        }
        fillPokemonData()
    }, [])

    return (
        <Item key={pokemonData.id} to={`/${pokemonData.name}`}>
            <p>#{pokemonData.id}</p>
            <Icon src={pokemonData.sprites?.versions["generation-vii"].icons.front_default} alt={pokemonData.name}/>
            <Name>{pokemonData.name}</Name>
            {/*<p>{`<3`}</p>*/}
        </Item>
    )
}

export default DexItem;
