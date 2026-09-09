import { useEffect, useState } from "react";
import { HabitForm } from "./Components/HabitForm";
import { HabitList } from "./Components/HabitList";
import { Header } from "./Components/Header";
import { HabitProvider } from "./context/HabitProvide";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

export default function APP() {
  const [weekOffSet, setWeekOffSet] = useState(0);

  const week = addWeeks(new Date(), weekOffSet);
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });

  useEffect(() => {
    function handler() {
      console.log(weekOffSet);
    }
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [weekOffSet]);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <HabitProvider>
          <Header
            visibleDates={visibleDates}
            onNext={() => setWeekOffSet((o) => o + 1)}
            onPrev={() => setWeekOffSet((o) => o - 1)}
          />
          <HabitForm />
          <HabitList visibleDates={visibleDates} />
        </HabitProvider>
      </div>
    </>
  );
}
