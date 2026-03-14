import React from 'react';

// Don't rename the "Card" component 
export function Card({ player }) {
    return (
        // Don't change the "article" tag implementation 
        <article>
            <h2>{player.fullName}</h2>
            <p>
                <strong>Position:</strong> {player.position}
            </p>
            <p>
                <strong>League:</strong> {player.league}
            </p>
            <h3>Career history:</h3>
            <dl>
                {/* Display the career information in the loop using React.Fragment */}
                {player.career.map((career, index) => (
                    <React.Fragment key={index}>
                        <dt>{career.period}</dt>
                        <dd>{career.team}</dd>
                    </React.Fragment>
                ))}
            </dl>
        </article>
    );
}