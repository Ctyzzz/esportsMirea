import React from "react";

import styles from "./Proposition.module.scss";

import microphone from "../../../assets/gridservices/microphone.svg";
import key from "../../../assets/gridservices/key.svg";
import infinity from "../../../assets/gridservices/infinity.svg";
import arrowprev from "../../../assets/gridservices/arrowprev.svg";
import arrownext from "../../../assets/gridservices/arrownext.svg";

//import Scroll from '../Proposition/Scroll'

const proposition = () => {
  return (
    <div className={styles["proposition"]}>
      <div className={styles["proposition-services"]}>
        <h1>НАШИ УСЛУГИ</h1>
        <p className={styles["proposition-services__title"]}>
          Что мы можем вам предложить:
        </p>
      </div>
      <div className={styles["proposition-cards"]}>
        <div className={styles["proposition-card"]}>
          <div className={styles["proposition-cards__micro__logocase"]}>
            <img
              className={styles["proposition-cards__micro__logocase__logos"]}
              src={microphone}
              alt="microphone"
            />
          </div>
          <div className={styles["proposition-cards__description"]}>
            <h2>Трансляция турнира</h2>
            <p className={styles["proposition-cards__subtitle"]}>
              Наши комментаторы с радостью <br />
              проведут трансляцию матчей
            </p>
          </div>
        </div>
        <div className={styles["proposition-card"]}>
          <div className={styles["proposition-card__key"]}>
            <div className={styles["proposition-cards__key__logocase"]}>
              <img
                className={styles["proposition-cards__key__logocase__logos"]}
                src={key}
                alt="key"
              />
            </div>
          </div>
          <div className={styles["proposition-cards__description"]}>
            <h2>Аренда помещения</h2>
            <p className={styles["proposition-cards__subtitle"]}>
              Вы можете арендовать нашу площадку <br />
              для проведения <br />
              своего мероприятия
            </p>
          </div>
        </div>
        <div className={styles["proposition-card"]} nth-child>
          <div className={styles["proposition-cards__infinity__logocase"]}>
            <img
              className={styles["proposition-cards__infinity__logocase__logos"]}
              src={infinity}
              alt="infinity"
            />
          </div>
          <div className={styles["proposition-cards__description"]}>
            <h2>Турнир под ключ</h2>
            <p className={styles["proposition-cards__subtitle"]}>
              Мы берём на себя все обязательства <br />
              по организации, офорлмению и <br />
              проведению вашего турнира
            </p>
          </div>
        </div>
        <div className={styles["proposition-cards__button"]}>
          <div className={styles["proposition-cards__button__prev"]}>
            <button
              className={styles["proposition-cards__button__prev__style"]}
            >
              <img
                className={
                  styles["proposition-cards__button__next__style__background"]
                }
                src={arrowprev}
                alt="arrow prev"
              />
            </button>
          </div>
          <div className={styles["proposition-cards__button__next"]}>
            <button
              className={styles["proposition-cards__button__next__style"]}
            >
              <img
                className={
                  styles["proposition-cards__button__next__style__background"]
                }
                src={arrownext}
                alt="arrow next"
              />
            </button>
            v
          </div>
        </div>
      </div>
    </div>
  );
};

export default proposition;
