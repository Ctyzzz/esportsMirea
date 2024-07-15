import { useNavigate } from 'react-router-dom'
// import styles from "./Tournament.module.scss";
// import line from "../../assets/tournaments/line1.svg"
// import { TournamentsCard } from "../../components/Tournaments/TournamentCard";
// import { TournamentsPastCard } from "../../components/Tournaments/TournamentCard";
// import { TournamentCardsData } from "../../data/tournament";
// import { TournamentCardsCurrent } from "../../data/tournament";
// import { TournamentCardsPast } from "../../data/tournament";
// import { useEffect, useState } from 'react';
import InDeveloping from '../InDeveloping/InDeveloping';

const Tournament = () => {
  const navigate = useNavigate()
  navigate('/tournament')
  return (
    <div>
      <div>
        <InDeveloping label="/Tournaments/" />
      </div>
    </div>
    // <div className={styles.tournamentsWrapper}>
    //   <p className={styles.tournamentsWrapper__title}>ближайшие турниры</p>
    //   <div className={styles.tournamentsWrapper__content}>
    //     {TournamentCardsData.map((obj, i) => (
    //       <div className={styles.content__div} key={i + 1}>
    //         <TournamentsCard date={obj.date} text={obj.text} image={obj.image} logo={obj.logo} />
    //       </div>
    //     ))}
    //   </div>

    //   <p className={styles.tournamentsWrapper__title}>текущие турниры</p>
    //   <div className={styles.tournamentsWrapper__content}>
    //     {TournamentCardsCurrent.map((obj, i) => (
    //       <div className={styles.content__div} key={i + 1}>
    //         <TournamentsCard date={obj.date} text={obj.text} image={obj.image} logo={obj.logo} />
    //       </div>
    //     ))}
    //   </div>

    //   <p className={styles.tournamentsWrapper__title}>прошедшие турниры</p>
    //   <div className={styles.tournamentsWrapper__content}>
    //     {TournamentCardsPast.map((obj, i) => (
    //       <div className={styles.content__div} key={i + 1}>
    //         <TournamentsPastCard text={obj.text} image={obj.image} logo={obj.logo} />
    //       </div>
    //     ))}
    //   </div>

    // </div>
  );
};

export default Tournament;