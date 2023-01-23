import { ReactComponent as ShoppingCartIcon } from "../../assets/images/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../utils/selectors/cart.selector";
import { setIsCartOpen } from "../../utils/actions/cart.action";

/**
 * CartIcon
 *  CartIcon responsible for return CartLogo object jsx format
 *  @returns {object}
 */

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => {
    if (isCartOpen === false) {
      dispatch(setIsCartOpen(true));
    } else {
      dispatch(setIsCartOpen(false));
    }
  };

  return (
    <CartIconContainer onMouseUp={() => toggleIsCartOpen()}>
      <ShoppingCartIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
