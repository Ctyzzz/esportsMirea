import { useForm } from 'react-hook-form';

import FormInput from '../../../../UI/FormInput/FormInput';

import styles from './PassRecover.module.scss'

const FormsPass = (onCloseButtonClick) => {


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = () => {}

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className={styles['forms']}>
            <FormInput title={"Новый пароль"} name={"password"} rules={{required: true}} type={"password"}
                               placeholder={"Введите пароль сюда..."} register={register} errors={errors}/>
            <FormInput title={"Подтвердите новый пароль"} name={"password"} rules={{required: true}}
                               type={"password"} placeholder={"Введите пароль сюда..."} register={register}/>
        </form>
    </>
  )
}

export default FormsPass
