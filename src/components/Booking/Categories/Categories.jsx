import { useSelector } from "react-redux";
import styles from "./Categories.module.scss";
import Category from "./Category";

function Categories() {
  const { categories } = useSelector((state) => state.reservationReducer);
  return (
    <ul className={styles.categories}>
      {categories.map((category) => (
        <Category
          key={category.slug}
          img={category.img}
          title={category.name}
          value={category.slug}
        />
      ))}
    </ul>
  );
}

export default Categories;
