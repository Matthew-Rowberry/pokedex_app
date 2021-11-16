import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";

import Display from "../display/Display";
import List from "../list/List";
import  { FavouritesProvider } from "../../providers/favouritesProvider";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  overflow: scroll;
`;

const ScrollingDex = styled.div`
  height: 100%;
  overflow: scroll;
  padding: 15px;
  box-sizing: border-box;
`;

const DexContainer = () => {
    return (
        <FavouritesProvider>
            <Container>
                <Routes>
                    <Route exact path='/:category/:name' element={
                        <Display />
                    }/>
                    <Route exact path='/:category' element={
                        <ScrollingDex>
                            <List />
                        </ScrollingDex>
                    }/>

                    <Route exact path="/" element= {
                        <Navigate to="/pokemon" />
                    }/>
                </Routes>
            </Container>
        </FavouritesProvider>
    )
}

export default DexContainer;