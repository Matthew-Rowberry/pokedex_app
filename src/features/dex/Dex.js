import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import DexItem from "../dexItem/dexItem";
import Display from "../display/Display";

const Container = styled.div`
  background-color: coral;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const ScrollingDex = styled.div`
  height: 100%;
  overflow: scroll;
`;

const Dex = () => {
    const [dexList, updateList] = useState([])

    useEffect(() => {
        const fillIntList = async () => {
            let dexItems = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
            updateList(dexItems.data.results)
        }
        fillIntList()
    }, [])

    return (
        <Container>
            <Routes>
                <Route exact path='/pokemon/:name' element={<Display />}/>
                <Route exact path='/' element={<p>Helo</p>}/>
            </Routes>

            <ScrollingDex>
                <Item dexList={dexList} />
            </ScrollingDex>
        </Container>
    )
}

const Item = (props) => {
    return props.dexList.map((dexItem, index) => {
        return (
            <DexItem
                itemUrl={props.dexList[index].url}
            />
        )
    })
}

export default Dex;