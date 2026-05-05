import React from 'react'

function Title() {

    console.log("title component");
    return (
        <div>
            <h2>Use Call Hook</h2>
        </div>
    )
}

export default React.memo(Title)