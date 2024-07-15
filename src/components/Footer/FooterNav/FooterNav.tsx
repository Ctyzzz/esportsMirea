import { Link } from "react-router-dom";
import { footerLink } from "@src/const";

import styles from "./FooterNav.module.scss";

export const FooterNav = () => {
  return (
    <nav className={styles['footer-nav']}>
      <ul>
        {footerLink.map((obj, i) => (
          <Link to={obj.href} key={i}>
            <li key={obj.id}> {obj.title} </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};