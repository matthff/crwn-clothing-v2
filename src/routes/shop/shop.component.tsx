import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';

import { fetchCategoriesAsync } from '../../store/categories/categories.slice';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    const dispatch = useAppDispatch();

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
