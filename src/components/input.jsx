import { useState } from "react";

export const Input = ({ tasks, setTasks, counter }) => {
  const [value, setValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        value,
        isCompleted: false,
        date: new Date().toLocaleString(),
        id: counter.current,
      },
    ]);
    counter.current++;
    setValue("");
  };
  return (
    <div className="todo__input">
      <form>
        <input
          className="todo__text"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="todo__add" onClick={addTask}></button>
      </form>
    </div>
  );
};
