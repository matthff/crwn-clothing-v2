import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

import type { Product } from "../../components/product-card/product-card.component";

type CategoryMap = {
    [key: string]: Product[];
}

const selectCategoriesReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesArray = createSelector(
    [selectCategories],
    (categories): CategoryMap => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc; 
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
