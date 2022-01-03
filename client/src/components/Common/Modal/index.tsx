import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

type ModalOwnProps = {
    show: boolean;
    className?: string;
}

type ModalProps = React.PropsWithChildren<ModalOwnProps>;

const modalNode = document.getElementById('modal-root') as HTMLElement;


const Modal: React.FC<ModalProps> = ({ show, className, children }: ModalProps) => {
    const getModalClassName = () => {
        return `modal${className ? ` ${className}` : ''}`
    }
    
    return (
        show ? 
            createPortal(
                <div className='modal-overlay'>
                    <div className={getModalClassName()} role='dialog'>
                        { children }
                    </div>
                </div>,
                modalNode
            ) : null
    );
}

export default Modal;