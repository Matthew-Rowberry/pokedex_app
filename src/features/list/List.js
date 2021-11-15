import Entity from "../entity/Entity";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useListProvider } from "../../hooks/useListProvider";
import { useInView } from 'react-intersection-observer';
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

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        trackVisibility: true,
        delay: 100,
    });

    useEffect(() => {
        if(inView && !context[params.category].loadingList) context.nextPage(params.category)
    }, [inView, !context[params.category].loadingList])

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

            {/*Insert loading icon here*/}
            {/*{context[params.category].loadingList && <h1>Loading</h1>}*/}
            <span ref={ref} style={{"width":"100%", "display":"block"}} />
        </GridView>
    )
}

export default List;