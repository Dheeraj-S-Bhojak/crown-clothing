import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import CartIcon from "../cart-icon/cart-icon.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../cart-dropDown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import "./navigation.styles.scss";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default NavigationBar;
