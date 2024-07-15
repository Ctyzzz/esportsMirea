import { Link, NavLink } from "react-router-dom";

import { headerLinks } from "@src/const";
import { useAppSelector } from "@hooks/useAppSelector";

import logo from "@assets/logo.svg";
import bell from "@assets/header/bell.svg";
import profileIcon from "@assets/personalAccount/profileIcon.svg";

import { handleButtonClick } from "./redirectButton";
import type { HeaderProps } from "./Header";

import styles from "./Header.module.scss";

export type DesktopHeaderProps = HeaderProps;

const DesktopHeader = ({ isAuth }: DesktopHeaderProps) => {
  const me: any = useAppSelector((state) => state.profileReducer.me.data);

  return (
    <header className={styles.header}>
      <div className={`${styles["header__container"]}`}>
        <div className={styles["header__logo"]}>
          <Link to="/">
            <img src={logo} alt="logo" width={50} height={50} />
          </Link>
        </div>
        <ul className={styles.header__container__nav}>
          {headerLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              className={({ isActive }) => (
                isActive && link.to != "/indeveloping"
                  ? styles.link_active
                  : styles.link
              )}
            >
              <li>{link.title}</li>
            </NavLink>
          ))}
        </ul>
        {!isAuth ? (
          <button
            onClick={handleButtonClick}
            className={styles.header__entryBtn}
          >
            {" "}
            Вход{" "}
          </button>
        ) : (
          <div className={styles.header__avatar}>
            <img src={bell} alt="bell" />
            <Link to="/profile">
              <div className={styles.avatar}>
                <img src={me.avatar_url ? avatar_url : profileIcon} alt="" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default DesktopHeader;
