import { AppThunk } from '../../store';
import { NoteModel, setAll, add, update, remove } from '../../store/Notes';


export const loadNotes = (): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setAll({}));
    }
}

export const addNote = (note: NoteModel): AppThunk => {
    return (dispatch, getState) => {
        dispatch(add(note));
    }
}

export const updateNote = (note: NoteModel): AppThunk => {
    return (dispatch, getState) => {
        dispatch(update(note));
    }
}

export const setNoteColor = (id: number, color?: string): AppThunk => {
    return (dispatch, getState) => {
        const state = getState();
        const note = state.notes.notes[id];
        note.color = color;
        dispatch(update(note));
    }
}

export const removeNote = (id: number): AppThunk => {
    return (dispatch, getState) => {
        dispatch(remove(id));
    }
}