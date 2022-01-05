import React from 'react';
import SearchBar from '../../Common/SearchBar';
import './index.scss';

const NoteSearch: React.VFC = () => {
    const search = (input: string) => {

    }

    return (
        <form className='note-search-bar' noValidate={true}>
            <SearchBar search={search} />
        </form>
    )
}

export default NoteSearch;