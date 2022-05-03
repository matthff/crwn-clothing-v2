import { useDispatch } from 'react-redux/es/exports';

import { addItemToCart } from '../../store/cart/cart.slice.js';

import './product-card.styles.scss';

import Button, {BUTTON_STYLES_TYPES} from '../button/button.component.jsx';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const { name, price, imageUrl } = product;

    const addProductToCartHandler = () => dispatch(addItemToCart(product));
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
