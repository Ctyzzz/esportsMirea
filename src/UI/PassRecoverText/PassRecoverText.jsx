import styles from "./PassRecoverText.module.scss"

const PassRecoverText = ({title, subtitle}) => {
    return(
        <>
            <div className={styles['text']}>
                <p className={styles['text-title']}>{title}</p>
                <p className={styles['text-subtitle']}>{subtitle}</p>
            </div>
        </>
    )
}

export default PassRecoverText