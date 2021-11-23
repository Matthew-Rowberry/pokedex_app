import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../store/store";

const ReduxTest: React.FC = () => {
    const countState = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            {/*//@ts-ignore*/}
            <p>{countState.value}</p>

            <div>
                <button onClick={() => dispatch({ type: 'counter/incremented'})}>Increment</button>

                <button onClick={() => dispatch({ type: 'counter/decremented'})}>Decrement</button>
            </div>
        </div>
    )
}

export default ReduxTest;