import React, { useState } from 'react';
import NoteSearch from './NoteSearch';
import Logo from './Logo';
import IconButton from '../Common/IconButton';
import OptionsDrowdown from './OptionsDropdown';
import { faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../hooks';
import { logoutUser } from '../../actions/User';
import { setNewModalNote } from '../../actions/NoteModal';
import './index.scss';

const Header: React.VFC = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const dispatch = useAppDispatch();
    
    const toggleOptionsMenu = () => {
        setOptionsVisible(!optionsVisible);
    }

    const onLogoutButtonClicked = () => {
        dispatch(logoutUser());
    }

    const onAddNoteButtonClicked = () => {
        dispatch(setNewModalNote());
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
                onClick={onAddNoteButtonClicked}
                focusable
            />
            <h1 className='text-center header__title'>Notes</h1>
            <NoteSearch />
            <div className='header__options-wrapper'>
                <IconButton
                    className='header__options-button'
                    icon={faCog}
                    type='button'
                    aria-label={`${optionsVisible ? 'Hide' : 'Show'} Options Menu`}
                    title={`${optionsVisible ? 'Hide' : 'Show'} Options`}
                    onClick={toggleOptionsMenu}
                    focusable
                />
                {
                    optionsVisible &&
                    <OptionsDrowdown hideAction={() => setOptionsVisible(false)}/>
                }
            </div>
            
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