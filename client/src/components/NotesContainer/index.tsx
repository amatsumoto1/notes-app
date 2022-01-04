import React from 'react';
import NoteSearch from './NoteSearch';
import NoteTable from './NoteTable';
import './index.scss';

const NoteContainer: React.VFC = () => {
    return (
        <div className='notes-container'>
            <NoteSearch />
            <NoteTable />
        </div>
    );
}

export default NoteContainer;