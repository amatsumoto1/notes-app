import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export enum LoginModalContents {
    LoginForm,
    RegisterForm
}

export interface LoginModalState {
    visible: boolean;
    contents: LoginModalContents;
}

const initialState: LoginModalState = {
    visible: false,
    contents: LoginModalContents.LoginForm
};

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: initialState,
    reducers: {
        setVisible: (state: LoginModalState, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        setContents: (state: LoginModalState, action: PayloadAction<LoginModalContents>) => {
            state.contents = action.payload;
        }
    }
});

export const getLoginModalVisibility = (state: RootState) => state.loginModal.visible;
export const getLoginModalContents = (state: RootState) => state.loginModal.contents;

export const { setVisible, setContents } = loginModalSlice.actions;
export default loginModalSlice.reducer;