import gamepad from "../../../assets/services/gamepad.svg"
import styles from "./Play.module.scss"

const Play = () => {
    return (
        <div className={styles['play']}>
            <div className={styles['play-text']}>
                <div className={styles['play-text__us']}>
                    <p>Играй, твори и<br />
                    получай <span className={styles['play-text__us__pleasure']}>удовольствие</span><br />
                    только у нас!</p>
                </div>
            </div>
            <div className={styles['play-text__service']}>
                <p>Мы предоставляем услуги аренды наших помещений<br />
                и проведении мероприятий любой сложности “под<br />
                ключ”.</p>
            </div>
            <div className={styles['play-image']}>
                <img src={gamepad} alt="gamepad" />
            </div>
        </div>
    );
};

export default Play;