import React, { useState, useCallback } from 'react';
import IconButton from '../../Common/IconButton';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

type Props = {
    id: number,
    defaultContent?: string,
    onUpdate: (id: number, content?: string) => void;
    onDelete: (id: number) => void;
}

const TagRow: React.VFC<Props> = ({
        id,
        defaultContent,
        onUpdate,
        onDelete
    }: Props) => {

    const [content, setContent] = useState(defaultContent);

    const onInputUpdated = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value);
    }

    const onInputBlurred = useCallback(() => {
        onUpdate(id, content);
    }, [onUpdate, id, content]);

    const onDeleteButtonClicked = useCallback(() => {
        onDelete(id);
    }, [onDelete, id]);

    return (
        <div className='tag-row'>
            <input
                type='text'
                className='tag-row__content'
                value={content}
                onChange={onInputUpdated}
                onBlur={onInputBlurred}
            />
            <IconButton
                className='tag-row__delete-button'
                icon={faTrash}
                type='button'
                name='Delete'
                aria-label='Delete this tag'
                onClick={onDeleteButtonClicked}
            />
        </div>
    )
}

export default TagRow;