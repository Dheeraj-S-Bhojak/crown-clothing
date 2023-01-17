import { useContext, Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../utils/selectors/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
/**
 * CategoriesPreview
 *  CategoriesPreview responsible for take object and return CategoriesPreview object jsx format
 *  @returns {object}
 */
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("categories", categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
