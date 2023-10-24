/**
 * @description closed-days.ts의 isClosedDay 함수를 테스트하는 코드
 */

// sum.test.js
import { expect, test } from "vitest";
import { isClosedDay } from "./closed-days";

const testFn = (date: Date, expected: boolean) => {
  expect(isClosedDay(date)).toBe(expected);
};

const getDateInMonth = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

const dateListOn2023 = Array(12)
  .fill(undefined)
  .map((_, index) => {
    const month = index + 1;
    return getDateInMonth(2023, month);
  });
const closedDay: {
  [key: number]: [number, number];
} = {
  1: [8, 22],
  2: [12, 26],
  3: [12, 26],
  4: [9, 23],
  5: [14, 28],
  6: [11, 25],
  7: [9, 23],
  8: [13, 27],
  9: [10, 24],
  10: [8, 22],
  11: [12, 26],
  12: [10, 24],
};

(() => {
  dateListOn2023.forEach((days, index) => {
    const month = index + 1;

    test(`23년 ${month}월 휴무일이 ${closedDay[month][0]} / ${closedDay[month][1]}인가 ?`, () => {
      for (let i = 1; i <= days; i++) {
        const day = i.toString().padStart(2, "0");
        const date = new Date(`2023-${month}-${day}`);
        if (closedDay[month].includes(i)) {
          testFn(date, true);
        } else {
          testFn(date, false);
        }
      }
    });
  });
})();
