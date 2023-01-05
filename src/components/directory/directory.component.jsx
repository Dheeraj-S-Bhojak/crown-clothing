import DirectoryItem from "../directory-item/directory-item.components";
import "./directory.styles.scss";

/**
 * Directory
 *  Directory responsible for home page categories
 *  @returns {object}
 */
const Directory = ({ categories }) => {
  return (
    <>
      <div className="directory-container">
        {categories.map((category) => {
          return <DirectoryItem key={category.id} category={category} />;
        })}
      </div>
    </>
  );
};

export default Directory;
