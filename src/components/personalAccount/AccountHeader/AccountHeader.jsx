import React from "react" 
import styles from './AccountHeader.module.scss' 
import profileIcon from '../../../assets/personalAccount/profileIcon.svg' 
 
const AccountHeader = ({ username, firstname, lastname, roles = [], avatar }) => { 
  const [status, setStatus] = React.useState(true); 
 
  return ( 
    <div className={styles.account__header}> 
      <div className={styles['header-flex']}> 
        <div className={styles["header-flex__image"]}> 
          <img src={avatar || profileIcon} draggable="false" alt="avatar" style={!avatar && {objectFit: 'contain'}}/> 
          {status && <div className={styles.online}></div>} 
        </div> 
        <div className={`${styles["header-flex__info"]} ${styles.info}`}> 
          <div className={styles.info__role}> 
            {roles && roles.map((role, index) => ( 
              <p key={index} className={styles[role.public_name]}> 
                {role.public_name} 
              </p> 
            ))} 
          </div> 
          <p className={styles.info__nickname}>{username}</p> 
          <p className={styles.info__name}>{firstname} {lastname}</p> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default AccountHeader;