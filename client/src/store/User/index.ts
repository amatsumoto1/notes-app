import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getState } from '../sessionStorage';

const storageKey = 'user-state';

export interface UserState {
    username?: string,
    token?: string,
    refreshToken?: string
}

const initialState: UserState = 
    getState(storageKey) || {
    username: '',
    token: '',
    refreshToken: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<UserState>) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.refreshToken = action.payload.token;
        },
        logout: (state: UserState, action: PayloadAction) => {
            state.username = '';
            state.token = '';
            state.refreshToken = '';
        },
        setToken: (state: UserState, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    }
});

export const isLoggedIn = (state: RootState) => !!state.user.token;

export const { login, logout, setToken } = userSlice.actions;
export default userSlice.reducer;