import styles from "./NoBooking.module.scss";

function NoBooking({ reason }) {
  return (
    <div className={styles["no-booking"]}>
      <div className={styles["no-booking-pic"]}></div>
      <h3>Бронирование недоступно</h3>
      <p>{reason}</p>
    </div>
  );
}

export default NoBooking;
