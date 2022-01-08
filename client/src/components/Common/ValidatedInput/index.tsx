import React from 'react';
import './index.scss';

type ValidatedInputProps = {
    name: string;
    type?: string;
    value: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
    error?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const ValidatedInput: React.FC<ValidatedInputProps> = (props: ValidatedInputProps) => {
    const {
        name,
        type,
        value,
        placeholder,
        autoComplete,
        required,
        error,
        onChange
    } = props;

    const errorSectionId = `${name}-input-id-errors`;

    return (
        <div className='validated-input-container'>
            <div className='validated-input-wrapper'>
                <input
                    id={`${name}-input-id`}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-required={required}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorSectionId: undefined }
                    onChange={onChange}
                />
            </div>
            {
                error &&
                <div className='validated-input-error' id={errorSectionId}>
                    { error }
                </div>
            }
        </div>
    )
}

export default ValidatedInput;