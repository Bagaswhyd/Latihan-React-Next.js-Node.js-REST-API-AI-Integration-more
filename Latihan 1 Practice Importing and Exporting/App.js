// Don't change the "styles.css" file or the import
import './styles.css';
// Import "Children" component using named import
import { Children } from './Children';

// Don't change the Component name "App"
function App() {
    return (
        <div>
            <h1>Hi, I am App component</h1>
            {/* Render "Children" component here */}
            <Children />
        </div>
    );
}

export default App;
