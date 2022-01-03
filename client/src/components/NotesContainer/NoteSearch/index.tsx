import React, { useState } from 'react';
import './index.scss';

const NoteSearch: React.VFC = () => {
    const [searchInput, setSearchInput] = useState('');

    const onInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value);
    }

    return (
        <div className='note-search'>
            <form>
                <input
                    className='note-search__input'
                    type='search'
                    aria-label='Search'
                    autoComplete='off'
                    value={searchInput}
                    onChange={onInputChange}
                />
            </form>
        </div>
    );
}

export default NoteSearch;