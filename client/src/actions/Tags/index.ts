import { AppThunk } from '../../store';
import { client } from '../../config/client';
import { TagModel, setAll, add, update, remove } from '../../store/Tags';

export const loadAllTags = (): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await client.get('/tags');
            if (res.status === 200) {
                const tagList = res.data.tags as TagModel[];
                const tagState: {[id: string]: TagModel} = {};

                for (const tag of tagList) {
                    tagState[tag.id] = tag;
                }

                dispatch(setAll(tagState));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const addTag = (content: string): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await client.post('/tags', { content: content });
            if (res.status === 201) {
                const tag = res.data.tag as TagModel;
                dispatch(add(tag));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const updateTag = (id: number, content?: string): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await client.put(`/tags/${id}`, { content: content, id: id});
            if (res.status === 200) {
                const tag = res.data.tag as TagModel;
                dispatch(update(tag));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const deleteTag = (id: number): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await client.delete(`/tags/${id}`);
            if (res.status === 204) {
                dispatch(remove(id));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}