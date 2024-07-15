import { Link } from "react-router-dom";
import { FooterIcon } from "../FooterIcon/FooterIcon";
import { socialLinks } from "@data/footer-socials";
import FooterLogo from "@assets/footer/FooterLogo.svg";

import styles from "./FooterSocials.module.scss";

export const FooterSocials = () => {
  return (
    <div className={styles.social}>
      <Link to="/">
        <img
          className={styles.logo}
          src={FooterLogo}
          alt="footer-logo"
        />
      </Link>
      <div className={styles.social__block}>
        {socialLinks.map((obj, i) => (
          <Link to={obj.href} key={i} target="_blank">
            <FooterIcon>
              <obj.icon />
            </FooterIcon>
          </Link>
        ))}
      </div>
    </div>
  );
};