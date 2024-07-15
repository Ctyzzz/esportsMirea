import React from 'react'
import styles from './SaveButton.module.scss'

const SaveButton = ({ disabled, doing, params = [] }) => {
  return (
    <button className={styles["save-button"]} disabled={disabled} onClick={() => doing(...params)}>Сохранить</button>
  )
}

export default SaveButton