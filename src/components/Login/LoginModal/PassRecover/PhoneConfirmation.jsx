import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import PassRecoverText from "../../../../UI/PassRecoverText/PassRecoverText";
import FormInput from "../../../../UI/FormInput/FormInput";

import styles from "./PassRecover.module.scss"
import BigButton from "../../../../UI/BigButton/BigButton";

const PhoneConfirmation = ({ show, onCloseButtonClick}) => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = () => {
        navigate("NewPass")
    }

    return(
        <div className={styles['recover']}>
            <div className={styles['recover-pass']}>
                <PassRecoverText className={styles['recover-pass__text']} title={"ВОССТАНОВИТЬ ПАРОЛЬ"} subtitle={"Код на подтверждение был отправлен на номер телефона +7999999****"}/>
                <form onSubmit={handleSubmit(onSubmit)} className={styles['recover-pass__code']}>
                    <FormInput title={"Код подтверждения"} name={"text"} rules={{required: true}} type={"text"}
                                        placeholder={"Введите код подтверждения"} register={register} errors={errors}/>
                    <div className={styles['recover-pass__code__more']} onClick={onCloseButtonClick}>
                        <p>Отправить код еще раз</p>
                    </div>
                    <BigButton>ПРОДОЛЖИТЬ</BigButton>
                    <div className= {styles['recover-pass__code__cancel']} onClick={() => {navigate(-2)}}>
                        <div onClick={onCloseButtonClick}>
                            <p className={styles['back-main']}>Отменить</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PhoneConfirmation;
