import styles from "./Partners.module.scss";
import H2 from "../../../UI/H2/H2";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <H2>Наши партнёры</H2>
      <div className={styles.partners__list}>
        <p>Здесь можете оказаться именно вы...</p>
      </div>
    </div>
  );
};

export default Partners;