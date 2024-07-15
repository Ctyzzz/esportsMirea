import { useDispatch, useSelector } from "react-redux";
import styles from "./BookingModal.module.scss";
import { setShowBookingModal, } from "../../../redux/slices/reservation";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import successImg from "../../../assets/booking/successBooking.svg";
import Modal from "../../../UI/Modal/Modal";
import { useCallback } from "react";

function BookingModal() {
  const { reservationTime, startDate, showBookingModal } = useSelector(
    (state) => state.reservationReducer
  );

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(setShowBookingModal(false));
  }, []);

  return (
    <Modal show={showBookingModal} onCloseButtonClick={handleClose}>
      <div className={styles["modal"]}>
        <div className={styles["img"]}>
          <img src={successImg} alt="success"/>
        </div>
        <div className={styles["text"]}>
          <h1>Устройство забронировано!</h1> Мы вас ждём{" "}
          <b>
            {" "}
            {new Date(startDate).getDate()}.
            {new Date(startDate).getMonth() + 1 < 10
              ? "0" + (new Date(startDate).getMonth() + 1)
              : new Date(startDate).getMonth() + 1}{" "}
            в {reservationTime.slice(0, 5)}
          </b>{" "}
          ({reservationTime}) Все ваши брони можно посмотреть в{" "}
          <Link to="/profile">личном кабинете</Link>
        </div>
        <Button
          doing={(dispatch, setShowBookingModal) => {
            dispatch(setShowBookingModal(false));
          }}
          params={[dispatch, setShowBookingModal]}
        >
          ПРЕКРАСНО
        </Button>
      </div>
    </Modal>
);
}

export default BookingModal;
