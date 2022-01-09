import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal';
import NoteForm from './NoteForm';
import IconButton from '../Common/IconButton';
import ColorPicker from '../Common/ColorPicker';
import { NoteModel } from '../../store/Notes';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getNoteModalNote, getNoteModalVisibility, getIsNoteModalNoteNew } from '../../store/NoteModal';
import { clearNoteModalNote, setNoteModalVisible, updateNoteModalNote } from '../../actions/NoteModal';
import { updateNote, addNote } from '../../actions/Note';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import './index.scss';


const NoteModal: React.VFC = () => {
    const [showColorPicker, setShowColorPicker] = useState(true);
    const note = useAppSelector(getNoteModalNote);
    const visible = useAppSelector(getNoteModalVisibility);
    const isNew = useAppSelector(getIsNoteModalNoteNew);
    const dispatch = useAppDispatch();

    const onCloseButtonClicked = () => {
        dispatch(setNoteModalVisible(false));
    }

    const onColorPickerButtonSelected = () => {
        setShowColorPicker(true);
    }

    const onColorPickerSetInactive = () => {
        setShowColorPicker(false);
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

    const updateNoteColor = (color?: string) => {
        if (!note) {
            return;
        }

        const updatedNote: NoteModel = {
            ...note,
            color: color
        };

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
        <Modal className={`note-modal ${note?.color || ''}`} visible={visible}>
            <NoteForm
                defaultTitle={note?.title}
                defaultContent={note?.content}
                onUpdate={updateNoteContents}
            />
            <div className='note-modal__button-row'>
                <IconButton
                    icon={faPaintBrush}
                    className='note-modal__show-color-picker-button'
                    title='Show Color Picker'
                    aria-label='Show Color Picker'
                    onClick={onColorPickerButtonSelected}
                />
                <button
                    className='note-modal__close-button'
                    title='Close'
                    aria-label='Close'
                    onClick={onCloseButtonClicked}
                >
                    Close
                </button>
            </div>
            {
                showColorPicker &&
                <div className='note-modal__color-picker'>
                    <ColorPicker
                        defaultColor={note?.color}
                        selectColor={updateNoteColor}
                        onClickOutside={onColorPickerSetInactive}
                    />
                </div>
            }
        </Modal>
    );
}

export default NoteModal;