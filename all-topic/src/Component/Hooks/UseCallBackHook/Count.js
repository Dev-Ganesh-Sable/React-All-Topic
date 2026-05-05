import React from 'react'

function Count({ text, count }) {

    console.log(`Rerender ${text} `)
    return (

        <div>{text}- {count}</div>
    )
}

export default React.memo(Count);