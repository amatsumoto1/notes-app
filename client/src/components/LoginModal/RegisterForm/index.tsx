import React, { useState, useEffect } from 'react';
import ValidatedInput from '../../Common/ValidatedInput';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getLoginModalServerError } from '../../../store/LoginModal';
import { registerUser } from '../../../actions/User';
import './index.scss';

const passwordRegex = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d\s:])/;

const RegisterForm: React.VFC = () => {
    const serverError = useAppSelector(getLoginModalServerError);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [usernameError, setUsernameError] = useState(serverError);
    const [passwordError, setPasswordError] = useState('');
    const [verifyPasswordError, setVerifyPasswordError] = useState('');
    const dispatch = useAppDispatch()

    const onInputChanged = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'verify-password':
                setVerifyPassword(value);
                break;
            default:
                break;
        }
    }

    const clearErrors = () => {
        setUsernameError('');
        setPasswordError('');
        setVerifyPasswordError('');
    }

    const validateUsername = (): boolean => {
        if (username.length < 8) {
            setUsernameError('Username must have at least 8 characters');
            return false;
        }
        return true;
    }

    const validatePassword = (): boolean => {
        if (password.length < 8) {
            setPasswordError('Password must have at least 8 characters');
            return false;
        }
        else if (!passwordRegex.test(password)) {
            setPasswordError('Password must have at least one letter, number, and symbol');
            return false;
        }
        return true;
    }

    const validateVerifyPassword = () : boolean => {
        if (verifyPassword !== password) {
            setVerifyPasswordError('Passwords must match');
            return false;
        }
        return true;
    }

    const onRegisterFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearErrors();
        if (validateUsername() && validatePassword() && validateVerifyPassword()) {
            dispatch(registerUser(username, password));
        }
    }

    useEffect(() => {
        if (serverError) {
            setUsernameError(serverError);
        }
    }, [serverError]);

    return (
        <form id='register-form' method='POST' onSubmit={onRegisterFormSubmit}>
            <div className='register-form__row'>
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
            <div className='register-form__row'>
                <ValidatedInput
                    name='password'
                    type='password'
                    required={true}
                    placeholder='Password'
                    autoComplete='off'
                    value={password}
                    onChange={onInputChanged}
                    error={passwordError}
                />
            </div>
            <div className='register-form__row'>
                <ValidatedInput
                    name='verify-password'
                    type='password'
                    required={true}
                    placeholder='Verify Password'
                    autoComplete='off'
                    value={verifyPassword}
                    onChange={onInputChanged}
                    error={verifyPasswordError}
                />
            </div>
            <div className='login-form__row'>
                <button className='register-form__submit' type='submit' aria-label='Create Account'>
                    Create Account
                </button>
            </div>
        </form>
    )
}

export default RegisterForm;