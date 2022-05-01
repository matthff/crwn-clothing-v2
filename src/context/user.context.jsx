import { createContext, useEffect, useReducer} from 'react';

import { createAction } from '../utils/reducer/reducer.utils.js'; 

import { 
    createUserDocumentFromAuth, 
    onAuthStateChangedListener 
} from '../utils/firebase/firebase.utils.js';

// As the actual value you want to access 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    //Instead of using react's useState, now it uses useReducer
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITAL_STATE);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }
    
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


// Summary: Context is a parent level component that gives access to some component insides useState values, 
// so in each respective place(component that uses the context), we are using the setter or the value itself.
