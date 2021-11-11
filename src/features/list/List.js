import Item from "../item/Item";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const List = () => {
    let params = useParams()
    const [limit, updateLimit] = useState(20)
    const [dexList, updateList] = useState([])

    useEffect(() => {
        const fillIntList = async () => {
            let dexItems = await fetch(`https://pokeapi.co/api/v2/${params.category}?limit=${limit}&offset=0`).then(res => res.json())
            updateList(dexItems.results)
        }
        fillIntList()
    }, [limit, params.category])

    return dexList.map((dexItem, index) => {
        return (
            <Item
                itemUrl={dexList[index].url}
            />
        )
    })
}

export default List;