import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import styled from "styled-components";
import {useContext} from "react";
import {FavouritesContext} from "../../providers/favouritesProvider";

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

export const Fav = (props) => {
    const favContext = useContext(FavouritesContext)


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