import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import FormInput from '../../../UI/FormInput/FormInput';
import BigButton from '../../../UI/BigButton/BigButton';
import LksButton from '../../../UI/LksButton/LksButton,';

import styles from "./Registration.module.scss"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, logOut } from '../../../redux/slices/auth';

const Registration = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [sName, setSName] = useState('')
    const [tName, setTName] = useState('')
    const [nick, setNick] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [isSend, setIsSend] = useState(false)
    const [progress, setProgress] = useState(1)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPhoneValid, setIsPhoneValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [isSNameValid, setIsSNameValid] = useState(true)
    const [isNickValid, setIsNickValid] = useState(true)
    const [isDayValid, setIsDayValid] = useState(true)
    const [isMonthValid, setIsMonthValid] = useState(true)
    const [isYearValid, setIsYearValid] = useState(true)
    const [isAgreed, setIsAgreed] = useState(false)
    const [isValidCheckbox, setIsValidCheckbox] = useState(true)
    const dispatch = useDispatch()
    const token = useSelector(state=>state.authReducer.accessToken.token)
    const status = useSelector(state=>state.authReducer.accessToken.status)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();  
    const onSubmit = () => {
        const emailPattern = /^\S+@\S+\.\S+$/;
        const phonePattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        const emailRes = emailPattern.test(login)
        const phoneRes = phonePattern.test(login)
        const passRes = password.length >= 12
        setIsEmailValid(emailRes)
        setIsPhoneValid(phoneRes)
        setIsPasswordValid(passRes)
        if((emailRes || phoneRes)&&passRes){
            if (progress < 3) {
                if(progress>1){
                    const nameRes = name.length > 1
                    const SNameRes = sName.length > 1
                    setIsNameValid(nameRes)
                    setIsSNameValid(SNameRes)
                    if(nameRes&&SNameRes){
                        setProgress(prev => prev + 1)
                    }
                }
                else{
                    setProgress(prev => prev + 1)
                }
            } else {
                setIsNickValid(nick.length > 3)
                setIsDayValid(day.length > 1)
                setIsMonthValid(month.length > 1)
                setIsYearValid(year.length > 2)
                setIsValidCheckbox(isAgreed)
                if (login && password && name && sName && nick.length < 3 && day.length > 1 && month.length > 1 && year.length > 3 && isAgreed) {
                    const date = year + '-' + month + '-' + day;
                    dispatch(fetchRegister({
                        login,
                        password,
                        username: nick,
                        firstname: name,
                        lastname: sName,
                        birthday: date,
                        patronymic: tName&&tName
                    }));
                    setIsSend(true);
                } else {
                    console.error("Не все поля заполнены");
                }
            }
        }
        else{
            console.error("Некорректный формат введенных данных");
        }
    };
    useEffect(() => {
        if (token && status && isSend) {
            navigate('/profile')
        }
    }, [token, status, isSend]);
    return (
        <div className={styles["registration"]}>
                <div className={styles['progress']}>
                    {[1, 2, 3].map((step, index) => (
                        <div
                            key={index}
                            className={`${styles['dot']} ${progress >= step && styles['dot-white']}`}
                            onClick={() => {
                                if (progress > step) {
                                    setProgress(step);
                                }
                            }}
                        ></div>
                    ))}
                </div>
                <form onSubmit={(e)=>e.preventDefault()} className={styles["reg-form"]}>
                    <div className={styles["reg-form__title"]}>
                        {progress===1?<span>Регистрация</span>:<span>Общие сведения</span>}
                    </div>
                    {progress===1&&
                    <>
                        <FormInput title={"Email или телефон"} name={"login"} rules={{required: true}} type={"login"}
                               placeholder={"Ваша электронная почта или телефон"} register={register} errors={errors}
                               value={login} setValue={setLogin} isInputValid={isEmailValid||isPhoneValid}/>
                        {(!isEmailValid && !isPasswordValid)&&<p className={styles.error}>Некорректный email или телефон</p>}
                        <FormInput title={"Пароль"} subTitle={"Минимальная длина 12 символов."} name={"password"} rules={{required: true}}
                               type={"password"} placeholder={"Введите текст здесь..."} register={register}
                               value={password} setValue={setPassword} isInputValid={isPasswordValid}
                               />
                        {(!isPasswordValid)&&<p className={styles.error}>Некорректный пароль</p>}
                    </>}
                    {progress===2&&
                    <>
                        <FormInput title={"Имя"} name={"name"} rules={{required: true}} type={"name"}
                               placeholder={"Введите свое имя"} register={register} errors={errors}
                               value={name} setValue={setName} isInputValid={isNameValid}/> 
                        {(!isNameValid)&&<p className={styles.error}>Некорректное Имя</p>}
                        <FormInput title={"Фамилия"} name={"secondName"} rules={{required: true}}
                               type={"name"} placeholder={"Введите свою фамилию"} register={register}
                               value={sName} setValue={setSName} isInputValid={isSNameValid}
                               />
                        {(!isSNameValid)&&<p className={styles.error}>Некорректная Фамилия</p>}
                        <FormInput title={"Отчество (при наличии)"} name={"thirdName"} rules={{required: true}}
                               type={"name"} placeholder={"Введите свое отчество"} register={register}
                               value={tName} setValue={setTName} isInputValid={true}
                               />
                    </>}
                    {progress===3&&
                    <>
                        <FormInput title={"Никнэйм"} name={"nick"} rules={{required: true}}
                               type={"name"} placeholder={"Введите свой никнейм"} register={register}
                               value={nick} setValue={setNick} isInputValid={isNickValid}
                               />
                        {(!isNickValid)&&<p className={styles.error}>Слишком короткий никнэйм</p>}
                        <div className={styles.date}>
                            <FormInput title={"Дата рождения"} name={"day"} rules={{required: true}}
                                type={"number"} placeholder={"День(01)"} register={register}
                                value={day} setValue={setDay} isInputValid={isDayValid}
                            />
                            <FormInput title={""} name={"month"} rules={{required: true}}
                                type={"number"} placeholder={"Месяц(01)"} register={register}
                                value={month} setValue={setMonth} isInputValid={isMonthValid}
                            />
                            <FormInput title={""} name={"year"} rules={{required: true}}
                                type={"number"} placeholder={"Год(2000)"} register={register}
                                value={year} setValue={setYear} isInputValid={isYearValid}
                            />
                        </div>
                        {(!isDayValid || !isMonthValid || !isYearValid)&&<p className={styles.error}>Некорректный формат даты</p>}
                        <label className={styles["reg-form__checkbox"]}>
                            <div className={styles["subTitle"]}>
                                <div className={["subtitle__checkBox"]}>
                                    <input type="checkbox" 
                                    className={`${styles["custom-checkbox"]} ${!isValidCheckbox&&styles["checkbox-invalid"]}`} 
                                    id="agreement" name="agreement" value={isAgreed} onChange={()=>{setIsAgreed(prev=>!prev)}}/>
                                <label for="agreement">Я принимаю пользовательское соглашение и даю согласие на обработку персональных данных</label>
                                </div>
                            </div>
                        </label>
                    </>}
                    <div className={styles["reg-form__button"]}>
                        <BigButton doing={onSubmit} params={[progress]}>Продолжить</BigButton>
                    </div>
                    {progress===1&&<LksButton />}
                </form>
        </div>
    );
};

export default Registration;