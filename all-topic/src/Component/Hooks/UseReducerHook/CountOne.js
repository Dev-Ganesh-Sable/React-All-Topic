import React, { useReducer } from 'react'

const initialsState = 0

const reducer = (state, action) => {
    // all ways return new state

    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialsState
        default:
            return state
    }
}

function CountOne() {

    const [count, dispatch] = useReducer(reducer, initialsState)

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>

        </div>
    )
}

export default CountOne