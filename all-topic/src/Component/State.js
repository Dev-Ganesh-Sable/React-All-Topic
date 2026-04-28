import React, { useState } from 'react'

// State in React is an object (or value) that stores dynamic data inside a component and controls how the UI updates.

// State = data that can change over time and re-render the UI

// how its work  :
// count → current state value
// setCount → function to update state
// When state changes → component re-renders

function State() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(count - 1)}>Decrement Count</button>
            <button onClick={() => setCount(count + 5)}>Increment Count BY 5 </button>
            <button onClick={() => setCount(count - 5)}>Decrement Count BY 5 </button>

        </div>
    )
}

export default State