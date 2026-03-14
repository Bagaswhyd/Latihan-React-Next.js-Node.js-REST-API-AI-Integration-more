const author = {
    firstName: "Joanne",
    lastName: "Rowling",
    description: "British author and philanthropist",
    books: [
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
    ],
};

// Don't change the Component name "App"
function App() {
    return (
        <div>
            // TODO: Display information about author using JavaScript variables and JSX syntax
            {/* Display author full name */}
            <h2>{author.firstName} {author.lastName}</h2>

            {/* Display author description */}
            <p>{author.description}</p>

            {/* Display list of books */}
            <ul>
                <li>{author.books[0]}</li>
                <li>{author.books[1]}</li>
                <li>{author.books[2]}</li>
            </ul>

            {/* Display button with author's first name */}
            <button>Buy {author.firstName}'s books</button>

        </div>
    );
}

export default App;