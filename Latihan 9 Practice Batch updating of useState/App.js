import React from 'react'

// Don't rename the "getRandomNumbers" component 
function getRandomNumbers() {
    return [
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1
    ]
}

// Don't rename the "App" component 
function App() {
    const [sum, setSum] = React.useState(0)
    const [numbers, setNumbers] = React.useState(getRandomNumbers())

    function handleSum() {
        // hitung total dengan reduce
        const total = numbers.reduce((acc, number) => acc + number, 0)
        setSum(total)
    }

    // Don't change the implementation 
    return (
        <>
            <h2>Random numbers</h2>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <h3>Sum: {sum}</h3>
            <button onClick={handleSum}>Calculate sum</button>
            <button onClick={() => setSum(0)}>Reset</button>
        </>
    )
}

export default App;