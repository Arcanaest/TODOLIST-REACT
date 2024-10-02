import { useEffect, useState } from "react";

export const Filter = ({ tasks, setRenderTasks }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  useEffect(() => {
    if (activeFilter === "all") {
      setRenderTasks(tasks);
    }
    if (activeFilter === "active") {
      setRenderTasks(tasks.filter(({ isCompleted }) => !isCompleted));
    }
    if (activeFilter === "completed") {
      setRenderTasks(tasks.filter(({ isCompleted }) => isCompleted));
    }
  }, [activeFilter, tasks]);

  return (
    <select
      className="todo__options"
      onChange={(e) => setActiveFilter(e.target.value)}
      value={activeFilter}
    >
      <option value="all">все</option>
      <option value="active">активные</option>
      <option value="completed">завершённые</option>
    </select>
  );
};
