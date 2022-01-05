import React from 'react';
import logo from '../../../assets/images/notes-logo.png';
import './index.scss';

const Logo: React.VFC = () => {
    return (
        <div className='logo'>
            <img
                src={logo}
                alt='Notes Logo'
                height={32}
                width={38}
            />
        </div>
    )
}

export default Logo;