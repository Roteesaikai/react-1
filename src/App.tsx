import Button from "./Components/Button";
import { HabitForm } from "./Components/HabitForm";
import { HabitList } from "./Components/HabitList";
import { Header } from "./Components/Header";

export default function APP() {
  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <Header />
        <HabitForm />
        <HabitList />
      </div>
    </>
  );
}
