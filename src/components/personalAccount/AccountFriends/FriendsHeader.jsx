import { useDispatch } from 'react-redux'

import Button from '../../../UI/Button/Button';
import Search from '../../../UI/Search/Search';
import FriendsLink from "../../../UI/FriendsLink/FriendsLink";

import styles from './AccountFriends.module.scss'
import { friendslinks } from "../../../const";
import { setFriendsLink } from '../../../redux/slices/link'

const FriendsHeader = ({ onOpenButtonClick, friendsLink }) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className={styles['friends__header']}>
        <div className={styles["friends-menu"]}>
          {
            friendslinks.map((item, index) => {
              return (
                <div key={index} onClick={() => dispatch(setFriendsLink(item.path))}>
                  <FriendsLink path={item.path} friendsLink={friendsLink} title={item.title} />
                </div>
              )
            })
          }
        </div>
        <div className={styles["friends__search"]}>
          <Search />
          <div className={styles['search__button']} onClick={onOpenButtonClick}>
            <Button>+ Найти друзей</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsHeader