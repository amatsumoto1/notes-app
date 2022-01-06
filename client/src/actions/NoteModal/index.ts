import { AppThunk } from '../../store';
import { setVisible, setNote, clearNote } from '../../store/NoteModal';

export const setNoteModalVisible = (visible: boolean): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setVisible(visible));
    }
}

export const setNoteModalNote = (noteId: number): AppThunk => {
    return (dispatch, getState) => {
        const state = getState();
        const note = state.notes.notes[noteId];
        dispatch(setNote(note));
    }
}

export const clearNoteModalNote = (): AppThunk => {
    return (dispatch, getState) => {
        dispatch(clearNote());
    }
}