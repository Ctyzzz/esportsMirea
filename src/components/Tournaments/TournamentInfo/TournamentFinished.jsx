import { useNavigate } from "react-router-dom";
import { Link }from "react-router-dom";

import TourInfo from "../../../UI/TourInfo/TourInfo";
import styles from "./TournamentFinished.module.scss";

import mode from "../../../assets/tournaments/mode.svg";
import participants from "../../../assets/tournaments/participants.svg";
import cup from "../../../assets/tournaments/cup.svg";
import timer from "../../../assets/tournaments/timer.svg";
import qual from "../../../assets/tournaments/qual.svg";
import start from "../../../assets/tournaments/start.svg";
import groupstage from "../../../assets/tournaments/groupstage.svg";
import Line from "../../../assets/tournaments/line.svg";

const TournamentFinished = () => {
  const navigate = useNavigate();
  navigate("/tournamentfinished");
  return (
    <div className={styles["tournamentinfo"]}>
      <div className={styles["tournamentinfo-imageblock"]}>
      <Link to="/tournament"><div className={styles["tournamentinfo-imageblock__back"]}></div></Link>
        <div className={styles["tournamentinfo-imageblock__name"]}>
          <p className={styles["tournamentinfo-imageblock__name__text"]}>
            межвузовский турнир
            <br />
            по minecraft
          </p>
        </div>
      </div>
      <ul className={styles["tournamentinfo-links"]}>
        <li>ИНФОРМАЦИЯ</li>
        <li>ПРАВИЛА</li>
        <li>ПРИЗЫ</li>
        <li>СЕТКА</li>
        <li>КОМАНДЫ</li>
      </ul>
      <div className={styles["tournamentinfo-maininfo"]}>
        <div className={styles["tournamentinfo-maininfo__game"]}>
          <div className={styles["tournamentinfo-maininfo__game__mar"]}>
            <TourInfo src={mode} title1={"Режим:"} title2={"5 на 5"} />
            <TourInfo
              src={participants}
              title1={"Участники:"}
              title2={"10/128"}
            />
            <TourInfo
              src={timer}
              title1={"Регистрация до:"}
              title2={"24 апреля 2023"}
            />
            <TourInfo
              src={start}
              title1={"Начало турнира:"}
              title2={"1  мая 2023"}
            />
            <TourInfo
              src={qual}
              title1={"Квалификации:"}
              title2={"до 7 мая 2023"}
            />
            <TourInfo
              src={groupstage}
              title1={"Групповая стадия"}
              title2={"до 15 мая 2023"}
            />
            <TourInfo
              src={cup}
              title1={"Плей-офф"}
              title2={"15 - 16 мая 2023"}
            />
          </div>
        </div>
        <div className={styles["tournamentinfo-maininfo__position"]}>
          <p className={styles["tournamentinfo-maininfo__position__title"]}>
            результаты турнира
          </p>
          <div className={styles["tournamentinfo-maininfo__position__places"]}>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                1 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                Team Spirit
              </p>
            </div>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                2 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                Team VietnamBoyz
              </p>
            </div>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                3 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                DreamEasters
              </p>
            </div>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                4 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                Team ABC
              </p>
            </div>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                5 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                Looking For Org
              </p>
            </div>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                6 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                PENTA SPORTS
              </p>
            </div>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                7 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                Cloud 9
              </p>
            </div>
            <img src={Line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__position__places__text"]
              }
            >
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__place"
                  ]
                }
              >
                8 место:
              </p>
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__position__places__text__prize"
                  ]
                }
              >
                Astralis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentFinished;
