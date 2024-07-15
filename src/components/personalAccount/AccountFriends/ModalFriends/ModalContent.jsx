
import Search from '../../../../UI/Search/Search';

import styles from './Modal.module.scss'
import modalFriends from '../../../../assets/personalAccount/friends/modalFriends.svg'
import ModalCard from './ModalCard';


const ModalContent = ({onCloseButtonClick}) => {

  return(
    <>
      <div className={styles["modal"]}>
        <div className={styles["modal-content"]}>
          <div className={styles["modal-header"]}>
              <div className={styles["modal-header__title"]}>
                <img draggable='false' src={modalFriends} alt="" />
                <p>Поиск друзей</p>
              </div>
              <div className={styles["modal-header__exit"]} onClick={onCloseButtonClick}>&#10006;</div>
          </div>
          <div className={styles["modal-content__search"]}>
            <Search />
          </div>
          <div className={styles["modal-content__cards"]}>
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ModalContent;