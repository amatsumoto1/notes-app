import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getState } from '../sessionStorage';

const storageKey = 'user-state';

export interface UserState {
    username?: string,
    token?: string
}

const initialState: UserState = 
    getState(storageKey) || {
    username: '',
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<UserState>) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        logout: (state: UserState, action: PayloadAction) => {
            state.username = '';
            state.token = '';
        }
    }
});

export const isLoggedIn = (state: RootState) => !!state.user.token;

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;