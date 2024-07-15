import styles from "./FriendsLink.module.scss"

const FriendsLink = ({ title, path, friendsLink }) => {

  return (
    <>
        <div className={friendsLink === path ? `${styles['menu-item']} ${styles['menu-item_active']}` : styles['menu-item']}>
            <button>{title}</button>
        </div>
    </>
  )
}

export default FriendsLink