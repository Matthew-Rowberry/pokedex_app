import {EntityType, Status} from "../../data/type";
import {SpeciesActions} from "../actions/speciesActions";

export interface IGetSpecies {
    type: SpeciesActions.GETSPECIES,
    payload: {
        entity: EntityType,
    }
}

export interface ISetSpeciesData {
    type: SpeciesActions.SETSPECIESDATA,
    payload: {
        entity: EntityType,
        name: string,
        data: {}
    }
}

export interface ISetError {
    type: SpeciesActions.SETERROR,
    payload: {
        entity: EntityType,
    }
}

type Action = IGetSpecies | ISetSpeciesData | ISetError

function speciesReducer(state: any = {}, action: Action) {
    switch (action.type) {
        case SpeciesActions.GETSPECIES:
            return {
                ...state,
                status: Status.FETCHING
            }
        case SpeciesActions.SETSPECIESDATA:
            return {
                ...state,
                status: Status.SUCCESS,
                [action.payload.name]: {
                    data: action.payload.data
                }
            }
        case SpeciesActions.SETERROR:
            return {
                ...state,
                status: Status.ERROR,
            }
        default:
            return state
    }
}

export default speciesReducer;