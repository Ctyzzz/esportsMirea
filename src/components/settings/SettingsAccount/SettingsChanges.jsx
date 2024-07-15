import React from 'react'
import styles from './SettingsAccount.module.scss'
import header from '../../../assets/personalAccount/account/header.svg'
import camera from '../../../assets/personalAccount/settings/camera.svg'
import pencil from '../../../assets/personalAccount/settings/pencil.svg'
import profileIcon from '../../../assets/personalAccount/profileIcon.svg'
import { useSelector } from 'react-redux'

const SettingsChanges = () => {
    const me = useSelector(state=>state.profileReducer.me.data)
    return (
        <>
            <div className={styles.settings__background}>
                <div className={styles["changing-background"]}>
                {/* <label>
                    <input type="file" />
                    <div className={styles['changing-background__text']}>
                    <p>Изменить обложку</p>
                    <img src={pencil} alt="" draggable='false'/>
                    </div>
                </label> */}
                </div>
                <div className={styles['changing-avatar']}>
                <img src={me.avatar_url?me.avatar_url:profileIcon} style={(!me.avatar_url)&&{objectFit: 'contain'}} className={styles['changing-avatar__image']} alt="" />
                {/* <img src={camera} className={styles['changing-avatar__camera']} alt="" />
                <p className={styles['changing-avatar__text']}>Нажмите, чтобы<br /> изменить фотографию</p>
                <input type="file" title='' /> */}
                </div>
            </div>
        </>
    )
}

export default SettingsChanges