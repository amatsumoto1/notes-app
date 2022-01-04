import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &  {
    icon: IconDefinition;
}

const IconButton: React.VFC<Props> = ({ icon, ...rest}: Props ) => {
    return (
        <button { ...rest }>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default IconButton;