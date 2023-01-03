import { Link } from "react-router-dom";
import "./categories-list.styles.scss";

/**
 * CategoryList
 *  CategoryList responsible for take object and return CategoryList object jsx format
 * @param {object} category
 *  @returns {object} 
 */
const CategoryList = ({ category }) => {
  const { backgroundImage, categoryTitle } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="category-body-container">
        <h2>{categoryTitle}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryList;
