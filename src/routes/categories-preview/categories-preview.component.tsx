import { Fragment } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectCategoriesArray, selectCategoriesIsLoading } from '../../store/categories/categories.selector'; 

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';


const CategoriesPreview = () => {
    const categories = useAppSelector(selectCategoriesArray);
    const isLoading = useAppSelector(selectCategoriesIsLoading);

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
