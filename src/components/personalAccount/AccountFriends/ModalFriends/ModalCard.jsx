import Button from '../../../../UI/Button/Button'; 
import FriendCardInfo from '../../../../UI/FriendCardInfo/FriendCardInfo';

import styles from './Modal.module.scss'
import testIcon from '../../../../assets/personalAccount/friends/testIcon.svg'

const ModalCard = () => {
  return (
    <>
        <div className={styles["content-card"]}>
            <FriendCardInfo testIcon={testIcon} nickname={'esebchugg'} name={'Кирилл Езепчук'}/>
            <div className={styles["content-card__button"]}>
                <Button>+ Добавить</Button>
            </div>
        </div>   
    </>
  )
}

export default ModalCard