import DirectoryItem from "../directory-item/directory-item.components";
import { DirectoryContainer } from "./directory.styles.jsx";

/**
 * Directory
 *  Directory responsible for home page categories
 *  @returns {object}
 */
const Directory = ({ categories }) => {
  return (
    <>
      <DirectoryContainer>
        {categories.map((category) => {
          return <DirectoryItem key={category.id} category={category} />;
        })}
      </DirectoryContainer>
    </>
  );
};

export default Directory;
