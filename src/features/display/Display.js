import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
// import axios from "axios";

const Display = () => {
    let slug  = useParams();
    const [itemData, updateItem] = useState([])

    useEffect(() => {
        const fillItemInfo = async () => {
            const itemInfo = await fetch(`https://pokeapi.co/api/v2/${slug.category}/${slug.name}`)
            updateItem(await itemInfo.json())
        }

        fillItemInfo()
    }, [slug.name])

    // return <img src={itemData.sprites?.default} alt={itemData.name} />
    return <img src={itemData.sprites?.other['official-artwork'].front_default} alt={itemData.name} />
}

export default Display;