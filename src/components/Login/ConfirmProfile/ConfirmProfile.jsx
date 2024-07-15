import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import styles from "./ConfirmProfile.module.scss"
import Button from '../../../UI/Button/Button';
import FormInput from '../../../UI/FormInput/FormInput';
import thirdStage from '../../../assets/reg/thirdStage.svg';

const ConfirmProfile = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = () => {
        //navigate(`/profile/${1}`)
        navigate("")
    }

    return (
        <div className={styles["registration-full"]}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles["registration-full-form"]}>
                <div className={styles["registration-full-form__pic"]}>
                    <img src={thirdStage} alt="tStage"/>
                </div>
                <div className={styles["registration-full-form__title"]}>
                    Общие сведения
                </div>
                <FormInput title={"Никнейм"} register={register} name={"nickname"} rules={{required: true}} placeholder={"Введите свой никнейм"}/>
                <div className={styles["registration-full-form__input"]}>
                    <div className={styles["title"]}>
                        Дата рождения
                    </div>
                    <div className={styles["registration-full-form__birthDay"]}>
                        <input {...register("day", {required: true})} placeholder={"День"} />
                        <input {...register("month", {required: true})} placeholder={"Месяц"} />
                        <input {...register("year", {required: true})} placeholder={"Год"} />
                    </div>
                </div>
                <label className={styles["registration-full-form__checkbox"]}>
                    <div className={styles["subTitle"]}>
                        <div className={["subtitle__checkBox"]}>
                            <input type="checkbox" 
                            className={styles["custom-checkbox"]} 
                            id="agreement" name="agreement" value="yes"/>
                            <label for="agreement">Я принимаю пользовательское соглашение и даю согласие на обработку персональных данных</label>
                        </div>
                    </div>
                </label>
                {/*inputs*/}
                <div className={styles['registration-full-form__button']} type="submit">
                    <Button >Продолжить</Button>
                </div>
            </form>
        </div>
    );
};

export default ConfirmProfile;