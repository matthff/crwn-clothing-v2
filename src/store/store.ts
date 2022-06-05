import { combineReducers, Middleware } from 'redux';
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

import userReducer from './user/user.slice';
import categoriesReducer from './categories/categories.slice';
import cartReducer from './cart/cart.slice';

const reducers = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
});

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter((middleware): middleware is Middleware => Boolean(middleware));

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['cart'],
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
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
