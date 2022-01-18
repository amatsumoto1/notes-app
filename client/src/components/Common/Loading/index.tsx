import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';
import { useAppSelector } from '../../../hooks';
import { getIsLoading } from '../../../store/Loading';

const node = document.getElementById('modal-root') as HTMLElement
    || document.createElement('div');

const Loading: React.VFC = () => {
    const loading = useAppSelector(getIsLoading);

    return loading ? createPortal(
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
    ) : null;
}

export default Loading;