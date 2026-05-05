import React, { useRef } from 'react'

function UseRef() {

    // use ref here
    let inputRef = useRef(null);

    function handleChange() {
        // inputRef.current.value = "ganesh"
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.style.backgroundColor = "black";
        inputRef.current.value
    }

    return (
        <div>
            <h2>Use Ref</h2>
            <input type='text' ref={inputRef} />
            <button onClick={handleChange}>Update Ref</button>
        </div>
    )
}

export default UseRef