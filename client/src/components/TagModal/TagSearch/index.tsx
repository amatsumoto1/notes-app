import React from 'react';
import SearchBar from '../../Common/SearchBar';

const TagSearch: React.VFC = () => {
    const search = () => {

    }

    return (
        <form noValidate method='POST'>
            <SearchBar search={search}/>
        </form>
        
    )
}

export default TagSearch;