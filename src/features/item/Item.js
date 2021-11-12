import styled from "styled-components";
import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useBaseItem} from "../../hooks/useListProvider";

const ListItemContainer = styled(NavLink)`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
`;

const ListItemHolder = styled.div`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
`;

const Inset = styled.div`
  position: absolute;
  inset: 0;
`;

const ListItem = styled.div`
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0 10px 20px 2px;
  border: 1px solid black;
  padding: 1rem;
  position: absolute;
  inset: 0;
;
`;

const Name = styled.p`
  width: fit-content;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -0%);
  z-index: 3;
  transition: filter 0.2s ease 0s;
  pointer-events: none;
  text-transform: capitalize;
  font-size: 1.4rem;
`

const Icon = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: filter 0.2s ease 0s;
  pointer-events: none;
`;

const PkmnNumber = styled.p`
  width: fit-content;
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 1;
  transition: filter 0.2s ease 0s;
  pointer-events: none;
  font-size: 18px;
  
`

const Item = (props) => {
    const params = useParams();
    const { loading, data, fetch } = useBaseItem(params.category, props.itemName);

    useEffect(() => {
        if(!data) fetch()
    }, [])

    if(!data || loading) {
        return (
            <ListItemHolder>
                <Inset>
                    <ListItem>
                        <p>Loading</p>
                    </ListItem>
                </Inset>
            </ListItemHolder>
        );
    }

    return (
        <ListItemContainer key={data.id} to={`/${[params.category]}/${data.name}`}>
            <Inset>
                <ListItem>
                    <Name>{data.name}</Name>
                    {/*<Icon src={data.sprites?.default} alt={data.name}/>*/}
                    <Icon src={data.sprites?.versions["generation-viii"].icons.front_default} alt={data.name}/>
                    <PkmnNumber>#{data.id}</PkmnNumber>
                </ListItem>
            </Inset>
        </ListItemContainer>
    )
}

export default Item;
