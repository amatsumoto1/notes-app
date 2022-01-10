import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface TagModel {
    id: number,
    content?: string
}

export interface TagState {
    items: { [id: number]: TagModel }
}

const initialState: TagState = {
    items: {
        1: {
            id: 1,
            content: 'Test Content'
        },
        2: {
            id: 2,
            content: 'Test Content2'
        }
    }
}

const tagSlice = createSlice({
    name: 'tags',
    initialState: initialState,
    reducers: {
        setAll: (state: TagState, action: PayloadAction<{[id: number]: TagModel}>) => {
            state.items = action.payload;
        },
        add: (state: TagState, action: PayloadAction<TagModel>) => {
            state.items[action.payload.id] = action.payload;
        },
        update: (state: TagState, action: PayloadAction<TagModel>) => {
            state.items[action.payload.id] = action.payload;
        },
        remove: (state: TagState, action: PayloadAction<number>) => {
            delete state.items[action.payload];
        }
    }
});

export const getTags = (state: RootState) => state.tags.items;
export const getTagWithId = (state: RootState, id: number) => state.tags.items[id];

export const { setAll, add, update, remove } = tagSlice.actions;
export default tagSlice.reducer;