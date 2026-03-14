import { actors } from './actors.js'

export const styles = {
    List: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        margin: '0px',
        padding: '0px',
        listStyle: 'none',
    },
    Item: {
        padding: '8px',
        background: 'thistle',
    }
}

// Don't rename the "App" component 
function App() {
    return (
        // Don't change the structure 
        <ul style={styles.List}>
            {actors.map((actor) => (
                <li key={actor.name} style={styles.Item}>
                    <strong>{actor.name}</strong>: {actor.description}
                </li>
            ))}
        </ul>
    );
}

export default App;