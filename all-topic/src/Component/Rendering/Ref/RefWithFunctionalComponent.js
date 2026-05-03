
import React, { useRef } from 'react'

function RefWithFunctionalComponent() {

    let inputRef = useRef(null);

    function inputClick() {
        // console.log("click work");

        // get current value 
        // inputRef.current.value = "ganesh";
        // inputRef.current.value

        // focus on input
        inputRef.current.focus();

        // change the style 
        inputRef.current.style.color = "red";
        inputRef.current.style.backgroundColor = "black"


    }

    return (
        <div>
            <h4>Ref With Functional Component</h4>
            <input type='text' ref={inputRef} />
            <button onClick={inputClick}>Click Ref</button>
        </div>
    )
}

export default RefWithFunctionalComponent