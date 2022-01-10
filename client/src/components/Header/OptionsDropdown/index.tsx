import React, { useRef } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import { useAppDispatch } from '../../../hooks';
import { setTagModalVisibility } from '../../../actions/TagModal';
import './index.scss';


type Props = {
    hideAction: () => void;
}

const OptionsDrowdown: React.VFC<Props> = ({ hideAction }: Props) => {
    const ref = useRef<HTMLUListElement>(null);
    const dispatch = useAppDispatch();

    const onOptionClicked = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        switch (e.currentTarget.name) {
            case 'Settings':
                break;
            case 'Edit Tags':
                dispatch(setTagModalVisibility(true));
                break;
            case 'About':
                break;
            case 'Help':
                break;
            default:
                break;
        }
        hideAction();
    }

    useClickOutside(ref, hideAction);

    return (
        <ul className='options-dropdown' ref={ref}>
            <li>
                <button
                    name='Settings'
                    className='options-dropdown__option'
                    aria-label='Show Settings Display'
                    onClick={onOptionClicked}
                >
                    Settings
                </button>
            </li>
            <li>
                <button
                    name='Edit Tags'
                    className='options-dropdown__option'
                    aria-label='Show Edit Tags Display'
                    onClick={onOptionClicked}
                >
                    Edit Tags
                </button>
            </li>
            <li>
                <button
                    name='About'
                    className='options-dropdown__option'
                    onClick={onOptionClicked}
                    aria-label='Show About Info'
                >
                    About
                </button>
            </li>
            <li>
                <button
                    name='Help'
                    className='options-dropdown__option'
                    onClick={onOptionClicked}
                    aria-label='Show Help Info'
                >
                    Help
                </button>
            </li>            
        </ul>
    );
}

export default OptionsDrowdown;