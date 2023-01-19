import { USDollar } from "../../utils/currencySign/currencySign";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../utils/actions/cart.action";
import { selectCartItems } from "../../utils/selectors/cart.selector";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

/**
 * ProductCard
 *  ProductCard responsible for take object and return ProductCard object jsx format
 * @param {object} product
 *  @returns {object}
 */
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{USDollar.format(price)}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        add To cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
