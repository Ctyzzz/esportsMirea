import AccountTitles from "../../../UI/AccountTitles/AccountTitles";
import BookingCard from "./BookingCard";

import styles from "./AccountBooking.module.scss";
import booking from "../../../assets/personalAccount/booking/booking.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const AccountBooking = () => {
  const bookings = useSelector(
    (state) => state.reservationReducer.myBookings.data
  );
  const status = useSelector(
    (state) => state.reservationReducer.myBookings.status
  );
  const [isEmpty, setIsEmpty] = useState(true);
  const navigate = useNavigate();
  const [isHistory, setIsHistory] = useState(false);
  useEffect(() => {
    if (bookings.length > 0) {
      bookings.forEach((el) => {
        if (el.status === "PENDING" || el.status === "ACTIVE") {
          setIsEmpty(false);
        }
      });
    }
  }, [bookings]);
  const checkDate = (date) => {
    const day = date.slice(8);
    let month = new Date(0, Number(date.slice(5, 7)) - 1).toLocaleString(
      "default",
      { month: "long" }
    );
    if (month === "март" || month === "август") {
      month = month + "а";
    } else {
      month = month.slice(-1) === "ь" ? month.slice(0, -1) + "я" : month + "я";
    }
    const year = new Date().getFullYear();
    return day + " " + month + " " + year;
  };
  const checkTime = (start, end) => {
    if (end) {
      return start.slice(0, 5) + "-" + end.slice(0, 5);
    } else return start.slice(0, 5);
  };
  return (
    <div className={`${styles.account__booking}  ${styles.booking}`}>
      {!isHistory ? (
        <div className={styles["booking-header"]}>
          <AccountTitles img={booking} title={"ВАШИ БРОНИРОВАНИЯ"} />{" "}
          <Button
            doing={(setIsHistory) => {
              setIsHistory(true);
            }}
            params={[setIsHistory]}
          >
            Смотреть историю
          </Button>
        </div>
      ) : (
        <div className={styles["booking-header"]}>
          <AccountTitles img={booking} title={"История бронирований"} />{" "}
          <Button
            doing={(setIsHistory) => {
              setIsHistory(false);
            }}
            params={[setIsHistory]}
          >
            Смотреть текущие
          </Button>
        </div>
      )}
      <div className={styles.booking__cards}>
        {status === "loaded" &&
          bookings.length > 0 &&
          bookings.map((item, index) => {
            if (
              (item.status === "PENDING" || item.status === "ACTIVE") &&
              !isHistory
            ) {
              return (
                <BookingCard
                  key={index}
                  date={checkDate(item.booking_date)}
                  type={item.device.device_category}
                  number={item.device.name}
                  time={checkTime(item.booking_time, item.end_time)}
                  id={item.id}
                />
              );
            } else if (
              item.status != "PENDING" &&
              item.status != "ACTIVE" &&
              isHistory
            ) {
              return (
                <BookingCard
                  key={index}
                  date={checkDate(item.booking_date)}
                  type={item.device.device_category}
                  number={item.device.name}
                  time={checkTime(item.booking_time, item.end_time)}
                  id={item.id}
                  isHistory={isHistory}
                />
              );
            }
          })}
      </div>
      {(isEmpty || bookings.length === 0) && !isHistory && (
        <>
          <h3 className={styles["no-bookings"]}>Пока нет броней</h3>
          <div className={styles["booking-btn"]}>
            <Button
              doing={(navigate) => {
                navigate("/booking");
              }}
              params={[navigate]}
            >
              Забронировать
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountBooking;
