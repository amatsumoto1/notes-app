import React, { useState, useRef } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import './index.scss';

const COLORS = [
    'white',
    'green',
    'yellow',
    'orange',
    'red',
    'blue',
    'black',
    'purple'
];

type Props = {
    defaultColor?: string
    selectColor: (color?: string) => void;
    onClickOutside: () => void;
}

const ColorPicker: React.VFC<Props> = ({ defaultColor, selectColor, onClickOutside }: Props) => {
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    const ref = useRef<HTMLUListElement>(null);

    
    const getColorButtonClass = (color: string) => {
        let className = `color-picker__button ${color}`;
        if (color === selectedColor) {
            className += ' color-picker__button--active';
        }
        return className;
    }

    const onColorClicked = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        setSelectedColor(e.currentTarget.name);
        selectColor(e.currentTarget.name);
    }

    useClickOutside(ref, onClickOutside);

    return (
        <ul className='color-picker' ref={ref}>
            {
                COLORS.map(color => 
                    <li className='color-picker__color-wrapper' key={color}>
                        <button
                            type='button'
                            name={color}
                            className={getColorButtonClass(color)}
                            aria-label={`Change Color to ${color}`}
                            onClick={onColorClicked}
                        /> 
                    </li>
                )
            }
        </ul>
    )
}

ColorPicker.defaultProps = {
    defaultColor: 'white'
};

export default ColorPicker;