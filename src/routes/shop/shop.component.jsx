import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch'; 

import { fetchCategoriesAsync } from '../../store/categories/categories.slice.js';

import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../category/category.component.jsx';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;
