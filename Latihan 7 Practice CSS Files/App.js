import { marvelHeroes } from './marvelHeroes.js'
import './styles.css'

// Don't rename the "App" component 
function App() {
    return (
        /* Don't change the structure */
        <ul className="HeroesList">
            {marvelHeroes.map((marvelHero) => (
                <li key={marvelHero.name} className="HeroCard">
                    <strong>{marvelHero.name}</strong><br /><br />
                    {marvelHero.description}
                </li>
            ))}
        </ul>
    );
}

export default App;