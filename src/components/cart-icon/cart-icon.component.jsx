import { useContext } from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/images/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

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
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
