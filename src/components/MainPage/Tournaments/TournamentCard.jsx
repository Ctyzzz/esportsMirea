import Button from "../../../UI/Button/Button";
import styles from "./Tournaments.module.scss"
import cn from "classnames";

export const TournamentCard = ({date, text, image}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className={styles.tournamentCard}>
      <div className={cn(styles.tournamentCard__content, styles.content)}>
        <p className={styles.content__dateTitle}>Начало турнира</p>
        <p className={styles.content__date}>{date}</p>
      </div>
      <div className={styles.tournamentCard__footer}>
      <span className={styles.text}>
        {text}
      </span>
      <Button>Подробнее</Button>
      </div>
    </div>
  );
};
