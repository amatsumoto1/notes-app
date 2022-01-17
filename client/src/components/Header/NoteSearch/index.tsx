import React from 'react';
import SearchBar from '../../Common/SearchBar';
import { useAppDispatch } from '../../../hooks';
import { loadNotes } from '../../../actions/Note';
import './index.scss';

const NoteSearch: React.VFC = () => {
    const dispatch = useAppDispatch();

    const search = (input: string) => {
        dispatch(loadNotes(input));
    }

    return (
        <form className='note-search-bar' noValidate={true}>
            <SearchBar search={search} />
        </form>
    )
}

export default NoteSearch;