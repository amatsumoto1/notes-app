import React from 'react';
import NoteTable from './NoteTable';
import './index.scss';

const NoteContainer: React.VFC = () => {
    return (
        <div className='notes-container'>
            <NoteTable />
        </div>
    );
}

export default NoteContainer;