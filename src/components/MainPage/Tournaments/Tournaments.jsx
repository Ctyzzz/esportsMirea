// import React from 'react'
import { TournamentCard } from "../../../components/MainPage/Tournaments/TournamentCard";
import {
  TournamentData,
  CurrentTournamentData,
} from "../../../data/Tournaments";
import H2 from "../../../UI/H2/H2";
import CurrentTournamentCard from "../../../components/MainPage/Tournaments/CurrentTournamentCard";
import styles from "./Tournaments.module.scss";

const Tournaments = () => {
  return (
    <div className={styles.tournamentsWrapper}>
      <H2>ближайшие турниры</H2>
      <div className={styles.tournamentsWrapper__content}>
        {CurrentTournamentData.map((obj, i) => (
          <div key={i + 1}>
            <CurrentTournamentCard
              image={obj.image}
              day={obj.day}
              hour={obj.hour}
              min={obj.min}
              text={obj.text}
            />
          </div>
        ))}
        {TournamentData.map((obj, i) => (
          <div key={i + 1}>
            <TournamentCard date={obj.date} text={obj.text} image={obj.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
