import { duration, startHour, startMin } from "../../data/reservation";

export const countHours = (hoursList, pickedDate = new Date()) => {
  if (typeof pickedDate === "string") {
    pickedDate = new Date(pickedDate);
  }
  const currentDate = new Date();
  const currentDateWithoutTime = new Date();
  const pickedDateWithoutTime = pickedDate;
  currentDateWithoutTime.setHours(0, 0, 0, 0);
  pickedDateWithoutTime.setHours(0, 0, 0, 0);
  if (pickedDateWithoutTime > currentDateWithoutTime) {
    return hoursList;
  }
  const currentHour = currentDate.getHours();
  if (currentHour > hoursList.at(-1).value) {
    return hoursList;
  }
  const currentMin = currentDate.getMinutes();
  const filteredHours = hoursList.filter((obj) => {
    const hour = obj.value;
    if (currentHour > hour) {
      return false;
    }
    if (currentHour === hour) {
      if (currentMin > startMin.at(-1).value) {
        return false;
      }
    }
    return true;
  });
  return filteredHours;
};
export const countMins = (
  minsList,
  pickedHour = startHour[0],
  pickedDate = new Date()
) => {
  const currentTime = new Date();
  if (pickedDate.getTime() > currentTime.getTime()) {
    return minsList;
  }
  const currentHour = currentTime.getHours();
  let lastHour = startHour.at(-1).value;
  if (pickedHour.value === lastHour) {
    const pickedHourTime = pickedHour.value * 60;
    const minDuration = duration[0].value;
    lastHour = (lastHour + 1) * 60;
    minsList = minsList.filter((obj) => {
      const minute = obj.value;
      return pickedHourTime + minute <= lastHour - minDuration;
    });
  }

  if (currentHour !== pickedHour.value) {
    return minsList;
  } else {
    const currentMin = currentTime.getMinutes();
    minsList = minsList.filter((obj) => {
      const minute = obj.value;
      return minute > currentMin;
    });
  }
  return minsList;
};

export const countDuration = (selectedHour, selectedMin, hoursList) => {
  const maxHour = (hoursList.at(-1).value + 1) * 60;
  const currentTime = selectedHour.value * 60 + selectedMin.value;
  const durationOptions = duration.filter((obj) => {
    const durationMins = obj.value;
    return durationMins + currentTime <= maxHour;
  });
  return durationOptions;
};

export const isDateAvailable = (date, durationList) => {
  const currentDate = new Date();
  const currentDateWithoutTime = new Date();
  currentDateWithoutTime.setHours(0, 0, 0, 0);
  const possibleDate = new Date(date);
  possibleDate.setHours(0, 0, 0, 0);
  if (possibleDate < currentDateWithoutTime) {
    return false;
  }
  if (possibleDate === currentDateWithoutTime) {
    const currentHour = currentDate.getHours();
    if (currentHour > startHour.at(-1).value) {
      return false;
    }
    if (currentHour === startHour.at(-1).value) {
      const currentMins = currentDate.getMinutes();
      const minDuration = durationList[0].value;
      if (currentMins > minDuration) {
        return false;
      }
    }
  }
  return true;
};

export function stringifyDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function countAvailableDate(date) {
  const potentialDate = new Date(date);
  potentialDate.setHours(0, 0, 0, 0);
  const currentDate = new Date();
  const currenHour = currentDate.getHours();
  const currenMin = currentDate.getMinutes();
  currentDate.setHours(0, 0, 0, 0);
  const minDuration = duration[0].value;
  if (
    currentDate.getTime() === potentialDate.getTime() &&
    currenHour >= startHour.at(-1).value
  ) {
    if (currenHour === startHour.at(-1).value) {
      if (currenMin > minDuration) {
        potentialDate.setDate(potentialDate.getDate() + 1);
        return stringifyDate(potentialDate);
      }
    } else {
      potentialDate.setDate(potentialDate.getDate() + 1);
      return stringifyDate(potentialDate);
    }
  }
  return date;
}
