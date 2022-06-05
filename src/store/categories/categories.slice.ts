import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import type { Product } from '../../components/product-card/product-card.component';

export type Category = {
    title: string,
    items: Product[]
}

type CategorySliceState = {
    categories: Category[],
    isLoading: boolean,
    error: SerializedError | null
}

const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const categoriesArray = await getCategoriesAndDocuments();
        return categoriesArray as Category[];
    }
)

const initialState: CategorySliceState = {
    categories: [],
    isLoading: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchCategoriesAsync.pending, (state) => {
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
