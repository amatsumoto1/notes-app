import React, { useState } from 'react';
import ValidatedInput from '../../Common/ValidatedInput';
import './index.scss';

const RegisterForm: React.VFC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

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

    return (
        <form id='register-form' method='POST'>
            <div className='register-form__row'>
                <ValidatedInput
                    name='username'
                    type='text'
                    required={true}
                    placeholder='Username'
                    value={username}
                    onChange={onInputChanged}
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