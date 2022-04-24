import ProductCard from '../product-card/product-card.component.jsx';

import {
    CategoryPreviewContainer,
    CategoryPreviewTitleLink,
    Preview
} from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitleLink to={title}>
                    {title.toUpperCase()}
                </CategoryPreviewTitleLink>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;
