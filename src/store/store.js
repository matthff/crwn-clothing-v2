import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './user/user.slice.js';
import categoriesReducer from './categories/categories.slice.js';
import cartReducer from './cart/cart.slice.js';


export const store = configureStore({
    reducer: {
        user: userReducer,
        categories: categoriesReducer,
        cart: cartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['user/currentUser'],
            ignoredActionPaths: ['payload'],
            ignoredPaths: ['user.currentUser']
        },
    }).concat(logger),
});
