import React from 'react';
import NoteSearch from './NoteSearch';
import Logo from './Logo';
import IconButton from '../Common/IconButton';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../hooks';
import { logoutUser } from '../../actions/User';
import './index.scss';

const Header: React.VFC = () => {
    const dispatch = useAppDispatch();
    
    const onLogoutButtonClicked = () => {
        dispatch(logoutUser());
    }

    return (
        <header className='header'>
            <Logo />
            <hr />
            <IconButton
                className='header__add-note-button'
                icon={faPlus}
                type='button'
                aria-label='Add Note'
                title='Add Note'
                tabIndex={0}
            />
            <h1 className='text-center header__title'>Notes</h1>
            <NoteSearch />
            <button
                className='header__logout-button'
                type='button'
                aria-label='Logout'
                onClick={onLogoutButtonClicked}
                tabIndex={0}
            >
                Logout
            </button>
        </header>
    );
}

export default Header;