import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

import FormsModal from './FormsModal';
import LksButton from '../../../UI/LksButton/LksButton,';

import styles from './ModalContent.module.scss'

const ModalContent = ({ onCloseButtonClick }) => {
    const navigate = useNavigate()

    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
                <div className={styles["modal-content__exit"]} onClick={onCloseButtonClick}>&#10006;</div>
                <p className={styles["modal-content__title"]}>Войти</p>
                <FormsModal close={onCloseButtonClick} />
                <div className={styles["modal-content__recover"]} onClick={() => { navigate("recover") }}>
                </div>
                {/* <div className={styles["modal-content__enter"]}>
                    <BigButton type="submit" >Войти</BigButton>
                </div> */}
                <Link to="https://esports.mirea.ru/api/v1/auth/user/login/mirea_login" reloadDocument><LksButton /></Link>
                {/*<p className={styles["modal-content__subtitle"]}>У вас еще нет своего профиля?</p>*/}
                {/*<div className={styles["modal-content__registration"]} onClick={() => {
                    navigate("registration")
                    setType('register')
                    onCloseButtonClick()
                }}>
                    <div>
                        <Button>Регистрация</Button>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default ModalContent;