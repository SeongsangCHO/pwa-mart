/**
 * 휴무일 계산
 * @param {Date} date
 * @description param으로 받은 날짜가 휴무일(2번째, 4번째 일요일)인지 아닌지 판단
 * @returns {boolean}
 */
export const isClosedDay = (date: Date): boolean => {
  const day = date.getDay();
  const week = Math.floor((date.getDate() - 1) / 7) + 1;

  if (day === 0) {
    if (week === 2 || week === 4) {
      return true;
    }
  }

  return false;
};
