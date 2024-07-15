import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import PassRecoverText from "../../../../UI/PassRecoverText/PassRecoverText";
import FormInput from "../../../../UI/FormInput/FormInput";


import styles from "./PassRecover.module.scss"
import BigButton from "../../../../UI/BigButton/BigButton";




const PassRecoverEmail = ({ show, onCloseButtonClick}) => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = () => {
        navigate("EmailConfirmation")
    }

    return(
        <div className={styles['recover']}>
            <div className={styles['recover-pass']}>
                <PassRecoverText className={styles['recover-pass__title']} title={"ВОССТАНОВИТЬ ПАРОЛЬ"} subtitle={"Чтобы восстановить пароль введите Ваш номер телефона или адрес электронной почты"}/>
                <div className={styles['recover-pass__buttons']}>
                    <button className={styles['recover-pass__buttons__mailactive']}>Электронная почта</button>
                    <button className={styles['recover-pass__buttons__tel']} onClick={() => {navigate("recoverPhone")}}>Номер телефона</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles['recover-pass__form']}>
                    <FormInput title={"Email"} name={"text"} rules={{required: true}} type={"text"}
                                    placeholder={"Ваша электронная почта"} register={register} errors={errors}/>
                    <BigButton>ПРОДОЛЖИТЬ</BigButton>
                    <div className= {styles['recover-pass__form__cancel']} onClick={() => {navigate(-1)}}>
                        <div onClick={onCloseButtonClick}>
                            <p className={styles['back-main']}>Отменить</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PassRecoverEmail;

