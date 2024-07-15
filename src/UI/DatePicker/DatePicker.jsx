import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";
import "../../russianLocale";
import { useDispatch } from "react-redux";
import { stringifyDate } from "../../helpers/booking/countStartTimeOptions";

const DatePickerUI = ({ setter, dateState }) => {
  const dispatch = useDispatch();
  const dispatchValue = (date) => {
    dispatch(setter(stringifyDate(date)));
  };
  return (
    <div className="datepicker" id="datepicker">
      <DatePicker
        locale="ru"
        selected={dateState}
        onChange={(selectedDate) => dispatchValue(selectedDate)}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DatePickerUI;
