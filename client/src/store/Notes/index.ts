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
        setAll: (state: NotesState, action: PayloadAction<{[id: number] : NoteModel}>) => {
            state.notes = action.payload;
        },
        add: (state: NotesState, action: PayloadAction<NoteModel>) => {
            state.notes[action.payload.id] = action.payload;
        },
        update: (state: NotesState, action: PayloadAction<NoteModel>) => {
            const updatedNote = action.payload;
            state.notes[updatedNote.id] = updatedNote;
        },
        remove: (state: NotesState, action: PayloadAction<number>) => {
            delete state.notes[action.payload];
        }
    }
});

export const getNotes = (state: RootState) => state.notes.notes;
export const getNoteWithId = (state: RootState, id: number) => state.notes.notes[id];

export const { setAll, add, update, remove } = noteSlice.actions;
export default noteSlice.reducer;