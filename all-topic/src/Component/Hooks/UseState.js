
import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={() => setCount(count + 1)}>increment Count</button>
            <button onClick={() => setCount(count - 1)}>decrement Count</button>

        </div>
    )
}

export default UseState