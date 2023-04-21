import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cHoF6Sru66Tis7mvAsqB/books';
export const fetchBooksData = createAsyncThunk('books/fetchBooksData', async () => {
  const request = await axios.get(booksURL);
  return request.data;
});

export const booksAddition = createAsyncThunk('books/booksAddition', async (book) => {
  const response = await axios.post(booksURL, book);
  return response.data;
});

export const booksRemoval = createAsyncThunk('books/booksRemoval', async (Id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cHoF6Sru66Tis7mvAsqB/books/${Id}`);
  return Id;
});

const initialState = {
  books: [],
  isLoading: false,
  error: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addbooks: (state, action) => {
      const booksArray = action.payload;
      const booksDetail = {
        item_id: booksArray.item_id,
        title: booksArray.title,
        author: booksArray.author,
        category: booksArray.category,
      };
      state.books.push(booksDetail);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksData.pending, (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }));
    builder.addCase(fetchBooksData.fulfilled, (state, action) => {
      const booksArray = action.payload;
      const booksNew = [];
      Object.keys(booksArray).forEach((booksItem) => booksNew.push({
        item_id: booksItem,
        title: booksArray[booksItem][0].title,
        author: booksArray[booksItem][0].author,
        category: booksArray[booksItem][0].category,
      }));
      return ({
        ...state,
        books: booksNew,
        isLoading: false,
      });
    });
    builder.addCase(fetchBooksData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(booksAddition.pending, (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }));
    builder.addCase(booksAddition.fulfilled, (state) => ({
      ...state,
      isLoading: false,
      error: false,
    }));
    builder.addCase(booksAddition.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(booksRemoval.fulfilled, (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((items) => items.item_id !== id);
      state.error = false;
    });
    builder.addCase(booksRemoval.rejected, (state) => ({
      ...state,
      error: true,
    }));
  },
});

export const { addbooks } = booksSlice.actions;
export default booksSlice.reducer;
