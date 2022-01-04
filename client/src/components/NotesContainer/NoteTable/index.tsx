import React from 'react';
import Note from '../Note';
import { useAppSelector } from '../../../hooks';
import { getNotes } from '../../../store/Notes';
import './index.scss';

const NoteTable: React.VFC = () => {
    const notes = useAppSelector(getNotes);

    return (
        <div className='note-table'>
            {
               Object.keys(notes).map(id =>
                    <Note key={id} {...notes[Number(id)] }/>
                )
            }
        </div>
    );
}

export default NoteTable;