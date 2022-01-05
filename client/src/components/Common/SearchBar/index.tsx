import React, { useState } from 'react';
import IconButton from '../IconButton';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

type Props = {
    placeholder?: string,
    search: (searchInput: string) => void
}

const SearchBar: React.VFC<Props> = ({
        placeholder = 'Search',
        search
    }: Props) => {
    
    const [searchInput, setSearchInput] = useState('');

    const onInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value);
    }

    const handleSearchClicked = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        search(e.currentTarget.value);
    }

    const handleClearClicked = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearchInput('');
    }

    return (
        <div className='search-bar'>
            <input
                className='search-bar__input'
                role='search'
                type='text'
                aria-label='Search'
                autoComplete='off'
                placeholder={placeholder}
                value={searchInput}
                onChange={onInputChange}
            />
            <IconButton
                icon={faTimes}
                className='search-bar__clear-button'
                type='reset'
                onClick={handleClearClicked}
            />
            <IconButton
                icon={faSearch}
                className='search-bar__search-button'
                type='submit'
                onClick={handleSearchClicked}
            />
        </div>
    )
}

export default SearchBar;