import React from 'react';
import IconButton from '../../Common/IconButton';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

type Props = {
    id: number,
    title?: string,
    content?: string,
    color?: string,
    favorite?: boolean,
    startEdit: (id: number) => void,
    remove: (id: number) => void
}

const Note: React.VFC<Props> = ({
        id,
        title,
        content,
        color = 'white',
        favorite,
        startEdit,
        remove 
    } : Props) => {

    const onEditButtonClicked = () => {
        startEdit(id);
    }

    const onDeleteButtonClicked = () => {
        remove(id);
    }

    return (
        <div className={`dark-shadow note ${color}`}>
            <h2 className='text-center note__title'>
                {title}
            </h2>
            <pre className='note__content'>
                {content}
            </pre>
            <div className='note__button-row'>
                <IconButton
                    icon={faTrash}
                    type='button'
                    aria-label='Delete'
                    title='Delete'
                    focusable
                    onClick={onDeleteButtonClicked}
                />
                <IconButton
                    icon={faEdit}
                    type='button'
                    aria-label='Edit'
                    title='Edit'
                    focusable
                    onClick={onEditButtonClicked}
                />
            </div>
        </div>
    );
}

export default Note;