import TableLine from "./TableLine";
import styles from "./Table.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Table({ title, columns, lines }) {
  const { startHour, startMin, bookings } = useSelector(
    (state) => state.reservationReducer
  );
  const [filteredLine, setFilteredLine] = useState([]);
  useEffect(() => {
    setFilteredLine(
      lines
        .map((device) => {
          return {
            ...device,
            timeslots: device.timeslots.filter((time) => {
              const hour = Number(time.start_time.slice(0, 2));
              const min = Number(time.start_time.slice(3, 5));
              if (hour === startHour.value && min === startMin.value) {
                return true;
              }
            })[0],
          };
        })
        .filter((device) => {
          return device.timeslots;
        })
    );
  }, [startHour, startMin, lines]);
  return (
    <div className={styles["table"]}>
      <p className={styles["label"]}>
        <label>{title}</label>
      </p>
      {filteredLine.length > 0 ? (
        <table>
          <thead>
            <tr className={styles["table-header"]}>
              {columns.map((column) => (
                <th className={styles["header-column"]}>{column}</th>
              ))}
              <th className={styles["btn-column"]}></th>
            </tr>
          </thead>
          <tbody>
            {filteredLine.map((filteredLine) => {
              if (filteredLine.timeslots) {
                return <TableLine {...filteredLine} key={filteredLine.id} />;
              }
            })}
          </tbody>
        </table>
      ) : bookings.status !== "loading" ? (
        <h1 className={styles["no-slots"]}>Нет доступных слотов</h1>
      ) : (
        <h1 className={styles["no-slots"]}>Загрузка</h1>
      )}
    </div>
  );
}

export default Table;
