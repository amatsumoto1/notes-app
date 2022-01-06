import React, { useState } from 'react';
import './index.scss';

type Props = {
    defaultTitle?: string,
    defaultContent?: string,
    defaultColor?: string,
    id?: number
}

const NoteForm: React.VFC<Props> = ({
        defaultTitle,
        defaultContent,
        defaultColor
    }: Props) => {
    const [title, setTitle] = useState(defaultTitle);
    const [content, setContent] = useState(defaultContent);
    const [color, setColor] = useState(defaultColor)
    
    const onTitleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onContentChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value);
    }

    return (
        <div className='note-form'>
            <input
                className='note-form__title'
                name='title'
                type='text'
                placeholder='Title'
                value={title}
                onChange={onTitleChange}
            />
            <textarea
                className='note-form__content'
                name='content'
                placeholder='Content'
                value={content}
                onChange={onContentChange}
            />
        </div>
    );
}

export default NoteForm;