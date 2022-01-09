import React from 'react';
import NoteTable from './NoteTable';
import NoteModal from '../NoteModal';
import TagModal from '../TagModal';
import './index.scss';

const NoteContainer: React.VFC = () => {
    return (
        <div className='notes-container'>
            <NoteTable />
            <NoteModal />
            <TagModal />
        </div>
    );
}

export default NoteContainer;