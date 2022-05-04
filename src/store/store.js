import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist';

import userReducer from './user/user.slice.js';
import categoriesReducer from './categories/categories.slice.js';
import cartReducer from './cart/cart.slice.js';

const reducers = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
});

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['setCurrentUser', FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredActionPaths: ['payload'],
            ignoredPaths: ['user.currentUser']
        },
    }).concat(middleWares),
});

export default store;
