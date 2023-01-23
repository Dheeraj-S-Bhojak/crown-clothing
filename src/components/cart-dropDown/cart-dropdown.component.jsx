import { useNavigate } from "react-router-dom";

import { CartDropContainer, CartItems } from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../utils/selectors/cart.selector";
import { setIsCartOpen } from "../../utils/actions/cart.action.js";
import { useClickOutSide } from "../../utils/mouseClickOutside/mouseClickOutSide.js";
/**
 * CartDropdown
 *  CartDropdown responsible for takes a array data form context and return cart DropDown object
 * @returns {object}
 */
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const domNode = useClickOutSide(() => dispatch(setIsCartOpen(false)));
  return (
    <CartDropContainer>
      <CartItems ref={domNode}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onMouseDown={() => navigate("/checkout")}>go to checkout</Button>
    </CartDropContainer>
  );
};

export default CartDropdown;
