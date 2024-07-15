import React from 'react'
import styles from './SettingsIntegrations.module.scss'

const IntegrationCard = ({ icon, title, account, status }) => {
  return (
    <>
        <div className={styles["integrations-cards__card"]}>
            <div className={styles['integrations-cards__info']}>
                <img src={icon} alt="" />
                <div className={styles['card-info']}>
                    <p className={styles['card-info__title']}>{title}</p>
                    <p className={styles['card-info__nickname']}>{status ? account : <a className={styles['card-info__nickname_inactive']}>Привзяать аккаунт</a>}</p>
                </div>
            </div>
            <button className={styles['integrations-cards__button']}>{status ? <span className={styles.cross}>+</span>  : <span className={styles.plus}>+</span> }</button>
        </div>
    </>
  )
}

export default IntegrationCard