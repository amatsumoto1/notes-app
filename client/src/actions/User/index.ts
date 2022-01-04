import { AppThunk } from '../../store';
import { setLoginModalVisible, setLoginModalContents } from '../LoginModal';
import { LoginModalContents } from '../../store/LoginModal';

export const loginUser =  (username: string, password: string): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setLoginModalVisible(false));
    }
}

export const logoutUser = () : AppThunk => {
    return (dispatch, getState) => {
        dispatch(setLoginModalVisible(true));
    }
}

export const registerUser = (username: string, password: string): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setLoginModalContents(LoginModalContents.LoginForm));
    }
}