import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { USDollar } from "../../utils/currencySign/currencySign";
import {
  CheckoutItemContainer,
  ImageContainer,
  SpanClass,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.style.jsx";

/**
 * CheckoutItem
 *  CheckoutItem responsible for take object and return CheckoutItem object jsx format
 * @param {object} cartItem
 *  @returns {object}
 */
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemToCartHandler = () => removeItemToCart(cartItem);
  const clearItemToCartHandler = () => clearItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <SpanClass>{name}</SpanClass>
      <Quantity>
        <Arrow onClick={removeItemToCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <SpanClass>{USDollar.format(price)}</SpanClass>
      <RemoveButton onClick={clearItemToCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
