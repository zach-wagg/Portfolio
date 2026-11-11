import { useState, useEffect } from 'react';

// Sidebar
export default function Sidebar() {
    const [isVisible, setIsVisible] = useState(false);

    // Global keyboard listener
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check for Ctrl + E (or Cmd + Shift + E on Mac)
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'e') { // NOTE: Eventually will be changed to <space> to allow for "Which Key" sequences
                event.preventDefault(); // Prevents default browser actions (Opens URL Bar)
                setIsVisible((prev) => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!isVisible) return null;

    return (
        
        <div id="sidebar" className={isVisible ? 'visible' : ''}>
            <h1>Sidebar Content</h1>
        </div>
    )
}