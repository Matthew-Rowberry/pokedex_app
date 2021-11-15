import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useBaseEntity} from "../../hooks/useListProvider";
import useAxios from "../../hooks/useAxios";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'img details' 
                          'main main';
`;

const Portrait = styled.img`
    width: 100%;
    grid-area: img
`;

const Details = styled.div`
    width: 100%;
    grid-area: details
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

const useSpecies = (id) => {
    const { response, loading} = useAxios({
        method: 'get',
        url: `/pokemon-species/${id}`,
    });

    return { response, loading };
}

const Display = () => {
    let params  = useParams();
    const { loading, data, fetch } = useBaseEntity(params.category, params.name);

    const detailsResponse = useSpecies(params.name);
    const flavorText = detailsResponse.response?.flavor_text_entries.filter((entry => entry.language.name === 'en'))

    useEffect(() => {
        if(!data && !loading) fetch()
    }, [])

    let imgURL;
    if(data) {
        switch (params.category) {
            case 'pokemon': {
                imgURL = data.sprites?.other['official-artwork'].front_default;
                break;
            }
            default: {
                imgURL = data.sprites?.default;
                break;
            }
        }
    }

    if(loading || detailsResponse.loading || !data ) return <h1>Loading Display</h1>

    return (
        <Container>
            <Portrait src={imgURL} alt={data.name} />
            <Details>Data goes here</Details>
            <FlavorTextTable>
                {flavorText?.map((entry) => {
                    const displayName = entry.version.name.replace(/-/g, " ");

                    return (
                        <div>
                            <GameTitle>{displayName}</GameTitle>
                            <p>{entry.flavor_text}</p>
                        </div>
                    )
                })}
            </FlavorTextTable>
        </Container>
    )
}

export default Display;