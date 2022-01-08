import React from 'react';
import Note from '../Note';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { getNotes } from '../../../store/Notes';
import { removeNote } from '../../../actions/Note';
import { setNoteModalNote } from '../../../actions/NoteModal';
import './index.scss';

const NoteTable: React.VFC = () => {
    const notes = useAppSelector(getNotes);
    const dispatch = useAppDispatch();

    const startEdit = (id: number) => {
        dispatch(setNoteModalNote(id));
    }

    const remove = (id: number) => {
        dispatch(removeNote(id));
    }

    return (
        <div className='note-table'>
            {
               Object.keys(notes).map(id =>
                    <Note 
                        key={id} 
                        { ...notes[Number(id)] }
                        remove={remove}
                        startEdit={startEdit}
                    />
                )
            }
        </div>
    );
}

export default NoteTable;