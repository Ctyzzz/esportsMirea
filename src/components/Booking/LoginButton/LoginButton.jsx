import { Link } from "react-router-dom";
import LksButton from "../../../UI/LksButton/LksButton,";
import styles from "./LoginButton.module.scss";

function LoginButton() {
  return (
    <div className={styles["login-btn"]}>
      <Link
        to="https://esports.mirea.ru/api/v1/auth/user/login/mirea_login"
        reloadDocument
      >
        <LksButton />
      </Link>
    </div>
  );
}

export default LoginButton;
