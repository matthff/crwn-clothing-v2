import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectCategories } from '../../store/categories/categories.selector.js'; 

import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);

    return (
        <Fragment>
            {Object.keys(categories).map(title => {
                const products = categories[title];
                return(
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    )
}

export default CategoriesPreview;
