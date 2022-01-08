import { AppThunk } from '../../store';
import { setLoginModalContents } from '../LoginModal';
import { LoginModalContents, setServerError, clearServerError } from '../../store/LoginModal';
import { login, logout } from '../../store/User';
import { client } from '../../config/client';
import { saveState, clearState } from '../../store/sessionStorage';

export const loginUser =  (username: string, password: string): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(clearServerError);
        try {
            const res = await client.post('/user/login', {
                username: username,
                password: password
            });
            if (res.status === 200) {
                const { username, token } = res.data;
                const userInfo = {
                    username: username,
                    token: token
                };

                saveState(userInfo, 'user-state');
                dispatch(login(userInfo));
            }
            else {
                dispatch(setServerError('Login failed for username and password'));
            }
        }
        catch (err) {
            dispatch(setServerError('Login failed for username and password'));
        }
    }
}

export const logoutUser = () : AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await client.get('/user/logout');
            if (res.status === 200) {
                clearState('user-state');
                dispatch(logout());
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const registerUser = (username: string, password: string): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setLoginModalContents(LoginModalContents.LoginForm));
    }
}