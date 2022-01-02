import React, { useState } from 'react';
import './index.scss';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

    return (
        <form id='login-form' method='POST'>
            <div className='login-form__row'>
                <input
                    id='username'
                    name='username'
                    className='login-form__input'
                    type='text'
                    aria-required={true}
                    placeholder='Username'
                    value={username}
                    onChange={onInputChanged}
                />
            </div>
            <div className='login-form__row'>
                <input
                    id='password'
                    name='password'
                    className='login-form__input'
                    type='password'
                    aria-required={true}
                    autoComplete='on'
                    placeholder='Password'
                    value={password}
                    onChange={onInputChanged}
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