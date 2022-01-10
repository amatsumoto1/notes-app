import React, { useEffect } from 'react';

function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, callback: () => void) {
    
    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    });
}

export default useClickOutside;