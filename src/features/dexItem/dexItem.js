import styled from "styled-components";
import data from '../../data/api'

const Item = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: floralwhite;
`;

const DexItem = () => {
    return data.results.map((dexItem) => {
        return (
            <Item>
                <h1>{dexItem.name}</h1>
            </Item>
        )
    })
}

export default DexItem;
