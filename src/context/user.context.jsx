import { createContext, useState, useEffect } from 'react';

import { 
    createUserDocumentFromAuth, 
    onAuthStateChangedListener 
} from '../utils/firebase/firebase.utils.js';

// As the actual value you want to access 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
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
