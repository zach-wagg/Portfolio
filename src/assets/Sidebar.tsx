import React, { useState, useEffect } from 'react';

// Sidebar
export default function Sidebar() {
    const [isVisible, setIsVisible] = useState(false);

    // Global keyboard listener
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check for Ctrl + E (or Cmd + Shift + E on Mac)
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'e') {
                event.preventDefault(); // Prevents default browser actions (Opens URL Bar)
                setIsVisible((prev) => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Return null if completely hidden so it doesn't take up layout space
    if (!isVisible) return null;

    return (
        
        <div id={`sidebar ${isVisible ? 'visible' : ''}`}>
            <h1>Sidebar Content</h1>
        </div>
    )
}