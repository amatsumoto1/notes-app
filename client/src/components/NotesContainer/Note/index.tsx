import React from 'react';
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
        <div className={`note ${color}`}>
            <h2 className='note__title'>
                {title}
            </h2>
            <div className='note__description'>
                {description}
            </div>
        </div>
    );
}

export default Note;