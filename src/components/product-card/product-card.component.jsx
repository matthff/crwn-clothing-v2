import { useContext } from 'react';

import { CartContext } from '../../context/cart.context.jsx';

import './product-card.styles.scss';

import Button, {BUTTON_STYLES_TYPES} from '../button/button.component.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCartHandler = () => addItemToCart(product)
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonStyle={BUTTON_STYLES_TYPES.inverted} onClick={addProductToCartHandler}>Add to cart</Button>
        </div>
    );
}

export default ProductCard;
