import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { selectCurrentUser } from "../../store/user/user.selector"; 

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { 
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from "./navigation.styles";


const Navigation = () => {
    const currentUser = useAppSelector(selectCurrentUser);
    const isCartOpen = useAppSelector(selectIsCartOpen);

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
