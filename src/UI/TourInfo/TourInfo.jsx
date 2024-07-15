import styles from "./TourInfo.module.scss";
import line from "../../assets/tournaments/line.svg";

const TourInfo = ({ src, title1, title2 }) => {
  return (
    <div>
      <div className={styles["tourinfo"]}>
        <div className={styles["tourinfo__title1"]}>
          <img src={src} alt="" />
          <p className={styles["tourinfo__title1__text"]}>{title1}</p>
        </div>
        <p className={styles["tourinfo__title2"]}>{title2}</p>
      </div>
      <img className={styles["line"]} src={line} alt="line" />
    </div>
  );
};

export default TourInfo;
