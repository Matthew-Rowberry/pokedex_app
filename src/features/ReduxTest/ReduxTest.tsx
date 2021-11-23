import React, {useState} from "react";
import useCounter from "../../hooks/useIncrement";

const ReduxTest: React.FC = () => {
    const counter = useCounter()

    return (
        <div>
            <p>{counter.value}</p>

            <div>
                <button onClick={counter.increment}>Increment</button>
                <button onClick={counter.decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default ReduxTest;