export const getSundayOfThisWeek = () => {
  const now = new Date();
  const today = now.getDay();
  const sunday = new Date(now.setDate(now.getDate() - today + 7));
  return sunday;
};

export const yyyyMMdd = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};
