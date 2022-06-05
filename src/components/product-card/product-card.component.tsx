import { useAppDispatch } from '../../store/hooks';

import { addItemToCart } from '../../store/cart/cart.slice';

import { ProductCardContainer } from './product-card.styles';

import Button, {BUTTON_STYLES_TYPES} from '../button/button.component';

export type Product = {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
}

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const dispatch = useAppDispatch();

    const { name, price, imageUrl } = product;

    const addProductToCartHandler = () => dispatch(addItemToCart(product));
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonStyle={BUTTON_STYLES_TYPES.inverted} onClick={addProductToCartHandler}>Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;
