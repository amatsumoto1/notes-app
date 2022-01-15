import React from 'react';
import Modal from '../Common/Modal';
import { getTagModalVisibility } from '../../store/TagModal';
import { setTagModalVisibility } from '../../actions/TagModal';
import TagSearch from './TagSearch';
import TagTable from './TagTable';
import AddTagForm from './AddTagForm';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './index.scss';

const TagModal: React.VFC = () => {
    const visible = useAppSelector(getTagModalVisibility);
    const dispatch = useAppDispatch();

    const onCloseButtonClicked = () => {
        dispatch(setTagModalVisibility(false));
    }

    return (
        <Modal className='tag-modal' visible={visible}>
            <div className='tag-modal__row'>
                <TagSearch />
            </div>
            <div className='tag-modal__row'>
                <TagTable />
            </div>
            <div className='tag-modal__row'>
                <AddTagForm />
            </div>
            <div className='tag-modal__row'>
                <button
                    className='tag-modal__close-button'
                    title='Close'
                    aria-label='Close'
                    onClick={onCloseButtonClicked}
                >
                    Close
                </button>
            </div>
        </Modal>
    );
}

export default TagModal;