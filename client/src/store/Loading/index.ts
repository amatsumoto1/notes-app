import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface LoadingState {
    loading: boolean
}

const initialState: LoadingState = {
    loading: false
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        setLoading: (state: LoadingState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

export const getIsLoading = (state: RootState) => state.loading.loading;

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;