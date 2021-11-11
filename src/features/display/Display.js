import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usePokemon} from "../../hooks/useListProvider";

const Display = () => {
    let params  = useParams();
    const { loading, data, fetch } = usePokemon(params.name);

    useEffect(() => {
        if(!data && !loading) fetch()
    }, [])

    // return <img src={itemData.sprites?.default} alt={itemData.name} />
    if(loading || !data) return <h1>Loading Display</h1>
    return <img src={data.sprites?.other['official-artwork'].front_default} alt={data.name} />
}

export default Display;