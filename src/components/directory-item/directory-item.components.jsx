import "./directory-item.styles.scss";

/**
 * DirectoryItem
 *  DirectoryItem responsible for take object and return DirectoryItem object jsx format
 * @param {object} category
 *  @returns {object}
 */
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
