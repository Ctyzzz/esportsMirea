import { useForm } from 'react-hook-form';

import FormInput from './../../../UI/FormInput/FormInput';
import styles from './ModalContent.module.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, logOut } from '../../../redux/slices/auth';
import { Link, useNavigate } from 'react-router-dom';
import BigButton from '../../../UI/BigButton/BigButton';

const FormsModal = ({ close }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const status = useSelector(state => state.authReducer.accessToken.status)
    const [isSend, setIsSend] = useState(false)
    const [isError, setIsError] = useState('no')
    const navigate = useNavigate()
    const onSubmit = (login, password) => {
        dispatch(fetchLogin({
            login: login,
            password: password
        }))
        setIsSend(true)
    }
    useEffect(() => {
        if (isSend && status === 'loaded') {
            close()
            navigate('/profile')
        }
        else if (status === 'loading') {
            setIsError('loading')
        }
        else if (status === 'error') {
            setIsError(prev => prev === 'loading' ? 'yes' : 'no')
        }
    }, [status])
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles["modal-content__form"]}>
                <FormInput title={"Email или телефон"} name={"login"} rules={{ required: true }} type={"login"}
                    placeholder={"Ваша электронная почта или телефон"} register={register} errors={errors}
                    value={login} setValue={setLogin} isInputValid={!(isError === 'yes')}
                />
                <FormInput title={"Пароль"} name={"password"} rules={{ required: true }}
                    type={"password"} placeholder={"Введите текст здесь..."} register={register}
                    value={password} setValue={setPassword} isInputValid={!(isError === 'yes')}
                />
                {isError === 'yes' && <p className={styles['error']}>Неверный логин или пароль</p>}
                <Link to='/passrecover'>Забыли пароль?</Link>
                <BigButton doing={onSubmit} params={[login, password]}>Войти</BigButton>
            </form>
            {/* {isLoading && <p>подождите секунду...</p>} */}
        </>
    )
}

export default FormsModal