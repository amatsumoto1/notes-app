import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { NoteModel } from '../Notes';

interface NoteModalState {
    note?: NoteModel;
    visible: boolean
}

const initialState: NoteModalState = {
    visible: false
}

const noteModalSlice = createSlice({
    name: 'noteModal',
    initialState: initialState,
    reducers: {
        setNote: (state: NoteModalState, action: PayloadAction<NoteModel>) => {
            state.note = action.payload;
        },
        setVisible: (state: NoteModalState, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        clearNote: (state: NoteModalState, action: PayloadAction) => {
            state.note = undefined;
        }
    }
});

export const getNoteModalVisibility = (state: RootState) => state.noteModal.visible;
export const getNoteModalNote = (state: RootState) => state.noteModal.note;

export const { setNote, setVisible,  clearNote } = noteModalSlice.actions;
export default noteModalSlice.reducer;