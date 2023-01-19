import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../utils/selectors/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
} from "../../utils/actions/cart.action";
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
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemToCartHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));
  const clearItemToCartHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
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
