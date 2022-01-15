import React, { useState } from 'react';
import IconButton from '../../Common/IconButton';
import ValidatedInput from '../../Common/ValidatedInput';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../hooks';
import { addTag } from '../../../actions/Tags';
import './index.scss';


const AddTagForm: React.VFC = () => {
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useAppDispatch();

    const onInputChanged = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value);
    }

    const onClearClicked = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setContent('');
        setErrorMessage('');
    }

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateInput()) {
            dispatch(addTag(content));
            setContent('');
        }
    }

    const validateInput = (): boolean => {
        let errorMessage = '';
        if (!content) {
            errorMessage = 'Content must not be empty';
        }

        setErrorMessage(errorMessage);

        return !errorMessage;
    }

    return (
        <form className='add-tag-form' onSubmit={onSubmit}>
            <ValidatedInput
                name='tag content'
                type='text'
                value={content}
                error={errorMessage}
                onChange={onInputChanged}
            />
            <IconButton
                type='reset'
                className='add-tag-form__button add-tag-form__clear-button'
                icon={faTimes}
                name='Clear'
                aria-label='Clear'
                onClick={onClearClicked}
            />
            <IconButton
                type='submit'
                className='add-tag-form__button add-tag-form__save-button'
                icon={faCheck}
                name='Save'
                aria-label='Save'
            />
        </form>
    );
}

export default AddTagForm;