import Item from "../item/Item";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useListProvider } from "../../hooks/useListProvider";

const List = () => {
    let params = useParams()
    const context = useListProvider()

    useEffect(() => {
        context.nextPage(params.category)
    }, [params.category])

    return (
        <>
            {context[params.category].list.map(dexItemName => {
                return (
                    <Item
                        itemName={dexItemName}
                        key={dexItemName}
                    />
                )
            })}
            {context[params.category].loadingList && <h1>Loading</h1>}
            <button onClick={() => context.nextPage(params.category)}>Click me</button>
        </>
    )
}

export default List;