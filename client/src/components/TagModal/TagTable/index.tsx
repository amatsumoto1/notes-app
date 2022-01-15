import React from 'react';
import TagRow from '../TagRow';
import { getTags } from '../../../store/Tags';
import { deleteTag, updateTag } from '../../../actions/Tags';
import { useAppSelector, useAppDispatch } from '../../../hooks';

const TagTable: React.VFC = () => {
    const tags = useAppSelector(getTags);
    const dispatch = useAppDispatch();

    const updateTagItem = (id: number, content?: string) => {
        dispatch(updateTag(id, content));
    }

    const deleteTagItem = (id: number) => {
        dispatch(deleteTag(id));
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
                                onUpdate={updateTagItem}
                                onDelete={deleteTagItem}
                            />
                }
            ) }
        </div>
    )
}

export default TagTable;