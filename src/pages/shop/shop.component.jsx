import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategories } from "../../utils/actions/category.action.js";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category.component/category.component";

/**
 * Shop
 *  Shop responsible for take object and return Shop object jsx format
 *  @returns {object}
 */
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
