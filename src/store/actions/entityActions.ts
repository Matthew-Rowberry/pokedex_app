import {EntityType} from "../../data/type";
import {getEntity} from "../../data/api";

export enum EntityActions {
    GETENTITY = 'species/getEntity',
    SETENTITY = 'species/setEntity',
    SETERROR = 'species/setError',
}

export const loadEntity = (entity: EntityType) => ({
    type: EntityActions.GETENTITY,
    payload: {
        entity
    }
})

export const setEntity = (entity: EntityType, name: string, res: {}) => ({
    type: EntityActions.SETENTITY,
    payload: {
        entity,
        name,
        data: res
    }
})

export const setError = () => ({
    type: EntityActions.SETERROR
})

export const requestGetEntity = (entity: EntityType, name: string) => {
    return async (dispatch: any) => {
        dispatch(loadEntity(entity))
        try {
            const res = await getEntity(entity, name)
            dispatch(setEntity(entity, name, res))
        } catch {
            dispatch(setError());
        }
    }
}