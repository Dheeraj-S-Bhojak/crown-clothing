import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { ProductContext } from "../../contexts/product.context";

import "./shop.styles.scss";

const Shop = () => {
  console.log("hello_ji");
  const { products } = useContext(ProductContext);

  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
