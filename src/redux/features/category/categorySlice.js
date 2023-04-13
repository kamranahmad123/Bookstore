import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryArray : [],
}

const categorySlice = createSlice({
    name : 'category',
    initialState,
reducers : {
    checkStatus : (state) => {
        if (state.categoryArray.length === 0) {
            return 'Under construction';
        }
        else {
            return {...state, categoryArray};
        }
    },
},
});

export const {checkStatus} = categorySlice.actions;
export default categorySlice.reducer;