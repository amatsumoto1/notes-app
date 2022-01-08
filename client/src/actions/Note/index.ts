import { AppThunk } from '../../store';
import { NoteModel, setAll, add, update, remove } from '../../store/Notes';
import { client } from '../../config/client';

export const loadNotes = (): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await client.get('/notes');
            if (res.status === 200) {
                const noteList = res.data.notes as NoteModel[];
                const noteState: {[id: number]: NoteModel} = {};

                for (const note of noteList) {
                    noteState[note.id] = note;
                }

                dispatch(setAll(noteState));
            }
        }
        catch (err) {
            console.log(err);
        }    
    }
}

export const addNote = (note: NoteModel): AppThunk => {
    return async (dispatch, getState) => {
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
    return async (dispatch, getState) => {
        try {
            const res = await client.delete(`/notes/${id}`);
            if (res.status === 204) {
                dispatch(remove(id));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}