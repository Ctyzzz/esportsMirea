import { useSelector } from "react-redux";
import BookingSelectors from "../BookingSelectors/BookingSelectors";
import NoBooking from "../NoBooking/NoBooking";
import Table from "../Table/Table";
import styles from "./Booking.module.scss";
import { useEffect, useState } from "react";

function Booking({ isError, errorReason }) {
  const bookings = useSelector(
    (state) => state.reservationReducer.bookings.data
  );
  const { pickedCategory } = useSelector((state) => state.reservationReducer);
  const [filteredBookings, setFilteredBookings] = useState([]);
  if (isError) {
    return (
      <div className={styles["booking"]}>
        <NoBooking reason={errorReason} />
      </div>
    );
  }
  useEffect(() => {
    const neededBookings = bookings.filter((category) => {
      return category.category_slug === pickedCategory;
    });
    if (neededBookings.length > 0) {
      setFilteredBookings(neededBookings[0].devices);
    }
  }, [bookings]);
  return (
    <div className={styles["booking"]}>
      <BookingSelectors />
      <Table
        lines={filteredBookings}
        columns={["Устройства", "Время"]}
        title={"Доступные устройства"}
      />
    </div>
  );
}

export default Booking;
