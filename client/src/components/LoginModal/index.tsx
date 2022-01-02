import React, { useState } from 'react';
import Modal from '../Common/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './index.scss';

enum ModalContents {
    LoginForm,
    RegisterForm
}

const LoginModal: React.VFC = () => {
    const [contents, setContents] = useState(ModalContents.LoginForm);

    const getModalForm = () => {
        return contents === ModalContents.LoginForm ? <LoginForm /> : <RegisterForm />
    }

    const getButtonText = () => {
        return contents === ModalContents.LoginForm ?
            'New? Create an account' :
            'Already have an account? Log in'
    }

    const toggleContents = () => {
        setContents(contents === ModalContents.LoginForm ? ModalContents.RegisterForm : ModalContents.LoginForm);
    }

    return (
        <Modal show={true} className='login-modal'>
            <h2>Welcome to My Notes App:</h2>
            { getModalForm() }
            <div className='login-modal__toggle-container'>
                <button type='button' className='login-modal__toggle-button' onClick={toggleContents}>
                    { getButtonText() }
                </button>
            </div>
        </Modal>
    )
}

export default LoginModal;