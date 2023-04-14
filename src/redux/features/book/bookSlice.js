import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArray: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBooks: (state, action) => ({
      ...state,
      booksArray: state.booksArray.filter((book) => book.item_id !== action.payload),
      // return { ...state, books: booksFilter };
    }),
    addBooks: (state, action) => {
      state.booksArray.push(action.payload);
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;
export default booksSlice.reducer;
