import Button from '../../../../UI/Button/Button'
import FriendCardInfo from '../../../../UI/FriendCardInfo/FriendCardInfo'

import styles from '../AccountFriends.module.scss'
import { friendsicons } from '../../../../data/friendsicons'
import testIcon from '../../../../assets/personalAccount/friends/testIcon.svg'

const FriendCard = () => {
  return (
    <>
        <div className={styles["friend-card"]}>
            <FriendCardInfo testIcon={testIcon} nickname={'esebchugg'} name={'Кирилл Езепчук'}/>
            <div className={styles["friend-card__icons"]}>
              {friendsicons.icons.map((icon, index) => {
                return(
                  <img draggable='false' key={index} src={icon} alt="" />
                )
              })}
            </div>
            <div className={styles['friend-card__button']}>
              <Button >Убрать из друзей</Button>
            </div>
        </div>
    </>
  )
}

export default FriendCard