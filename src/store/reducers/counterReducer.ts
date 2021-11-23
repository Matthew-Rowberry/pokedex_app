import {CounterActions} from "../actions/counterActions";

interface ICounterStore {
    value: number
}

interface IIncrement {
    type: CounterActions.INCREMENT
}

interface IDecrement {
    type: CounterActions.DECREMENT
}

type Action = IIncrement | IDecrement;

function counterReducer(state: ICounterStore = { value: 0 }, action: Action): ICounterStore {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return { value: state.value + 1 }
        case CounterActions.DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default counterReducer;