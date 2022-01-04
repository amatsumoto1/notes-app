import { AppThunk } from '../../store';
import { setVisible, setContents, LoginModalContents } from '../../store/LoginModal';

export const setLoginModalVisible = (visible: boolean): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setVisible(visible));
    }
}

export const setLoginModalContents = (contents: LoginModalContents): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setContents(contents));
    }
}