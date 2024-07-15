import styles from './AccountTeams.module.scss'

const TeamsTable = () => {
  return (
    <>
        <div className={styles["team-info__table"]}>
        <div className={styles["team-list"]}>
          <div className={styles["team-list__team"]}>
              <p>Команды</p>
          </div>
          <div className={styles["team-list__role"]}>
              <p>Роль</p>
          </div>
          <div className={styles["team-list__icon"]}></div>  
        </div>
        <div className={styles["team-element"]}>
            <div className={styles["team-element__name"]}>
              <p>ИМЯ "НИК" ФАМИЛИЯ</p>
            </div>
            <div className={styles["team-element__role"]}>
              <p>Капитан</p>
            </div>
            <div className={styles["team-element__icon"]}>
              <p>значок</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default TeamsTable