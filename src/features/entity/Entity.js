import styled from "styled-components";
import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useBaseEntity} from "../../hooks/useListProvider";
import Fav from '../fav/Fav'
import typeColors from "../../data/typeStrings";
import Bounce from "../Bounce/Bounce";

const ListEntityContainer = styled.div`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
  border-radius: 10px;

  background: ${props => {
    if(!props.types) return 'none'
    if(props.types.length === 1) {
      return typeColors[props.types[0]]
    } else {
      return `linear-gradient(145deg, ${typeColors[props.types[0]]}, ${typeColors[props.types[1]]})`
    }
  }}
`;

const ListEntityHolder = styled.div`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
  border-radius: 10px;
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
  top: 5%;
  left: 50%;
  transform: translate(-50%, -0%);
  z-index: 3;
  pointer-events: none;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 900;
  color: #222;
  border-radius: 4px;
  padding: 5px;
`

const Icon = styled.img`
  width: 100%;
`;

const Overlay = styled.img`
  width: 200%;
  position: absolute;
  inset: -50% 0 0 -50%;
  transform: rotate(180deg);
  z-index: 1;
  filter: blur(50px);
`;

const Number = styled.p`
  width: fit-content;
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 1;
  font-size: 18px;
  font-weight: 300;
  color: black;
  font-style: italic;
`;

const StyledBounce = styled.div`
  width: ${props => props.category !== "pokemon" ? "50%" : "100%"};
  font-size: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: filter 0.2s ease 0s;
`;

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

    if(params.category !== "pokemon") {
        return (
            <ListEntityContainer key={data.id}>
                <Inset>
                    <ListEntity>
                        <Name>{displayName}</Name>
                        <StyledBounce category={params.category}>
                            <Icon src={data.sprite} alt={data.name}/>
                        </StyledBounce>
                        <Overlay category={params.category} src={data.sprite} alt={data.name}/>
                    </ListEntity>
                </Inset>
                <Fav
                    category={params.category}
                    id={data.id}
                />
            </ListEntityContainer>
        )
    }

    const types = data.types.map((typeEntry) => typeEntry.type.name)
    return (
        <ListEntityContainer types={types}  key={data.id}>
            <NavLink to={`/${[params.category]}/${data.name}`}>
                <Inset>
                    <ListEntity>
                        <Name>{displayName}</Name>
                        <StyledBounce category={params.category}>
                            <Bounce>
                                <Icon category={params.category} src={data.sprite} alt={data.name}/>
                            </Bounce>
                        </StyledBounce>
                        <Number>#{displayNumber}</Number>
                    </ListEntity>
                </Inset>
            </NavLink>
            <Fav
                category={params.category}
                id={data.id}
            />
        </ListEntityContainer>
    )
}

export default Entity;
