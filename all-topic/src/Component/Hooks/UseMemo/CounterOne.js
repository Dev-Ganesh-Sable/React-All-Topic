import React, { useMemo, useState } from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {

        // function delay code 
        let i = 0
        while (i < 20000000) i++

        return counterOne % 2 === 0
    }, [counterOne]);

    return (
        <div>
            <button onClick={incrementOne}>Counter One : {counterOne}</button>
            <span>{isEven() ? "even" : "odd"}</span>

            <div>
                <button onClick={incrementTwo}>Counter One : {counterTwo}</button>

            </div>
        </div>

    )
}

export default Counter