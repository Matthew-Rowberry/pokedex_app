import {EntityType} from "../data/type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import { requestGetEntity } from "../store/actions/entityActions";

const useEntity = (entity: EntityType, name: string) => {
    const value = useSelector((state: RootState) => state.entity)
    const dispatch = useDispatch()

    const getEntityData = () => {
        dispatch(requestGetEntity(entity, name))
    }

    return { value, getEntityData}
}

export default useEntity;