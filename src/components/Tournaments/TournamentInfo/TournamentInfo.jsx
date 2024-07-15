import { useNavigate } from "react-router-dom";
import { Link }from "react-router-dom";

import TourInfo from "../../../UI/TourInfo/TourInfo";
import styles from "./TournamentInfo.module.scss";
import mode from "../../../assets/tournaments/mode.svg";
import participants from "../../../assets/tournaments/participants.svg";
import time from "../../../assets/tournaments/time.svg";
import start from "../../../assets/tournaments/start.svg";
import qual from "../../../assets/tournaments/qual.svg";
import groupstage from "../../../assets/tournaments/groupstage.svg";
import cup from "../../../assets/tournaments/cup.svg";
import line from "../../../assets/tournaments/line.svg";
import twitch from "../../../assets/tournaments/twitch.svg";
import red from "../../../assets/tournaments/red.svg";
import gray from "../../../assets/tournaments/gray.svg";

const TournamentInfo = () => {
  const navigate = useNavigate();
  navigate("/tournamentinfo");
  return (
    <div className={styles["tournamentinfo"]}>
      <div className={styles["tournamentinfo-imageblock"]}>
      <Link to="/tournament"><div className={styles["tournamentinfo-imageblock__back"]}></div></Link>
        <div className={styles["tournamentinfo-imageblock__name"]}>
          <p className={styles["tournamentinfo-imageblock__name__text"]}>
            внутривузовский турнир <br />
            по league of legends
          </p>
          <div className={styles["tournamentinfo-imageblock__name__reg"]}>
            <button
              className={styles["tournamentinfo-imageblock__name__reg__button"]}
            >
              Регистрация
            </button>
            <p className={styles["tournamentinfo-imageblock__name__reg__time"]}>
              12 дней 18 часов 20 минут
            </p>
          </div>
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
              src={time}
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
        <div className={styles["tournamentinfo-maininfo__prizes"]}>
          <p className={styles["tournamentinfo-maininfo__prizes__title"]}>
            Призовой фонд
          </p>
          <div className={styles["tournamentinfo-maininfo__prizes__places"]}>
            <img src={line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__prizes__places__text"]
              }
            >
              <p
                className={
                  styles["tournamentinfo-maininfo__prizes__places__text__place"]
                }
              >
                1 место:
              </p>
              <p
                className={
                  styles["tournamentinfo-maininfo__prizes__places__text__prize"]
                }
              >
                Наушники Beyerdynamic DT 770 Pro
              </p>
            </div>
            <img src={line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__prizes__places__text"]
              }
            >
              <p
                className={
                  styles["tournamentinfo-maininfo__prizes__places__text__place"]
                }
              >
                2 место:
              </p>
              <p
                className={
                  styles["tournamentinfo-maininfo__prizes__places__text__prize"]
                }
              >
                Игровая мышь Logitech G G502 Hero
              </p>
            </div>
            <img src={line} alt="line" />
            <div
              className={
                styles["tournamentinfo-maininfo__prizes__places__text"]
              }
            >
              <p
                className={
                  styles["tournamentinfo-maininfo__prizes__places__text__place"]
                }
              >
                3 место:
              </p>
              <p
                className={
                  styles["tournamentinfo-maininfo__prizes__places__text__prize"]
                }
              >
                Коврик A4Tech X7-200MP
              </p>
            </div>
            <img src={line} alt="line" />
          </div>
          <p className={styles["tournamentinfo-maininfo__prizes__title2"]}>
            Смотреть все призы
          </p>
          <div className={styles["tournamentinfo-maininfo__prizes__buttons"]}>
            <div
              className={styles["tournamentinfo-maininfo__prizes__buttons__b1"]}
            >
              <img
                className={
                  styles["tournamentinfo-maininfo__prizes__buttons__b1__twitch"]
                }
                src={twitch}
                alt="twitch"
              />
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__prizes__buttons__b1__channel"
                  ]
                }
              >
                rtu_mirea1
              </p>
              <img
                className={
                  styles["tournamentinfo-maininfo__prizes__buttons__b1__online"]
                }
                src={red}
                alt="red"
              />
            </div>
            <div
              className={styles["tournamentinfo-maininfo__prizes__buttons__b2"]}
            >
              <img
                className={
                  styles["tournamentinfo-maininfo__prizes__buttons__b2__twitch"]
                }
                src={twitch}
                alt="twitch"
              />
              <p
                className={
                  styles[
                    "tournamentinfo-maininfo__prizes__buttons__b2__channel"
                  ]
                }
              >
                alderandyo
              </p>
              <img
                className={
                  styles["tournamentinfo-maininfo__prizes__buttons__b2__online"]
                }
                src={gray}
                alt="gray"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentInfo;
