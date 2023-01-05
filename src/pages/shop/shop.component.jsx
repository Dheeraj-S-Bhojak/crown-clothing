import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category.component/category.component";

import "./shop.styles.scss";

/**
 * Shop
 *  Shop responsible for take object and return Shop object jsx format
 *  @returns {object}
 */
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
