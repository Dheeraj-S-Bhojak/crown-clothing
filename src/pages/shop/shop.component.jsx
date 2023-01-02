import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { ProductContext } from "../../contexts/product.context";

import "./shop.styles.scss";

/**
 * Shop
 *  Shop responsible for take object and return Shop object jsx format
 *  @returns {object}
 */
const Shop = () => {
  //products de-structure from ProductContext
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
