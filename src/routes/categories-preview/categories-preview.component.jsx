import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectCategoriesArray, selectCategoriesIsLoading } from '../../store/categories/categories.selector.js'; 

import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import Spinner from '../../components/spinner/spinner.component.jsx';

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesArray);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    Object.keys(categories).map(title => {
                        const products = categories[title];
                        return(
                            <CategoryPreview key={title} title={title} products={products} />
                        );
                    })
                )
            }
            
        </Fragment>
    )
}

export default CategoriesPreview;
