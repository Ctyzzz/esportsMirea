// import React from 'react'
import styles from "./Tournaments.module.scss"
import cn from "classnames";
import rocket from "../../../assets/rocket.svg";
// import dota from "../../../assets/dota.svg";
import Button from "../../../UI/Button/Button"


const CurrentTournamentCard = ({image, day, hour, min, text}) => {
  return (
    <div
    className={styles.currentTournamentCard}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className={cn(styles.currentTournamentCard__content, styles.content)}>
      <p className={styles.content__dateTitle}>
        до конца регистрации
      </p>
      <p className={styles.content__date}>
        {day} день {hour} часов {min} минуты
      </p>
    </div>
    <div className={styles.currentTournamentCard__footer}>
      <span className={styles.text}>
        {text}
      </span>
      <div className={styles.buttonPanel}>
      <Button>зарегестрироваться</Button>
      <button className={styles.rocket}>
        <img src={rocket} alt="rocket" />
      </button>
      </div>
    </div>
  </div>
  )
}

export default CurrentTournamentCard