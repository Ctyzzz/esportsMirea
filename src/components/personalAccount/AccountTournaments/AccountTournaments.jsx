import styles from "./AccountTournaments.module.scss";
import AccountTitles from "../../../UI/AccountTitles/AccountTitles";
import TournamentsSlider from "./TournamentsSlider";

import tournaments from "../../../assets/personalAccount/tournaments/tournaments.svg";

const AccountTournaments = () => {
  return (
    <div
      className={`${styles.account__tournaments}  ${styles.tournaments} ${styles["tournaments-develop"]}`}
    >
      <div className={styles.account__title}>
        <img src={tournaments} alt="" />
        <h3>
          ВАШИ ТУРНИРЫ <span>(В РАЗРАБОТКЕ)</span>
        </h3>
      </div>
    </div>
  );
  return (
    <div className={`${styles.account__tournaments}  ${styles.tournaments}`}>
      <AccountTitles img={tournaments} title={"ВАШИ ТУРНИРЫ"} />
      <div className={styles.tournaments__cards}>
        <TournamentsSlider />
      </div>
    </div>
  );
};

export default AccountTournaments;
