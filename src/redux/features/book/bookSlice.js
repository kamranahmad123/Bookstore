import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksArray : [],
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBooks: (state, action) => {
         const booksFilter = state.booksArray.filter((book) => book.id !== action.payload);
         return{...state, books: booksFilter}
        },
        removeBooks: () => {
         booksArray.push(action.payload)
        },
    },
});

export const {addBooks, removeBooks} = booksSlice.actions;
export default booksSlice.reducer;