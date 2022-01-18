import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

const node = document.getElementById('modal-root') as HTMLElement
    || document.createElement('div');

const Loading: React.VFC = () => {
    return createPortal(
        <div className='loading'>
            <div className='loading__spinner'>
                <div className='loading__spinner-segment' />
                <div className='loading__spinner-segment' />
                <div className='loading__spinner-segment' />
                <div className='loading__spinner-segment' />
                <div className='loading__spinner-segment' />
                <div className='loading__spinner-segment' />
                <div className='loading__spinner-segment' />
                <div className='loading__spinner-segment' />
            </div>
        </div>,
        node
    );
}

export default Loading;