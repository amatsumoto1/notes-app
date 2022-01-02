import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

type ModalOwnProps = {
    show: boolean;
    className?: string;
}

type ModalProps = React.PropsWithChildren<ModalOwnProps>;

const Modal: React.FC<ModalProps> = ({ show, className, children }: ModalProps) => {
    const getModalClassName = () => {
        return `modal${className ? ` ${className}` : ''}`
    }
    
    return (
        show ? 
            createPortal(
                <div className={getModalClassName()}>
                    { children }
                </div>,
                document.body
            ) : null
    );
}

export default Modal;