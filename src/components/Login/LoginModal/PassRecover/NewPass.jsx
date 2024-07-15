import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"


import PassRecoverText from "../../../../UI/PassRecoverText/PassRecoverText";
import FormsPass from "./FormsPass";

import BigButton from "../../../../UI/BigButton/BigButton";
import styles from "./PassRecover.module.scss"

const NewPass = ({ show, onCloseButtonClick}) => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = () => {
        navigate("")
    }

    return(
        <div className={styles['recover']}>
            <div className={styles['recover-pass']}>
                <PassRecoverText className={styles['recover-pass__new__title']} title={"ВОССТАНОВИТЬ ПАРОЛЬ"}/>

                <form onSubmit={handleSubmit(onSubmit)} className={styles['recover-pass__new']}>
                    <FormsPass />
                    <BigButton>ПРОДОЛЖИТЬ</BigButton>
                    <div className= {styles['recover-pass__new__cancel']} onClick={() => {navigate(-3)}}>
                        <div onClick={onCloseButtonClick}>
                            <p className={styles['back-main']}>Отменить</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default NewPass;
