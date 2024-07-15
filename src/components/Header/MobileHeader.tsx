import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import Button from "@ui/Button/Button";
import { useAppSelector } from "@hooks/useAppSelector";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { fetchMe } from "@redux/slices/profile";
import { setPickedCategory } from "@redux/slices/reservation";

import mobileBell from "@assets/header/mobileBell.svg";
import logo from "@assets/logo.svg";

import { handleButtonClick } from "./redirectButton";
import type { HeaderProps } from "./Header";

import styles from "./Header.module.scss";

export type MobileHeaderProps = HeaderProps;

const MobileHeader = ({ isAuth }: MobileHeaderProps) => {
  const me: any = useAppSelector((state) => state.profileReducer.me.data);

  const [isBurger, setIsBurger] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth && !me.firstname) {
      dispatch(fetchMe);
    }
  }, [isAuth, me]);

  useEffect(() => {
    if (isAuth && me.firstname) {
      setName(me.firstname + " " + me.lastname);
    }
  }, [isAuth, me]);

  return (
    <header className={styles.header}>
      <div className={`${styles["header__container"]}`}>
        <div className={styles["header__container__left"]}>
          <Link to="/">
            <img src={logo} alt="logo" width={50} height={50}/>
          </Link>
          <div className={styles["header__container__booking-btn"]}>
            {/* @ts-ignore */}
            <Button
              className={styles['booking-button']}
              // @ts-ignore
              doing={(navigate, dispatch, setIsBurger) => {
                setIsBurger(false);
                dispatch(setPickedCategory(null));
                navigate("/booking");
              }}
              params={[navigate, dispatch, setIsBurger]}
            >
              БРОНИРОВАНИЕ
            </Button>
          </div>
        </div>

        <div className={styles["header__container__right"]}>
          <Link
            to={"/indeveloping"}
            onClick={() => {
              setIsBurger(false);
            }}
          >
            <img src={mobileBell as unknown as string}></img>
          </Link>
          <BurgerMenu
            isBurger={isBurger}
            setIsBurger={setIsBurger}
            isAuth={isAuth}
            onOpenButtonClick={handleButtonClick}
            me={name}
          />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
