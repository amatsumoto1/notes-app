import React from 'react';
import Modal from '../Common/Modal';
import { NoteModel } from '../../store/Notes';
import './index.scss';

type Props = {
    visible: boolean
    note?: NoteModel
}

const NoteModal: React.VFC<Props> = ({ visible }: Props) => {
    return (
        <Modal className='note-modal' visible={visible}>

        </Modal>
    )
}

export default NoteModal;