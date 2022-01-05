import React from 'react';
import './index.scss';
import { useAppDispatch } from '../../hooks';
import { logoutUser } from '../../actions/User';

const Header: React.VFC = () => {
    const dispatch = useAppDispatch();
    
    const onLogoutButtonClicked = () => {
        dispatch(logoutUser());
    }

    return (
        <header className='header'>
            <h1 className='text-center header__title'>Notes</h1>
            <button type='button' className='header__logout-button' onClick={onLogoutButtonClicked}>
                Logout
            </button>
        </header>
    );
}

export default Header;