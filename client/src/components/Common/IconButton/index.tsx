import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &  {
    icon: IconDefinition,
    focusable?: boolean
}

const IconButton: React.VFC<Props> = ({ icon, focusable, ...rest}: Props ) => {
    return (
        <button { ...rest } tabIndex={focusable ? 0 : undefined}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default IconButton;