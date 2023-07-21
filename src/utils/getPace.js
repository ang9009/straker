import dayjs from "dayjs";

export const getPace = (dayjsValue, distance) => {
  const time = {
    hour: dayjs(dayjsValue).get("hour"),
    minute: dayjs(dayjsValue).get("minute"),
    second: dayjs(dayjsValue).get("second"),
  };

  const total = time.hour * 60 + time.minute + time.second / 60;
  let seconds = Math.round((total % distance) * 60);

  if (seconds.toString().length == 1) {
    seconds = 0 + seconds.toString();
  }

  return `${Math.round(total / distance)}:${seconds}`;
};
