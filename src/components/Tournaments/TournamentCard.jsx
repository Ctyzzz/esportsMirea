import Button from "../../UI/Button/Button"; 
import styles from "./Tournament.module.scss" 
import cn from "classnames"; 
import {Link} from 'react-router-dom'
 
export const TournamentsCard = ({date, text, image, logo}) => { 
  return ( 
    <div style={{backgroundImage: `url(${image})`}} className={styles.tournamentCard}> 
      <div className={cn(styles.tournamentCard__content, styles.content)}> 
        <p className={styles.content__dateTitle}>Начало турнира</p> 
        <p className={styles.content__date}>{date}</p> 
      </div> 
      <div className={styles.tournamentCard__footer}> 
      <span className={styles.text}> 
        {text} 
      </span> 
      <div className={styles.button}> 
        <Link to="/tournament/tournamentinfo"><Button>Подробнее</Button></Link> 
        <img className={styles.logo} src={logo} alt="logo" /> 
      </div> 
      </div> 
    </div> 
  ); 
};

export const TournamentsPastCard = ({date, text, image, logo}) => { 
  return ( 
    <div style={{backgroundImage: `url(${image})`}} className={styles.tournamentCard}>
      <div className={styles.tournamentCard__pastFooter}> 
      <span className={styles.text}> 
        {text} 
      </span> 
      <div className={styles.button}> 
        <Link to="/tournament/tournamentfinished"><Button>Подробнее</Button></Link> 
        <img className={styles.logo} src={logo} alt="logo" /> 
      </div> 
      </div> 
    </div> 
  ); 
};

export const TournamentsCurrentCard = ({date, text, image, logo}) => { 
  return ( 
    <div style={{backgroundImage: `url(${image})`}} className={styles.tournamentCard}>
      <div className={styles.tournamentCard__pastFooter}> 
      <span className={styles.text}> 
        {text} 
      </span> 
      <div className={styles.button}> 
        <Button>Подробнее</Button> 
        <img className={styles.logo} src={logo} alt="logo" /> 
      </div> 
      </div> 
    </div> 
  ); 
};