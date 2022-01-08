import React from 'react';
import NoteTable from './NoteTable';
import NoteModal from '../NoteModal';
import './index.scss';

const NoteContainer: React.VFC = () => {
    return (
        <div className='notes-container'>
            <NoteTable />
            <NoteModal />
        </div>
    );
}

export default NoteContainer;