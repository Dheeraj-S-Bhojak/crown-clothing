import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import CartIcon from "../cart-icon/cart-icon.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../cart-dropDown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import {
  NavigationContainer,
  LogoContainer,
  NavigationLinks,
  NavigationLink,
} from "./navigation.styles";

/**
 * NavigationBar
 *  NavigationBar responsible for take object and return NavigationBar object jsx format
 *  @returns {object}
 */

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavigationLinks>
          <NavigationLink to="/shop">SHOP</NavigationLink>
          {currentUser ? (
            <NavigationLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavigationLink>
          ) : (
            <NavigationLink to="/sign-in">SIGN IN</NavigationLink>
          )}
          <CartIcon />
        </NavigationLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default NavigationBar;
