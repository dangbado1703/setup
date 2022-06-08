export const TIME_OUT = 5 * 60 * 1000;
export const range = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(start)
    .map((_, index) => start + index);
};
