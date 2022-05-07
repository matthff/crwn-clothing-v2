import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectCategoriesArray, selectCategoriesIsLoading } from '../../store/categories/categories.selector.js'; 

import ProductCard from '../../components/product-card/product-card.component.jsx';

import {
  CategoryContainer,
  CategoryTitle
} from './category.styles.jsx';

import Spinner from '../../components/spinner/spinner.component.jsx';


const Category = () => {
    const { category } = useParams();
    const categories = useSelector(selectCategoriesArray);
    const isLoading = useSelector(selectCategoriesIsLoading);
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
                products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </CategoryContainer>
          )
        }
      </Fragment>
    );
  };
  
  export default Category;

