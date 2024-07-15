import { useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import profileIcon from "../../assets/header/profileIcon.svg";
import { headerLinks } from "../../const";
import { setPickedCategory } from "../../redux/slices/reservation";
import logo from "../../assets/logo.svg";

import styles from "./BurgerMenu.module.scss";


function BurgerMenu({ isAuth, onOpenButtonClick, isBurger, setIsBurger, me }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.body;

    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768 && isBurger) {
        body.style.overflowY = "hidden";
      } else {
        body.style.overflowY = "auto";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      body.style.overflowY = "auto";
    };
  }, [isBurger]);

  return (
    <>
      <button
        className={classNames(styles["burger-button"], {
          [styles["burger-button-active"]]: isBurger,
        })}
        onClick={() => {
          setIsBurger((prev) => !prev);
        }}
      >
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
      </button>
      {isBurger && (
        <>
          <div
            className={styles["cover"]}
            onClick={() => {
              setIsBurger(false);
            }}
          ></div>
          <nav className={styles["burger"]}>
            {isAuth && (
              <div className={styles["profile"]}>
                <Link to="/profile" onClick={() => setIsBurger(false)}>
                  <div className={styles["profileIcon"]}>
                    <img src={profileIcon} alt="profileIcon" />
                  </div>
                  <h3>{me}</h3>
                </Link>
              </div>
            )}

            <ul className={styles.navigation}>
              {!isAuth && (
                <li className={styles["entry-btn-li"]}>
                  <button
                    onClick={() => {
                      setIsBurger(false);
                      onOpenButtonClick();
                    }}
                    className={styles["entry-btn"]}
                  >
                    {" "}
                    Вход{" "}
                  </button>
                </li>
              )}
              <Link
                to={"/"}
                onClick={() => {
                  setIsBurger(false);
                }}
              >
                <li>
                  <img src={logo}></img>
                  Главная
                </li>
              </Link>
              {headerLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  onClick={() => {
                    setIsBurger(false);
                    dispatch(setPickedCategory(""))
                  }}
                >
                  <li>
                    <img src={link.icon}></img>
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default BurgerMenu;
