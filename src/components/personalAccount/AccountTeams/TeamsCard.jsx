
import styles from './AccountTeams.module.scss'

const TeamsCard = () => {
  return (
    <>
        <div className={styles["teams-card"]}>
          <div className={styles["teams-card__name"]}>
            <p className={styles["teams-card__date"]}>ЗАВЕРШЕНО 12 АВГ.</p>
            <p className={styles["teams-card__title"]}>ESL Challenger League Season 44 — Европа</p>
          </div>
          <div className={styles["teams-card__fight"]}>
            <p>5v5</p>
          </div>
          <div className={styles["teams-card__count"]}>
            <p>455/1024</p>
          </div>
          <div className={styles["teams-card__icon"]}>
          </div>
        </div>    
    </>
  )
}

export default TeamsCard