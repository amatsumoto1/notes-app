import React, { useState, useEffect } from 'react';
import ValidatedInput from '../../Common/ValidatedInput';
import { loginUser } from '../../../actions/User';
import { clearLoginModalError } from '../../../actions/LoginModal';
import { getLoginModalServerError } from '../../../store/LoginModal';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import './index.scss';

const LoginForm = () => {
    const serverError = useAppSelector(getLoginModalServerError);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState(serverError);
    const dispatch = useAppDispatch();

    const onInputChanged = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const validateUsername = (): boolean => {
        if (!username) {
            setUsernameError('Username is required');
            return false;
        }
        return true;
    }

    const validatePassword = (): boolean => {
        if (!password) {
            setPasswordError('Password is required');
            return false;
        }
        return true;
    }

    const clearInputErrors = () => {
        dispatch(clearLoginModalError());
        setUsernameError('');
        setPasswordError('');
    }

    const onLoginSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        clearInputErrors();

        if (validateUsername() && validatePassword()) {
            dispatch(loginUser(username, password));
        }
    }

    useEffect(() => {
        if (serverError) {
            setPasswordError(serverError);
        }
    }, [serverError])

    return (
        <form id='login-form' method='POST' onSubmit={onLoginSubmit}>
            <div className='login-form__row'>
                <ValidatedInput
                    name='username'
                    type='text'
                    required={true}
                    placeholder='Username'
                    value={username}
                    onChange={onInputChanged}
                    error={usernameError}
                />
            </div>
            <div className='login-form__row'>
                <ValidatedInput
                    name='password'
                    type='password'
                    required={true}
                    placeholder='Password'
                    autoComplete='on'
                    value={password}
                    onChange={onInputChanged}
                    error={passwordError}
                />
            </div>
            <div className='login-form__row'>
                <button className='login-form__submit' type='submit' aria-label='Login'>
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginForm;