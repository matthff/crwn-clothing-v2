import ProductCard from '../product-card/product-card.component';

import {
    CategoryPreviewContainer,
    CategoryPreviewTitleLink,
    Preview
} from './category-preview.styles'

import { Product } from '../product-card/product-card.component';

type CategoryPreviewProps = {
    title: string,
    products: Product[]
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
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
