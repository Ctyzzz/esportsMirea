
import FriendCard from './FriendsCard';

import styles from '../AccountFriends.module.scss'

const FriendsCards = () => {
  return (
    <>
        <div className={styles['friends-cards']}>
            <div className={styles['table-header']}>
                <h3 className={styles["table-header__name"]}>Никнейм</h3>
                <h3 className={styles["table-header__time"]}>Социльные сети</h3>
            </div>
            <div className={styles['friends-cards__main']}>
              <FriendCard />
            </div>
        </div>
    </>
  )
}

export default FriendsCards