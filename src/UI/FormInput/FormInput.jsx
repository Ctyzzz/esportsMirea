import styles from './FormInput.module.scss'

const FormInput = ({ title, subTitle, errors, name, rules, register, value, setValue, isInputValid, ...rest }) => {
    return (
        <>
            <div className={styles.inputform} >
                <label htmlFor={name} className={styles.inputform__label}>
                    {title}
                </label>
                <input {...register(name, rules)} {...rest}
                    className={`${styles.inputform__input} ${!isInputValid ? styles.invalid : ''}`}
                    value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            {subTitle && (
                <div className={styles.subtitle}>
                    {subTitle ? subTitle : ""}
                </div>
            )}

        </>
    );
};

export default FormInput;