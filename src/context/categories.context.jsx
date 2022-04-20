import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        // To use a async() function in useEffect, you have to declare a new function in the anonymous function
        // to get the proper behavior, and then call it after the declaration
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
}
