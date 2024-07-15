import styles from './AccountTitles.module.scss'

const AccountTitles = ({ img, title }) => {
  return (
    <div className={styles.account__title}>
        <img src={img} alt="" />
        <h3>{title}</h3>   
    </div>
  )
}

export default AccountTitles