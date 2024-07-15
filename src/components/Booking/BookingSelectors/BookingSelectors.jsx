import DatePickerUI from "../../../UI/DatePicker/DatePicker";
import {
  fetchBooking,
  setDate,
  setDurationOptions,
  setHoursOptions,
  setMinsOptions,
  setStartDate,
  setStartDuration,
  setStartHour,
  setStartMin,
} from "../../../redux/slices/reservation";
import styles from "./BookingSelectors.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SelectUI from "../../../UI/SelectField/SelectField";
import { useEffect } from "react";

function BookingSelectors() {
  const {
    hoursOptions,
    startHour,
    durationOptions,
    minsOptions,
    startMin,
    startDuration,
    startDate,
  } = useSelector((state) => state.reservationReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHoursOptions());
  }, [startDate]);

  useEffect(() => {
    dispatch(setMinsOptions());
  }, [hoursOptions, startHour]);

  useEffect(() => {
    dispatch(setDurationOptions());
  }, [startHour, startMin]);

  return (
    <div className={styles.selectors}>
      <div className={styles["date"]}>
        <div className={styles["label"]}>
          <label htmlFor="datepicker">Дата бронирования</label>
        </div>
        <DatePickerUI dateState={new Date(startDate)} setter={setStartDate} />
      </div>
      <div className={styles["time"]}>
        <div className={styles["label"]}>
          <label htmlFor="time">Время начала бронирования</label>
        </div>
        <div className={styles["time-selectors"]}>
          <div className={styles["hour"]}>
            <SelectUI
              options={hoursOptions}
              setter={setStartHour}
              value={startHour}
            />
          </div>
          <div className={styles["minute"]}>
            <SelectUI
              options={minsOptions}
              setter={setStartMin}
              value={startMin}
            />
          </div>
        </div>
      </div>
      <div className="duration">
        <div className={styles["label"]}>
          <label htmlFor="duration">Необходимое время</label>
        </div>
        <SelectUI
          options={durationOptions}
          setter={setStartDuration}
          value={startDuration}
        />
      </div>
    </div>
  );
}

export default BookingSelectors;
