import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector"; 

import { ReactComponent as CrownLogo} from '../../assets/crown.svg';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";

import { selectCurrentUser } from "../../store/user/user.selector.js"; 

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import { 
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from "./navigation.styles.jsx";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo"/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {currentUser ? 
                        (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : 
                        (
                        <NavLink to="/auth">
                            SIGN IN
                        </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;
