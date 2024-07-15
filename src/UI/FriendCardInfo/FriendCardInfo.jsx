import styles from './FriendCardInfo.module.scss'

const FriendCardInfo = ({testIcon, nickname, name}) => {
  return (
    <>
        <div className={styles["friend-card-info"]}>
            <img src={testIcon} alt="" />
            <div className={styles["card-nickname"]}>
                <p className={styles["card-nickname__up"]}>esebchugg</p>
                <p className={styles["card-nickname__down"]}>Езепчук Кирилл</p>
            </div>
        </div>
    </>
  )
}

export default FriendCardInfo