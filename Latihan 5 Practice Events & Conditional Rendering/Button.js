// Don't rename the "Button" component 
export function Button({ day, onClick }) {
    // Handle button click event and pass the 'day' into `onClick` function
    return (
        <button onClick={() => onClick(day)}>
            {day}
        </button>
    )
}