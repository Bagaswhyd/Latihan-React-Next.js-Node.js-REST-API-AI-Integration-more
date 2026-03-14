import React from 'react'
import { Panel } from './Panel.js'
import { specialities } from './specialities.js'

// Don't rename the "App" component 
function App() {
    return (
        <>
            /* Don't change the implementation */
            <h2>Specialities</h2>
            {specialities.map(({ name, description, defaultOpen }) => (
                <Panel title={name} defaultOpen={defaultOpen}>
                    {description}
                </Panel>
            ))}
        </>
    )
}

export default App;