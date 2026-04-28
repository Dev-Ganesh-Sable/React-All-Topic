import React from 'react'

{/* props : Props (short for “properties”) are used to pass data from one component to another in React and are immutable */ }

function Props(props) {
    return (
        <div>
            <h1>Hello MySelf {props.name} and My Age is {props.age} </h1>
        </div>
    )
}

export default Props