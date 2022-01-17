import React from 'react';
import SearchBar from '../../Common/SearchBar';
import { useAppDispatch } from '../../../hooks';
import { loadAllTags } from '../../../actions/Tags';

const TagSearch: React.VFC = () => {
    const dispatch = useAppDispatch();

    const search = (searchInput?: string) => {
        dispatch(loadAllTags(searchInput));
    }

    return (
        <form noValidate method='POST'>
            <SearchBar search={search}/>
        </form>
        
    )
}

export default TagSearch;