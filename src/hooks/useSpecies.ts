import {EntityType} from "../data/type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {requestGetSpecies} from "../store/actions/speciesActions";

const useSpecies = (entity: EntityType, name: string) => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.species[name])

    const getNewSpecies = () => {
        dispatch(requestGetSpecies(name))
    }
    return { value, getNewSpecies}
}

export default useSpecies;