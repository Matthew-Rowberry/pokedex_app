import {useDispatch, useSelector} from "react-redux";
import { increment as incrementAction, decrement as decrementAction } from "../store/actions/counterActions";
import {RootState} from "../store/store";

const useCounter = () => {
    const value = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(incrementAction())
    }

    const decrement = () => {
        dispatch(decrementAction())
    }

    return { value, increment, decrement }
}

export default useCounter;

