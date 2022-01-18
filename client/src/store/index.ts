import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginModalReducer from './LoginModal';
import notesReducer from './Notes';
import noteModalReducer from './NoteModal';
import userReducer from './User';
import tagModalReducer from './TagModal';
import tagReducer from './Tags';
import loadingReducer from './Loading';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    notes: notesReducer,
    noteModal: noteModalReducer,
    tagModal: tagModalReducer,
    tags: tagReducer,
    user: userReducer,
    loading: loadingReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;