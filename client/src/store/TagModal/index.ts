import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface TagModalState {
    visible: boolean
}

const initialState: TagModalState = {
    visible: false
}

const tagModalSlice = (createSlice({
    name: 'tagModal',
    initialState: initialState,
    reducers: {
        setVisible: (state: TagModalState, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        }
    }
}));

export const getTagModalVisibility = (state: RootState) => state.tagModal.visible;

export const { setVisible } = tagModalSlice.actions;
export default tagModalSlice.reducer;