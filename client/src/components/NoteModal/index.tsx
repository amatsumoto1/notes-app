import React from 'react';
import Modal from '../Common/Modal';
import { NoteModel } from '../../store/Notes';
import NoteForm from './NoteForm';
import './index.scss';

type Props = {
    visible: boolean
    note?: NoteModel
}

const NoteModal: React.VFC<Props> = ({ visible, note }: Props) => {
    return (
        <Modal className='note-modal' visible={visible}>
            <NoteForm
                defaultTitle={note?.title}
                defaultContent={note?.description}
                defaultColor={note?.color}
                id={note?.id}
            />
        </Modal>
    );
}

export default NoteModal;