import CategoryList from "../categories-list/categories-list.components";
import "./directory.styles.scss";
const Directory = () => {
  const productCategories = [
    {
      id: 1,
      categoryTitle: "Jackets",
      backgroundImage: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 2,
      categoryTitle: "Hats",
      backgroundImage: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 3,
      categoryTitle: "Sneakers",
      backgroundImage: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      categoryTitle: "Womens",
      backgroundImage: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      categoryTitle: "Mens",
      backgroundImage: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <>
      <div className="directory-container">
        {productCategories.map((category) => {
          return <CategoryList key={category.id} category={category} />;
        })}
      </div>
    </>
  );
};

export default Directory;
