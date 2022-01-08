import React, { useState } from 'react';
import AutoResizeTextArea from '../../Common/AutoResizeTextArea';
import './index.scss';

type Props = {
    defaultTitle?: string,
    defaultContent?: string,
    onUpdate: (title?: string, contents?: string) => void
}

const NoteForm: React.VFC<Props> = ({
        defaultTitle,
        defaultContent,
        onUpdate
    }: Props) => {
    const [title, setTitle] = useState(defaultTitle);
    const [content, setContent] = useState(defaultContent);
    
    const onTitleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onContentChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value);
    }

    const onInputBlur = () => {
        onUpdate(title, content);
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
                onBlur={onInputBlur}
            />
            <AutoResizeTextArea
                className='note-form__content'
                name='content'
                placeholder='Content'
                value={content}
                onChange={onContentChange}
                onBlur={onInputBlur}
            />
        </div>
    );
}

export default NoteForm;