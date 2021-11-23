import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

interface ICounterStore {
    value: number
}

interface IIncrement {
    type: 'counter/incremented'
}

interface IDecrement {
    type: 'counter/decremented'
}

type Action = IIncrement | IDecrement;


function intReducer(state: ICounterStore = { value: 0 }, action: Action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

export const store = createStore(intReducer, composeWithDevTools(
    applyMiddleware(),
));
