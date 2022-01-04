import React from 'react';
import { LoginModalContents } from '../../../store/LoginModal';
import './index.scss';

type Props = {
    contents: LoginModalContents,
    onClick: () => void;
}

const LoginModalSwitch: React.VFC<Props> = ({ contents, onClick }: Props) => {
    const buttonText = contents === LoginModalContents.LoginForm ?
        'New? Create an account' :
        'Already have an account? Log in'; 

    return (
        <div className='login-modal-switch'>
            <hr />
            <button type='button' className='login-modal-switch__button' onClick={onClick}>
                    { buttonText }
            </button>
        </div>
    );
}

export default LoginModalSwitch;