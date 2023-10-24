import { getSundayOfThisWeek, isClosedDay } from "@/utils/date";

export default async function Home() {
  const date = new Date();
  const sundayOfThisWeek = getSundayOfThisWeek();
  const isMartClosed = isClosedDay(date);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isMartClosed ? "닫은날" : "여는날"}
    </main>
  );
}
