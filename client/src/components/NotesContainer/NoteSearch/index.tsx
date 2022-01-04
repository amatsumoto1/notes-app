import React, { useState } from 'react';
import IconButton from '../../Common/IconButton';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const NoteSearch: React.VFC = () => {
    const [searchInput, setSearchInput] = useState('');

    const onInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value);
    }

    return (
        <div className='note-search'>
            <form>
                <div className='note-search__search-bar'>
                    <input
                        className='note-search__input'
                        role='search'
                        type='text'
                        aria-label='Search'
                        autoComplete='off'
                        placeholder='Search'
                        value={searchInput}
                        onChange={onInputChange}
                    />
                    <IconButton className='note-search__search-button' type='submit' icon={faSearch} />
                </div>
            </form>
        </div>
    );
}

export default NoteSearch;