import {EntityType, Status} from "../../data/type";
import { EntityActions } from "../actions/entityActions";

interface IGetEntity {
    type: EntityActions.GETENTITY,
    payload: {
        entity: EntityType,
    }
}

interface ISetEntity {
    type: EntityActions.SETENTITY,
    payload: {
        entity: EntityType,
        name: string,
        data: {}
    }
}

export interface ISetError {
    type: EntityActions.SETERROR,
    payload: {
        entity: EntityType,
    }
}

type Action = IGetEntity | ISetEntity | ISetError;

function entityReducer(state = { pokemon: {}, item: {}}, action: Action) {
    switch (action.type) {
        case EntityActions.GETENTITY:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    status: Status.FETCHING
                }
            }
        case EntityActions.SETENTITY:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    status: Status.SUCCESS,
                    [action.payload.name]: action.payload.data
                }
            }
        case EntityActions.SETERROR:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    status: Status.ERROR
                }
            };
        default:
            return state
    }
}

export default entityReducer;