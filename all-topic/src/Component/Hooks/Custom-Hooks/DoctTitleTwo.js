import React from 'react'
import { useState } from 'react';
import useCustomHook from './useCustomHook';

function DoctTitleTwo() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count : ${count}`
    // });

    // use custom hook

    useCustomHook(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>CounterTwo</button>
        </div>
    )
}

export default DoctTitleTwo