import { useEffect, useState, useRef } from "react";
import { Filter, Input, Task } from "./components";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [renderTasks, setRenderTasks] = useState(tasks);
  let counter = useRef(
    localStorage.getItem("counter")
      ? JSON.parse(localStorage.getItem("counter"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("counter", counter.current);
    setRenderTasks(tasks);
  }, [tasks, counter]);

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="todo">
      <Input tasks={tasks} setTasks={setTasks} counter={counter} />
      <Filter tasks={tasks} setRenderTasks={setRenderTasks} />
      <ul className="todo__items">
        {renderTasks.map(({ value, isCompleted, date, id }) => (
          <Task
            value={value}
            isCompleted={isCompleted}
            date={date}
            id={id}
            key={id}
            tasks={tasks}
            setTasks={setTasks}
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
