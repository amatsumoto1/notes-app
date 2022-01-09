import { AppThunk } from '../../store';
import { setVisible } from '../../store/TagModal';

export const setTagModalVisibility = (visible: boolean): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setVisible(visible));
    }
}