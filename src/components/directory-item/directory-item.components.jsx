import { useNavigate } from "react-router-dom";
import {
  DirectoryItemBodyContainer,
  DirectoryItemContainer,
  BackgroundImage,
} from "./directory-item.styles.jsx";

/**
 * DirectoryItem
 *  DirectoryItem responsible for take object and return DirectoryItem object jsx format
 * @param {object} category
 *  @returns {object}
 */
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const onClickCategoriesHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <DirectoryItemContainer onClick={onClickCategoriesHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
