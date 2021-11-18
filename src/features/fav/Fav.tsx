import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import styled from "styled-components";
import React, {useContext} from "react";
import {FavouritesContext} from "../../providers/FavouritesProvider";
import {EntityType} from "../../data/type";

interface IParamProps {
    category: EntityType,
    id: number
}


const FavContainer = styled.div`
  > * {
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 35px;
    height: 35px;
    z-index: 4;
    cursor: pointer;
  }
`;

export const Fav: React.FC<IParamProps> = (props) => {
    const favContext = useContext(FavouritesContext)
    console.log(props)

    return (
        <FavContainer>
            {favContext[props.category][props.id] ?
                <AiFillHeart onClick={() => {favContext.updateFavourite(props.category, props.id)}} fill={"#AB3433"}/>
                :
                <AiOutlineHeart onClick={() => {favContext.updateFavourite(props.category, props.id)}}/>
            }
        </FavContainer>
    )
}

export default Fav;