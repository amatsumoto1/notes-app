import { AppThunk } from '../../store';
import { setContents, clearServerError, LoginModalContents } from '../../store/LoginModal';

export const setLoginModalContents = (contents: LoginModalContents): AppThunk => {
    return (dispatch, getState) => {
        dispatch(clearServerError());
        dispatch(setContents(contents));
    }
}

export const clearLoginModalError = (): AppThunk => {
    return (dispatch, getState) => {
        dispatch(clearServerError());
    }
}