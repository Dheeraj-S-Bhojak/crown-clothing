import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { USDollar } from "../../utils/currencySign/currencySign";
import Button from "../button/button.component";

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
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
