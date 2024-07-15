import React from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = ({ id, name }) => {
  return (
    <>
        <div className={styles.checkbox}>
            <input className={styles.checkbox__input} type="checkbox" id={id} name={id}/>
            <label className={styles.checkbox__label} htmlFor={id}>{name}</label>
        </div>
    </>
  )
}

export default Checkbox