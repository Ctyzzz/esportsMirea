import React from 'react'

import BlockInProgress from '../../../UI/BlockInProgress/BlockInProgress'
import Checkbox from '../../../UI/Checkbox/Checkbox';

import styles from './SettingsNotifications.module.scss'
import { notifications } from '../../../const';
import SaveButton from '../../../UI/SaveButton/SaveButton';


const SettingsNotifications = () => {
  return (
    <>
      <div className={styles.notifications}>
        <div className={styles.notifications__list}>
          {notifications.map((item, index) => {
            return(
              <Checkbox key={index} id={item.id} name={item.name}  />
            )
          })}
        </div>
        <SaveButton />
      </div>
    </>
  )
}

export default SettingsNotifications