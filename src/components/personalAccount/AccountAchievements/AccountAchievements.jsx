import AchievementsCard from './AchievementsCard';
import ShowMoreButton from '../../../UI/ShowMoreButton/ShowMoreButton';

import styles from "./AccountAchievements.module.scss"
import friends from "../../../assets/personalAccount/Achievements/Achievementfriends.svg"

const AccountAchievements = () => {
    return(
        <div className={styles["achievements"]}>
            <div className={styles["achievements-wrap"]}>
                <div className={styles["achievements-quantity"]}>
                    <p className={styles["achievements-quantity__text"]}>Получено 3 из 14</p>
                </div>

                <div className={styles["achievements-cards"]}>
                    <AchievementsCard />
                    <AchievementsCard />
                    <AchievementsCard />
                    <div className={`${styles["achievements-card"]} ${styles["achievements-card_inactive"]}`}>
                        <p className={styles["achievements-card__status"]}>Не получено</p>
                        <div className={styles["achievements-card__form"]}></div>
                        <img src={friends} alt="Icon" className={styles["achievements-card__image"]} />
                        <p className={styles["achievements-card__name"]}>Добавлен друг</p>
                    </div>

                    <div className={`${styles["achievements-card"]} ${styles["achievements-card_empty"]}`}>
                        <p className={styles["achievements-card__status"]}>Не получено</p>
                        <div className={styles["achievements-card__form"]}></div>
                        <p className={styles["achievements-card__name"]}>Нет названия</p>
                    </div>
                </div>
                <div className={styles["achievements-button"]}>
                    <ShowMoreButton />
                </div>
            </div>
        </div>
    )
}

export default AccountAchievements
