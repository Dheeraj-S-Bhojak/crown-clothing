import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.style.scss";

/**
 * CheckoutItem
 *  CheckoutItem responsible for take object and return CheckoutItem object jsx format
 * @param {object} cartItem
 *  @returns {object}
 */
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemToCartHandler = () => removeItemToCart(cartItem);
  const clearItemToCartHandler = () => clearItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemToCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemToCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
