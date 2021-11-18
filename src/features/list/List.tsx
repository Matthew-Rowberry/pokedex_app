import Entity from "../entity/Entity";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useListProvider } from "../../hooks/useListProvider";
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";
import {EntityType} from "../../data/type";

interface IParamProps {
    category: EntityType
}

const GridView = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 1em;
`;

const List: React.FC<IParamProps> = (props) => {
    const context = useListProvider()

    const { ref, inView } = useInView({
        threshold: 0,
        trackVisibility: true,
        delay: 100,
    });

    useEffect(() => {
        if(inView && !context[props.category].loadingList) context.nextPage(props.category)
    }, [inView, !context[props.category].loadingList])

    return (
        <GridView>
            {context[props.category].list.map((dexEntityName:string) => {
                return (
                    <Entity
                        entityName={dexEntityName}
                        key={dexEntityName}
                    />
                )
            })}

            {/*Insert loading icon here*/}
            {/*{context[props.category].loadingList && <h1>Loading</h1>}*/}
            <span ref={ref} style={{"width":"100%", "display":"block"}} />
        </GridView>
    )
}

export default List;