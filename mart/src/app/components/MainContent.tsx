"use client";

import { getSundayOfThisWeek, isClosedDay } from "@/utils/date";
import Lottie from "react-lottie-player";
import openMartJson from "assets/open-mart.json";
export default function MainContent() {
  const date = new Date();
  const sundayOfThisWeek = getSundayOfThisWeek();
  console.log(sundayOfThisWeek);
  const isMartClosed = isClosedDay(date);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isMartClosed ? "닫은날" : "여는날"}
      <div className="sticky top-0 left-0 bg-blue-400"></div>
      <Lottie
        loop
        animationData={openMartJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </main>
  );
}
