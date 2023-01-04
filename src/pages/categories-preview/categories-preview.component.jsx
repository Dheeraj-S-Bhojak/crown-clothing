import { useContext, Fragment } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

/**
 * CategoriesPreview
 *  CategoriesPreview responsible for take object and return CategoriesPreview object jsx format
 *  @returns {object}
 */
const CategoriesPreview = () => {
  //products de-structure from ProductContext
  const { categoriesMap } = useContext(CategoriesContext);
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
