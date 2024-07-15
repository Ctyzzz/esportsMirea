import React from 'react'

import styles from './AccountTournaments.module.scss' 
import Button from './../../../UI/Button/Button';

const SliderCard = ({ img, date, game }) => {
  return (
    <div className={styles['slider-item']}>
            <div className={styles['slider-item__gradient']}>
                <img src={img} alt="" />
            </div>
            <div className={`${styles['slider-item__label']} ${styles.label}`}>
              <p className={styles.label__upper}>Начало турнира</p>
              <p className={styles.label__lower}>{date}</p>
            </div>
            <span className={styles['slider-item__text']}>внутривузовсий <br />турнир по <br />{game}</span>
            <div className={styles['slider-item__button']}>
              <Button>Подробнее</Button>
            </div>
    </div>
  )
}

export default SliderCard

