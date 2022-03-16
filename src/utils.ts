export const stringDateToDate = (dateString: string): Date => {
  let date = dateString
    .split('/')
    .map((date: string): number => parseInt(date));
  return new Date(date[2], date[1] - 1, date[0]);
};
