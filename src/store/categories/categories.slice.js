import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';


const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const categoriesArray = await getCategoriesAndDocuments();
        return categoriesArray;
    }
)

const INITAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITAL_STATE,
    extraReducers: (builder) => {
        builder.addCase(fetchCategoriesAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        })
    }
});

export { fetchCategoriesAsync };
export default categoriesSlice.reducer;
