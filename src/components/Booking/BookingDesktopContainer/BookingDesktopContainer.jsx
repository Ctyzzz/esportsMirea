import styles from "./BookingDesktopContainer.module.scss";

function BookingDesktopContainer({ children }) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["main"]}>{children}</div>
    </div>
  );
}

export default BookingDesktopContainer;
