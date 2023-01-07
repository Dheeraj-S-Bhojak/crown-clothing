import { USDollar } from "../../utils/currencySign/currencySign";

import { CartItemContainer, ItemDetails } from "./cart-item.styles.jsx";

/**
 * CartItem
 *  CartItem responsible for take object and  return CartItem object jsx format
 * @param {object} cartItem
 *  @returns {object}
 */
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {USDollar.format(price)}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
