import styled from "styled-components";
import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";

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
    let params = useParams();
    const [item, updateItem] = useState({});

    useEffect(() => {
        const fillItemData = async () => {
            const itemData = await fetch(props.itemUrl);
            updateItem(await itemData.json());
        }

        fillItemData()
    }, [props.itemUrl, params.category])

    return (
        <ListItem key={item.id} to={`/${[params.category]}/${item.name}`}>
            <p>#{item.id}</p>
            {/*<Icon src={item.sprites?.default} alt={item.name}/>*/}
            <Icon src={item.sprites?.versions["generation-viii"].icons.front_default} alt={item.name}/>
            <Name>{item.name}</Name>
        </ListItem>
    )
}

export default Item;
