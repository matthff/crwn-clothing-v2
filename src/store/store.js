//I'm only using the legacy_createStore for learning purposes in the moment, but it's recommended to
// switch for the configureStore later in the project from the Redux Toolkit(RTK)!

import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
