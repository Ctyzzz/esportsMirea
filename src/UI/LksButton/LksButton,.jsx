import styles from './LksButton.module.scss'
import lksLogo from "../../assets/lksLogo.svg"

const LksButton = () => {
  return (
    <>
        <div className={styles.logWithLKS}>
            <img src={lksLogo} alt="logoLKS"/>
            <p>Войти через лкс</p>
        </div>
    </>
  )
}

export default LksButton