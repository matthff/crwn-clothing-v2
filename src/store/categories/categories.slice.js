import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITAL_STATE,
    reducers: {
        setCategories(state, action) {
            const { payload } = action;
            state.categories = payload;
        }
    }
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
