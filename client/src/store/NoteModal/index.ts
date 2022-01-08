import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { NoteModel } from '../Notes';

interface NoteModalState {
    note?: NoteModel;
    isNew: boolean;
    visible: boolean;
}

const initialState: NoteModalState = {
    isNew: false,
    visible: false
}

const noteModalSlice = createSlice({
    name: 'noteModal',
    initialState: initialState,
    reducers: {
        setNote: (state: NoteModalState, action: PayloadAction<NoteModel>) => {
            state.note = action.payload;
        },
        setIsNew: (state: NoteModalState, action: PayloadAction<boolean>) => {
            state.isNew = action.payload
        },
        updateNote: (state: NoteModalState, action: PayloadAction<NoteModel>) => {
            state.note = action.payload
        },
        setVisible: (state: NoteModalState, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        clearNote: (state: NoteModalState, action: PayloadAction) => {
            state.note = undefined;
            state.isNew = false;
        }
    }
});

export const getNoteModalVisibility = (state: RootState) => state.noteModal.visible;
export const getNoteModalNote = (state: RootState) => state.noteModal.note;
export const getIsNoteModalNoteNew = (state: RootState) => state.noteModal.isNew;

export const { setNote, updateNote, setVisible, setIsNew, clearNote } = noteModalSlice.actions;
export default noteModalSlice.reducer;