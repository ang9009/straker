export const addLeadingZero = (num) => {
  if (num.toString().length === 1) {
    num = "0" + num;
  }

  return num;
};
 