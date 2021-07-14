import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from '../redux/notesReducer';

export const store = configureStore({
  reducer: {
    notesReducer: NotesReducer,
  },
});
