import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

type ModalOwnProps = {
    visible: boolean;
    className?: string;
}

type ModalProps = React.PropsWithChildren<ModalOwnProps>;

const modalNode = document.getElementById('modal-root') as HTMLElement;


const Modal: React.FC<ModalProps> = ({ visible, className, children }: ModalProps) => {
    const getModalClassName = () => {
        return `modal${className ? ` ${className}` : ''}`
    }
    
    return (
        visible ? 
            createPortal(
                <div className='modal-overlay'>
                    <div className={getModalClassName()} role='dialog'>
                        { children }
                    </div>
                </div>,
                modalNode || document.createElement('div') // For testing.
            ) : null
    );
}

export default Modal;