import { AppThunk } from '../../store';
import { setVisible, setNote, clearNote, updateNote, setIsNew } from '../../store/NoteModal';
import { NoteModel } from '../../store/Notes';
import { client } from '../../config/client';

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
        dispatch(setNoteModalVisible(true));
        dispatch(setNote(note));
    }
}

export const setNewModalNote = (): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await client.post('/notes', {})
            if (res.status === 201) {
                const note = res.data.note as NoteModel;
                
                dispatch(setNoteModalVisible(true));
                dispatch(setIsNew(true));
                dispatch(setNote(note));
                
            }
        }
        catch (err) {
            console.log(err);
        }
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