import {
  selectCartItems,
  selectCartTotal,
} from "../../utils/selectors/cart.selector";

import { useSelector } from "react-redux";

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
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
