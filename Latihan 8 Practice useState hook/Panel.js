import React, { useState } from 'react';
import './styles.css';

// Don't rename the "Panel" component 
export function Panel({ title, children, defaultOpen }) {
    // Gunakan useState dengan nilai awal dari defaultOpen
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <section>
            <h3>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <span>{title}</span>
                    <span>{isOpen ? "▲" : "▼"}</span>
                </button>
            </h3>

            {isOpen && (
                <div>{children}</div>
            )}
        </section>
    )
}