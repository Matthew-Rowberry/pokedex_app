import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Display = () => {
    let slug  = useParams();
    const [itemData, updateItem] = useState([])

    useEffect(() => {
        const fillItemInfo = async () => {
            let itemInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${slug.name}`)
            updateItem(itemInfo.data)
        }

        fillItemInfo()
    }, [slug.name])


    return <img src={itemData.sprites?.other['official-artwork'].front_default} alt={itemData.name} />
}

export default Display;