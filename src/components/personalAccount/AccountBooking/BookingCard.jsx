import styles from "./AccountBooking.module.scss";
import Button from "./../../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchMyBookings,
  fetchUpdateMyBooking,
} from "../../../redux/slices/reservation";

const BookingCard = ({ date, time, type, number, img, id, isHistory }) => {
  const dispatch = useDispatch();
  const canceledStatus = useSelector(
    (state) => state.reservationReducer.canceledStatus
  );
  const [isSent, setIsSent] = useState(false);
  useEffect(() => {
    if (canceledStatus === "success" && isSent) {
      dispatch(fetchMyBookings());
      setIsSent(false);
    }
  }, [canceledStatus, dispatch]);

  function handleCancel(id) {
    dispatch(
      fetchUpdateMyBooking({
        id: id,
        body: {
          status: "CANCELED",
        },
      })
    );
    setIsSent(true);
  }
  return (
    <div className={styles.bookingcard}>
      <p className={styles.bookingcard__date}>{date}</p>
      {type && (
        <div className={styles.bookingcard__type}>
          <img src={img} alt="" />
          <p>{type}</p>
        </div>
      )}
      <p className={styles.bookingcard__number}>{number}</p>
      <p className={styles.bookingcard__time}>{time}</p>
      {!isHistory && (
        <div className={styles.bookingcard__button}>
          <Button doing={handleCancel} params={[id]}>
            Отменить
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
