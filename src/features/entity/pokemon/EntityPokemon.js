import styled from "styled-components";
import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useBaseEntity} from "../../hooks/useListProvider";

const ListEntityContainer = styled(NavLink)`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
`;

const ListEntityHolder = styled.div`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
`;

const Inset = styled.div`
  position: absolute;
  inset: 0;
`;

const ListEntity = styled.div`
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

const Number = styled.p`
  width: fit-content;
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 1;
  transition: filter 0.2s ease 0s;
  pointer-events: none;
  font-size: 18px;
  
`

const Entity = (props) => {
    const params = useParams();
    const { loading, data, fetch } = useBaseEntity(params.category, props.entityName);

    useEffect(() => {
        if(!data) fetch()
    }, [])

    if(!data || loading) {
        return (
            <ListEntityHolder>
                <Inset>
                    <ListEntity>
                        <p>Loading</p>
                    </ListEntity>
                </Inset>
            </ListEntityHolder>
        );
    }

    const displayName = data.name.replace(/-/g, " ");
    const displayNumber = ('00' + data.id).slice(-3)

    return (
        <ListEntityContainer key={data.id} to={`/${[params.category]}/${data.name}`}>
            <Inset>
                <ListEntity>
                    <Name>{displayName}</Name>
                    <Icon src={data.sprites?.versions["generation-viii"].icons.front_default} alt={data.name}/>
                    <Number>#{displayNumber}</Number>
                </ListEntity>
            </Inset>
        </ListEntityContainer>
    )
}

export default Entity;
