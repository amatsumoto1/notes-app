import React, { useState } from 'react';
import ValidatedInput from '../../Common/ValidatedInput';
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
                <ValidatedInput
                    name='username'
                    type='text'
                    required={true}
                    placeholder='Username'
                    value={username}
                    onChange={onInputChanged}
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