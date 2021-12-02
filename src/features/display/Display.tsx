import React from "react";
import styled from "styled-components";
import {EntityType} from "../../data/type";
import usePokemon from "../../hooks/usePokemon";
import ThreeDProfile from "../threeDProfile/ThreeDProfile";

interface IComponentProps {
    category: EntityType
    name: string
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  height: 100%;
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
`;

const Details = styled.div`
  overflow: scroll;
  
  p {
    text-transform: capitalize;
  }
`;

const FlavorTextTable = styled.div`
  overflow: scroll;
`;

const GameTitle = styled.p`
  text-transform: capitalize;
  width: 100%;
  padding: 8px 0;
  font-weight: 600;
  color: black;
`;

const Display: React.FC<IComponentProps> = (props) => {
    const pokemon = usePokemon(props.name)

    if (pokemon.loading) return <h1>Loading Display</h1>

    return (
        <Container>
            <ThreeDProfile name={pokemon.entity.value.name} id={pokemon.entity.value.id} />
            {/*<Portrait src={pokemon.entity.value.artwork} alt={pokemon.entity.value.name}/>*/}
            <Details>
                <p>Name: {pokemon.entity.value.name}</p>
                <p>#{pokemon.entity.value.id}</p>
                <p>Height: {pokemon.entity.value.height / 10} M</p>
                <p>Weight: {pokemon.entity.value.weight / 10} Kg</p>

                <div>
                    <p>Types:</p>
                    {pokemon.entity.value.types.map((type) => {
                        return (
                            <div>
                                <p>{type.type.name}</p>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <p>Abilities:</p>
                    {pokemon.entity.value.abilities.map((ability) => {
                        return (
                            <div>
                                <p>{ability.ability.name}</p>
                                <p>{ability.isHidden && "(Hidden Ability)"}</p>
                            </div>
                        )
                    })}
                </div>
            </Details>
            {/*<FlavorTextTable>*/}
            {/*    {pokemon.species.value?.flavorTextEntries.map((entry) => {*/}
            {/*        return (*/}
            {/*            <div>*/}
            {/*                <GameTitle>{entry.version.name}</GameTitle>*/}
            {/*                <p>{entry.flavorText}</p>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</FlavorTextTable>*/}
        </Container>
    )
}

export default Display;