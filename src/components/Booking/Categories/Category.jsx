import { useDispatch, useSelector } from "react-redux";
import styles from "./Categories.module.scss";
import {
  setMobileTitle,
  setPickedCategory,
} from "../../../redux/slices/reservation";

function Category({ img, title, value }) {
  const { pickedCategory } = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();
  function chooseCategory() {
    dispatch(setMobileTitle(title));
    dispatch(setPickedCategory(value));
  }
  return (
    <li
      className={`${styles.category} ${
        pickedCategory === value && styles.active
      }`}
      onClick={chooseCategory}
    >
      {img && <img src={img} alt="categoryIcon" />}
      <h2>{title}</h2>
    </li>
  );
}

export default Category;
