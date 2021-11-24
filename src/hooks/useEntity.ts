import { EntityType } from "../data/type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import { requestGetEntity } from "../store/actions/entityActions";

function useEntity(entity: EntityType, name: string) {
    const loading = useSelector((state: RootState) => state.entity[entity].loading[name])
    const value = useSelector((state: RootState) => state.entity[entity].items[name]);
    const dispatch = useDispatch()

    const getEntityData = () => {
        dispatch(requestGetEntity(entity, name))
    }

    return { value, loading, getEntityData}
}

export default useEntity;