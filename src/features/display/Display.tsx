import React from "react";
import { useEffect} from "react";
import { usePokemon} from "../../hooks/useListProvider";
import useAxios from "../../hooks/useAxios";
import styled from "styled-components";
import {EntityType} from "../../data/type";

interface IComponentProps {
    category: EntityType
    name: string
}

interface IResponse {
    flavor_text_entries: {
        flavor_text: string,
        language: {
            name: string,
            url: string
        },
        version: {
            name: string,
            url: string
        }
    }[]
}

interface ISpecies {
    flavor_text_entries: {
        flavor_text: string,
        version: {
            name: string,
        }
    }[]
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-areas: 'img details' 
                          'main main';
`;

const Portrait = styled.img`
  width: 100%;
  grid-area: img
`;

const Details = styled.div`
  width: 100%;
  grid-area: details;

  p {
    text-transform: capitalize;
  }
`;

const FlavorTextTable = styled.div`
  overflow: scroll;
  grid-area: main
`;

const GameTitle = styled.p`
  text-transform: capitalize;
  width: 100%;
  padding: 8px 0;
  font-weight: 600;
  color: black;
`;

const useSpecies = (id: string) => {
    let {response, loading} = useAxios({
        method: 'get',
        url: `/pokemon-species/${id}`,
    });

    return {
        response: response ? transformRes(response) : undefined,
        loading
    };
}

const transformRes = (res: IResponse):ISpecies => {
    let species: ISpecies = {
        flavor_text_entries: []
    }

    species.flavor_text_entries = res.flavor_text_entries.filter((entry => entry.language.name === 'en'))
    species.flavor_text_entries = res.flavor_text_entries.map((entry) => {
        entry.version.name= entry.version.name.replace(/-/g, " ");
        return entry
    })

    console.log(species)
    return species
}

const Display: React.FC<IComponentProps> = (props) => {
    const {loading, data, fetch} = usePokemon(props.name);

    const detailsResponse = useSpecies(props.name);
    useEffect(() => {
        if (!data && !loading) fetch()
    }, [])

    if (loading || detailsResponse.loading || !detailsResponse.response || !data) return <h1>Loading Display</h1>

    return (
        <Container>
            <Portrait src={data.artwork} alt={data.name}/>
            <Details>
                <p>Name: {data.name}</p>
                <p>#{data.id}</p>
                <p>Height: {data.height / 10} M</p>
                <p>Weight: {data.weight / 10} Kg</p>

                <div>
                    <p>Types:</p>
                    {data.types.map((type) => {
                        return (
                            <div>
                                <p>{type.type.name}</p>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <p>Abilities:</p>
                    {data.abilities.map((ability) => {
                        return (
                            <div>
                                <p>{ability.ability.name}</p>
                                <p>{ability.is_hidden && "(Hidden Ability)"}</p>
                            </div>
                        )
                    })}
                </div>
            </Details>
            <FlavorTextTable>
                {detailsResponse.response.flavor_text_entries.map((entry) => {
                    return (
                        <div>
                            <GameTitle>{entry.version.name}</GameTitle>
                            <p>{entry.flavor_text}</p>
                        </div>
                    )
                })}
            </FlavorTextTable>
        </Container>
    )
}

export default Display;