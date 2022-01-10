import React from 'react';
import TagRow from '../TagRow';
import { getTags } from '../../../store/Tags';
import { useAppSelector } from '../../../hooks';

const TagTable: React.VFC = () => {
    const tags = useAppSelector(getTags);

    const updateTag = (id: number) => {

    }

    const deleteTag = (id: number) => {

    }

    return (
        <div className='tags-table'>
            { Object.keys(tags).map(id =>
                {
                    const tag = tags[Number(id)];

                    return <TagRow
                                key={id}
                                id={tag.id}
                                defaultContent={tag.content}
                                onUpdate={updateTag}
                                onDelete={deleteTag}
                            />
                }
            ) }
        </div>
    )
}

export default TagTable;