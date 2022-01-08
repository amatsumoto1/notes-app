import React, { useEffect } from 'react';
import Modal from '../Common/Modal';
import NoteForm from './NoteForm';
import { NoteModel } from '../../store/Notes';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getNoteModalNote, getNoteModalVisibility, getIsNoteModalNoteNew } from '../../store/NoteModal';
import { clearNoteModalNote, setNoteModalVisible, updateNoteModalNote } from '../../actions/NoteModal';
import { updateNote, addNote } from '../../actions/Note';
import './index.scss';


const NoteModal: React.VFC = () => {
    const note = useAppSelector(getNoteModalNote);
    const visible = useAppSelector(getNoteModalVisibility);
    const isNew = useAppSelector(getIsNoteModalNoteNew);
    const dispatch = useAppDispatch();

    const onCloseButtonClicked = () => {
        dispatch(setNoteModalVisible(false));
    }

    const updateNoteContents = (title?: string, content?: string) => {
        if (!note) {
            return;
        }

        const updatedNote: NoteModel = {
            ...note,
            title: title,
            content: content
        }

        dispatch(updateNoteModalNote(updatedNote));
    }

    useEffect(() => {
        if (!visible && note) {
            if (!isNew) {
                dispatch(updateNote(note));
            }
            else {
                dispatch(addNote(note));
            }
        }
    }, [visible, isNew, note, dispatch]);

    useEffect(() => {
        if (!visible) {
            dispatch(clearNoteModalNote()); 
        }
    }, [visible, dispatch]);

    return (
        <Modal className='note-modal' visible={visible}>
            <NoteForm
                defaultTitle={note?.title}
                defaultContent={note?.content}
                onUpdate={updateNoteContents}
            />
            <div className='note-modal__button-row'>
                <button
                    className='note-modal__close-button'
                    title='Close'
                    aria-label='Close'
                    onClick={onCloseButtonClicked}
                >
                    Close
                </button>
            </div>
        </Modal>
    );
}

export default NoteModal;