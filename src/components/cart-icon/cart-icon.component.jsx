import { useContext, useState } from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/images/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { CartContext } from "../../contexts/cart.context";

/**
 * CartIcon
 *  CartIcon responsible for return CartLogo object jsx format
 *  @returns {object}
 */

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
