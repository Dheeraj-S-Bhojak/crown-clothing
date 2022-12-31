import { useContext, useState } from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/images/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{0}</span>
    </div>
  );
};

export default CartIcon;
