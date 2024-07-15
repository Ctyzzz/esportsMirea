import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FooterIcon } from "../FooterIcon";

import styles from "./FooterContacts.module.scss";

export const FooterContacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.row}>
        <FooterIcon hover={false}>
          <FaPhone />
        </FooterIcon>
        <a className={styles["row-text"]} href="tel:+74992156565,6020">+7 (499) 215-65-65</a>
      </div>
      <div className={styles.row}>
        <FooterIcon hover={false}>
          <FaEnvelope />
        </FooterIcon>
        <a className={styles["row-text"]} href="mailto:esports@mirea.ru">esports@mirea.ru</a>
      </div>
      <div>
        <address>г. Москва, проспект Вернадского 78, <br/> строение 7</address>
      </div>
    </div>
  );
};