import Entity from "../entity/Entity";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useListProvider } from "../../hooks/useListProvider";
import styled from "styled-components";

const GridView = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 1em;
`;

const List = () => {
    let params = useParams()
    const context = useListProvider()

    useEffect(() => {
        context.nextPage(params.category)
    }, [params.category])

    return (
        <GridView>
            {context[params.category].list.map(dexEntityName => {
                return (
                    <Entity
                        entityName={dexEntityName}
                        key={dexEntityName}
                    />
                )
            })}
            {/*{context[params.category].loadingList && <h1>Loading</h1>}*/}
            <button onClick={() => context.nextPage(params.category)}>Click me</button>
        </GridView>
    )
}

export default List;