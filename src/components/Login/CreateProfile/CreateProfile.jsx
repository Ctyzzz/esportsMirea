import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import styles from "./CreateProfile.module.scss"
import Button from '../../../UI/Button/Button';
import FormInput from '../../../UI/FormInput/FormInput';
import secondStage from '../../../assets/reg/secondStage.svg';

const CreateProfile = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = () => {
        //navigate(`/profile/${1}`)
        navigate("confirmProfile")
    }

    return (
        <div className={styles["registration-full"]}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles["registration-full-form"]}>
                <div className={styles["registration-full-form__pic"]}>
                    <img src={secondStage} alt="sStage"/>
                </div>
                <div className={styles["registration-full-form__title"]}>
                    Общие сведения
                </div>
                <div className={styles["registration-full-form__photo"]}>
                </div>
                <FormInput title={"Имя"} register={register} name={"name"} rules={{require: true}} placeholder={"Введите свое имя"}/>
                <FormInput title={"Фамилия"} register={register} name={"lastName"} rules={{require: true}} placeholder={"Введите свою фамилию"}/>
                <FormInput title={"Отчество (при наличии)"} register={register} name={"surName"} rules={{require: true}} placeholder={"Введите свое отчество"}/>
                <div className={styles['registration-full-form__button']} type="submit">
                    <Button >Продолжить</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateProfile;