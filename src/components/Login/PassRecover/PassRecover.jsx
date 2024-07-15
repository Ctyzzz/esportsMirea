import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, logOut } from '../../../redux/slices/auth';


import FormInput from '../../../UI/FormInput/FormInput';
import BigButton from '../../../UI/BigButton/BigButton';

import styles from "./PassRecover.module.scss"

const PassRecover = ({ show, onCloseButtonClick}) => {
    const [progress, setProgress] = useState(1)
    const [isSend, setIsSend] = useState(false)
    const token = useSelector(state=>state.authReducer.accessToken.token)
    const status = useSelector(state=>state.authReducer.accessToken.status)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (progress) => {
        if(progress<3){
            setProgress(prev=>prev+1)
        }
        else{
            dispatch(logOut())
            if(login&&password&&name&&sName&&nick&&day&&month&&year){
                const date = year + '-' + month + '-' + day
                dispatch(fetchRegister({
                    login,
                    password,
                    username: nick,
                    firstname: name,
                    lastname: sName,
                    birthday: date
                }))
                setIsSend(true)
            }
        }
    }
    useEffect(() => {
        if (token && status && isSend) {
            navigate('/passrecover')
        }
    }, [token, status, isSend]);
    return(
        <div className={styles['recover']}>
            <div className={styles['recover-pass']}>
                <form onSubmit={(e)=>e.preventDefault()} className={styles['recover-pass__form']}>
                    <div className={styles['recover-pass__title']}>
                        <span>Восстановить пароль</span>
                    </div>
                    {progress === 1 && 
                    <>
                        <p className={styles['recover-pass__subtitle']}>Чтобы восстановить пароль введите Ваш номер телефона или адрес электронной почты</p>
                        <div className={styles['recover-pass__buttons']}>
                            <button className={styles['recover-pass__buttons__mailactive']}>Электронная почта</button>
                            <button className={styles['recover-pass__buttons__tel']} onClick={() => {navigate("/passrecoverphone")}}>Номер телефона</button>
                        </div>
                        <FormInput title={"Email"} name={"text"} rules={{required: true}} type={"text"}
                            placeholder={"Ваша электронная почта"} register={register} errors={errors}/>
                    </>}
                    {progress === 2 &&
                    <>
                        <p className={styles['recover-pass__subtitle']}>Код на подтверждение был отправлен на почту asd*****@gmail.com</p>
                        <div className={'abc'}>
                            <FormInput title={"Код подтверждения"} name={"text"} rules={{required: true}} type={"text"}
                                                placeholder={"Введите код подтверждения"} register={register} errors={errors}/>
                            <div className={styles['recover-pass__code__more']} onClick={onCloseButtonClick}>
                                <p>Отправить код еще раз</p>
                            </div>
                        </div>
                    </>}
                    {progress === 3 &&
                    <>
                        <FormInput title={"Новый пароль"} name={"password"} rules={{required: true}} type={"password"}
                                        placeholder={"Введите пароль сюда..."} register={register} errors={errors}/>
                        <FormInput title={"Подтвердите новый пароль"} subTitle={"Минимальная длина 12 символов."} name={"password"} rules={{required: true}}
                                        type={"password"} placeholder={"Введите пароль сюда..."} register={register}/>
                    </>}
                    <BigButton doing={onSubmit} params={[progress]}>ПРОДОЛЖИТЬ</BigButton>
                    <div className= {styles['recover-pass__form__cancel']} onClick={() => {navigate(-1)}}>
                        <div onClick={onCloseButtonClick}>
                            <p className={styles['back-main']}>Отменить</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PassRecover;