import "./cart-item.styles.scss";

/**
 * CartItem
 *  CartItem responsible for take object and  return CartItem object jsx format
 * @param {object} cartItem
 *  @returns {object} 
 */
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  console.log("cartItem", cartItem);
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
