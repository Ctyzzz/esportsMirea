import FriendsHeader from './FriendsHeader';
import NoFriends from './NoFriends';
import Modal from '../../../UI/Modal/Modal';

import styles from "./AccountFriends.module.scss"
import useModal from '../../../hooks/useModal';
import { useSelector } from 'react-redux';
import FriendsCards from './FriendsCards/FriendsCards';
import ModalContent from './ModalFriends/ModalContent';

const AccountFriends = () => {

    const [isShowingModal, toggleModal] = useModal();
    const { friendsLink } = useSelector(state => state.navLinkReducer)
    const friends = true

    return(
        <div className={styles.friends}>
            <Modal show={isShowingModal}>
                <ModalContent onCloseButtonClick={toggleModal}/>
            </Modal>
            <FriendsHeader friendsLink={friendsLink} show={isShowingModal} onOpenButtonClick={toggleModal} />
            {
               friends 
               ? <FriendsCards />
               : <NoFriends friendsLink={friendsLink}/>
            }
        </div>
    )
}

export default AccountFriends 