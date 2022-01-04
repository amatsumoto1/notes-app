import React from 'react';
import Modal from '../Common/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoginModalSwitch from './LoginModalSwitch';
import { LoginModalContents, getLoginModalVisibility, getLoginModalContents } from '../../store/LoginModal';
import { setLoginModalContents } from '../../actions/LoginModal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './index.scss';

const LoginModal: React.VFC = () => {
    const visible = useAppSelector(getLoginModalVisibility);
    const contents = useAppSelector(getLoginModalContents);
    const dispatch = useAppDispatch();

    const modalForm = contents === LoginModalContents.LoginForm ? <LoginForm /> : <RegisterForm />;

    const toggleContents = () => {
        const newContents = contents === LoginModalContents.LoginForm ? LoginModalContents.RegisterForm : LoginModalContents.LoginForm;
        dispatch(setLoginModalContents(newContents));
    }

    return (
        <Modal visible={visible} className='login-modal'>
            <h2>Welcome to My Notes App:</h2>
            { modalForm }
            <LoginModalSwitch contents={contents} onClick={toggleContents} />
        </Modal>
    )
}

export default LoginModal;