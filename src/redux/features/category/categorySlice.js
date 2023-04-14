import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryArray: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categoryArray.length === 0) {
        return 'Under construction';
      }
      return 'Ready';
    },
  },
});

export default categorySlice.reducer;
export const { checkStatus } = categorySlice.actions;
