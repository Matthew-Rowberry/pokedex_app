import styled from "styled-components";
import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {usePokemon} from "../../hooks/useListProvider";

const ListItem = styled(NavLink)`
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
  width: 75px;
`;

const Name = styled.p`
  text-align: left;
`;

const Item = (props) => {
    const params = useParams();
    const { loading, data, fetch } = usePokemon(props.itemName);

    useEffect(() => {
        if(!data) fetch()
    }, [])

    if(!data || loading) return <h1>Loading item</h1>;

    return (
        <ListItem key={data.id} to={`/${[params.category]}/${data.name}`}>
            <p>#{data.id}</p>
            {/*<Icon src={pokemonDataa.sprites?.default} alt={pokemonData.name}/>*/}
            <Icon src={data.sprites?.versions["generation-viii"].icons.front_default} alt={data.name}/>
            <Name>{data.name}</Name>
        </ListItem>
    )
}

export default Item;
