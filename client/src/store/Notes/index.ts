import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface NoteModel {
    id: number;
    title?: string;
    description?: string;
    color?: string;
    favorite?: boolean;
}

export interface NotesState {
    notes: {[id: number] : NoteModel }
}

const initialState: NotesState = {
    notes: {
        1 : {
            id: 1,
            title: 'testTitle',
            description: 'test description',
            color: 'red',
            favorite: true
        }
    }
}

const noteSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        setNotes: (state: NotesState, action: PayloadAction<{[id: number] : NoteModel}>) => {
            state.notes = action.payload;
        }
    }
});

export const getNotes = (state: RootState) => state.notes.notes;

export default noteSlice.reducer;