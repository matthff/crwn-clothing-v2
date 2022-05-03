import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectCategoriesArray } from '../../store/categories/categories.selector.js'; 

import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesArray);

    return (
        <Fragment>
            {Object.keys(categories).map(title => {
                console.log(categories)
                const products = categories[title];
                return(
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    )
}

export default CategoriesPreview;
