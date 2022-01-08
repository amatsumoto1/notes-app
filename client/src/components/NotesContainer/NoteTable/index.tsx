import React, { useEffect } from 'react';
import Note from '../Note';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { getNotes } from '../../../store/Notes';
import { removeNote, loadNotes } from '../../../actions/Note';
import { setNoteModalNote } from '../../../actions/NoteModal';
import { isLoggedIn } from '../../../store/User';
import './index.scss';

const NoteTable: React.VFC = () => {
    const notes = useAppSelector(getNotes);
    const loggedIn = useAppSelector(isLoggedIn)
    const dispatch = useAppDispatch();

    const startEdit = (id: number) => {
        dispatch(setNoteModalNote(id));
    }

    const remove = (id: number) => {
        dispatch(removeNote(id));
    }

    useEffect(() => {
        if (loggedIn) {
            dispatch(loadNotes())
        }
    }, [loggedIn, dispatch])

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