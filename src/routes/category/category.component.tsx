import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

import { selectCategoriesArray, selectCategoriesIsLoading } from '../../store/categories/categories.selector'; 

import ProductCard, { Product } from '../../components/product-card/product-card.component';

import {
  CategoryContainer,
  CategoryTitle
} from './category.styles';

import Spinner from '../../components/spinner/spinner.component';

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categories = useAppSelector(selectCategoriesArray);
  const isLoading = useAppSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);
  
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
            {products &&
              products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CategoryContainer>
        )
      }
    </Fragment>
  );
};
  
export default Category;

