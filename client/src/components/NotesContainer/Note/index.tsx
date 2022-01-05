import React from 'react';
import IconButton from '../../Common/IconButton';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

type Props = {
    id: number,
    title?: string,
    description?: string,
    color?: string,
    favorite?: boolean
}

const Note: React.VFC<Props> = ({ id, title, description, color, favorite } : Props) => {
    return (
        <div className={`dark-shadow ${color} note`}>
            <h2 className='text-center note__title'>
                {title}
            </h2>
            <div className='note__description'>
                {description}
            </div>
            <div className='note__button-row'>
                <IconButton icon={faTrash} type='button' title='Delete' focusable/>
            </div>
        </div>
    );
}

export default Note;