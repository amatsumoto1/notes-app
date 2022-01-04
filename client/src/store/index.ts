import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginModalReducer from './LoginModal';
import notesReducer from './Notes';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    notes: notesReducer
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