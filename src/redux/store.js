import { configureStore } from '@reduxjs/toolkit';
import book from './books/booksSlice';
import category from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: book,
    categories: category,
  },
});

export default store;
