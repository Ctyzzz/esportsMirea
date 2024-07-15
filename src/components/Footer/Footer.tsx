import { FooterSocials } from "./FooterSocials";
import { FooterNav } from "./FooterNav";
import { FooterContacts } from "./FooterContacts";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__content}>
          <div className={styles.footer__container__content__main}>
            <FooterSocials />
            <FooterNav />
            <FooterContacts />
          </div>
            <div className={styles.copyright}>
              © {currentYear} Киберспортивный центр
              РТУ МИРЭА. Все права защищены.
            </div>
        </div>
      </div>
    </footer>
  );
};
