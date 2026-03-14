import React from 'react'
import { Button } from './Button.js'

// Don't change 'days' array
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Don't rename the "App" component 
function App() {
    // Don't change "handleClick" function
    function handleClick(day) {
        alert(`You selected ${day}`)
    }

    return (
        <>
            <h2>Day of the weeks</h2>
            <ul>
                {days.map((day) => (
                    <li key={day}>
                        {/* Display 'Button' component only for weekdays */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) ? (
                            <Button day={day} onClick={handleClick} />
                        ) : (
                            <span>{day}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App