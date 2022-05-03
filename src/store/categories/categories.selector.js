import { createSelector } from "@reduxjs/toolkit";

const selectCategoriesReducer = state => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesArray = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc; 
    }, {})
);
