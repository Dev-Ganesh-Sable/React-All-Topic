import React, { useEffect, useState } from 'react'

function UseEffect() {

    // use state and use effect
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("use effect hook run");
    }, []);

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    )
}

export default UseEffect