import React, { useState } from 'react'

// Conditional rendering : means displaying different UI based on a condition.

// Show or hide components depending on data/state

// work flow 
// isLoggedIn → state variable
// If true → show Welcome + Logout button
// If false → show Login button
// Clicking button updates state → UI changes automatically

function ConditionalRendering() {

    // using useState
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>

            {isLoggedIn ? (
                <div>
                    <h3>Welcome User</h3>
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </div>
            ) : (
                <div>
                    <h3>Please Login</h3>
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </div>
            )}

        </div>
    )
}

export default ConditionalRendering