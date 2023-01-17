import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { USDollar } from "../../utils/currencySign/currencySign";
import Message from "../../components/message/message.component";
import {
  Total,
  HeaderBlock,
  CheckoutContainer,
  CheckoutHeader,
} from "./checkout.styles.jsx";

/**
 * Checkout
 *  Checkout responsible for take object and return Checkout object jsx format
 *  @returns {object}
 */
const Checkout = () => {
  //cartItems and cartTotal de-structure from cartContext
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      {cartItems ? (
        <>
          {" "}
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <Total>Total: {USDollar.format(cartTotal)}</Total>
        </>
      ) : (
        <Message variant={"danger"} error={"error:"} />
      )}
    </CheckoutContainer>
  );
};
export default Checkout;
