import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { CartDropContainer, CartItems } from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

/**
 * CartDropdown
 *  CartDropdown responsible for takes a array data form context and return cart DropDown object
 * @returns {object}
 */
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={() => navigate("/checkout")}>go to checkout</Button>
    </CartDropContainer>
  );
};

export default CartDropdown;
