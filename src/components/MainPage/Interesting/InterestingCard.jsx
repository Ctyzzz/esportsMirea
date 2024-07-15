// import React from 'react'
import styles from "./Interesting.module.scss"
import cn from "classnames";


const InterestingCard = ({image, title, desc}) => {
  return (
    <div className={styles.interestingCard} style={{ backgroundImage: `url(${image})` }}>
        <div className={cn(styles.interestingCard__content, styles.content)}>
          <div className={styles.content__title}> {title} </div>
          <div className={styles.content__description}>{desc}</div>
        </div>
    </div>
  )
}

export default InterestingCard