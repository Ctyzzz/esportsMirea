import styles from "./Table.module.scss";
import Button from "../../../UI/Button/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCreateBooking,
  setReservationTime,
} from "../../../redux/slices/reservation";

function TableLine({ name, timeslots, id }) {
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (timeslots.hasOwnProperty("start_time")) {
      setTime(
        timeslots.start_time.slice(0, 5) + "-" + timeslots.end_time.slice(0, 5)
      );
    }
  }, [timeslots]);
  function createBooking(dispatch, fetchRequest, id, time, reservationTime) {
    dispatch(setReservationTime(reservationTime));
    dispatch(fetchRequest({ id, time }));
  }
  return (
    <tr className={styles["table-line"]}>
      <td className={styles["name"]}>{name}</td>
      <td className={styles["time"]}>{time}</td>
      <td className={styles["btn"]}>
        <Button
          doing={createBooking}
          params={[
            dispatch,
            fetchCreateBooking,
            id,
            timeslots.start_time,
            time,
          ]}
        >
          ЗАБРОНИРОВАТЬ
        </Button>
      </td>
    </tr>
  );
}

export default TableLine;
