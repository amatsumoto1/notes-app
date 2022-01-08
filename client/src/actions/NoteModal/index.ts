import { AppThunk } from '../../store';
import { setVisible, setNote, clearNote, updateNote, setIsNew } from '../../store/NoteModal';
import { NoteModel } from '../../store/Notes';

let nextId = 2; // Temporary, remove when backend integrated.


export const setNoteModalVisible = (visible: boolean): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setVisible(visible));
    }
}

export const setNoteModalNote = (noteId: number): AppThunk => {
    return (dispatch, getState) => {
        const state = getState();
        const note = state.notes.notes[noteId];
        dispatch(setIsNew(false));
        dispatch(setNote(note));
        dispatch(setNoteModalVisible(true));
    }
}

export const setNewModalNote = (): AppThunk => {
    return (dispatch, getState) => {
        const note: NoteModel = {
            id: nextId++,
        }

        dispatch(setIsNew(true));
        dispatch(setNote(note));
        dispatch(setNoteModalVisible(true));
    }
}

export const updateNoteModalNote = (note: NoteModel): AppThunk => {
    return (dispatch, getState) => {
        dispatch(updateNote(note));
    }
}

export const clearNoteModalNote = (): AppThunk => {
    return (dispatch, getState) => {
        dispatch(clearNote());
    }
}