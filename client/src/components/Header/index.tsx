import React from 'react';
import './index.scss';

const Header: React.VFC = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Notes</h1>
            <button type='button' className='header__logout-button'>
                Logout
            </button>
        </header>
    );
}

export default Header;