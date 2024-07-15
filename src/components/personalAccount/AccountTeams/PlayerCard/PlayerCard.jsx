import styles from './PlayerCard.module.scss'
import close from '../../../../assets/personalAccount/teams/close.svg'

const PlayerCard = () => {
  return (
    <>
        <div className={styles["player-card"]}>
            <p className={styles["player-card__number"]}>Игрок 2</p>
            <div className={styles["player-card__select"]}>
                <label htmlFor="player-select">Выбрать игрока</label>
                <select name="player" id="player-select">
                    <option value="Friend">Выбрать из списка друзей</option>
                    <option value="Friend1">irmyakino</option>
                </select>
            </div>
            <div className={styles["player-card__role"]}>
                <label htmlFor="role-select">Роль в команде</label>
                <select name="role" id="role-select">
                    <option value="Member">Участник</option>
                    <option value="Moderator">Модератор</option>
                </select>
            </div>
            <button className={styles["player-card__close"]}>
                <img src={close} alt="Close" />
            </button>
        </div>
    </>
  )
}

export default PlayerCard