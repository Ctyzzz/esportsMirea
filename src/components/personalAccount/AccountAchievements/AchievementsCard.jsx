import styles from './AccountAchievements.module.scss'
import friends from "../../../assets/personalAccount/Achievements/Achievementfriends.svg"
import background from "../../../assets/personalAccount/Achievements/Cardbackground.svg"

const AchievementsCard = () => {
  return (
    <>
        <div className={`${styles["achievements-card"]} ${styles["achievements-card_active"]}`}>
            <p className={styles["achievements-card__status"]}>Получено</p>
            <div className={styles["achievements-card__form"]}></div>
            <img src={friends} alt="Icon" className={styles["achievements-card__image"]} />
            <p className={styles["achievements-card__name"]}>Добавлен друг</p>
        </div>
    </>
  )
}

export default AchievementsCard