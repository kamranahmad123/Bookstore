import { configureStore } from '@reduxjs/toolkit';
import books from './features/book/bookSlice';

const store = configureStore({
  reducer: {
    anyName: books,
  },
});

export default store;
