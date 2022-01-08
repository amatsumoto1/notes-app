import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export enum LoginModalContents {
    LoginForm,
    RegisterForm
}

export interface LoginModalState {
    contents: LoginModalContents;
    serverError?: string;
}

const initialState: LoginModalState = {
    contents: LoginModalContents.LoginForm
};

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: initialState,
    reducers: {
        setContents: (state: LoginModalState, action: PayloadAction<LoginModalContents>) => {
            state.contents = action.payload;
        },
        setServerError: (state: LoginModalState, action: PayloadAction<string>) => {
            state.serverError = action.payload;
        },
        clearServerError: (state: LoginModalState, action: PayloadAction) => {
            state.serverError = undefined;
        }
    }
});

export const getLoginModalContents = (state: RootState) => state.loginModal.contents;
export const getLoginModalServerError = (state: RootState) => state.loginModal.serverError;

export const { setContents, setServerError, clearServerError } = loginModalSlice.actions;
export default loginModalSlice.reducer;