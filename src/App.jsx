import { useEffect, useState } from "react"; 
import { Filter, Input, Task } from "./components"; 
 
import "./App.css"; 
 
function App() { 
  const [tasks, setTasks] = useState( 
    localStorage.getItem("tasks") 
      ? JSON.parse(localStorage.getItem("tasks")) 
      : [] 
  ); 
  const [counter, setCounter] = useState( 
    localStorage.getItem("counter") 
    ? JSON.parse(localStorage.getItem("counter")) 
    : 0 
  ); 
  useEffect(() => { 
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
  }, [tasks]); 
   
 
  const completeTask = (id) => { 
    setTasks(tasks.map((task) => { 
      if (task.id === id) { 
        return { ...task, isCompleted: !task.isCompleted }; 
      } 
      return task; 
    })); 
  }; 
 
  const deleteTask = (id) => { 
    setTasks(tasks.filter((task) => task.id !== id)); 
  }; 
  return ( 
    <div className="todo"> 
      <Input tasks={tasks} setTasks={setTasks} counter={counter} setCounter={setCounter}/> 
      <Filter /> 
      <ul className="todo__items"> 
        {tasks.map(({ value, isCompleted, date, id }) => ( 
          <Task value={value} 
          isCompleted={isCompleted} 
          date={date} 
          id={id} 
          key={id} 
          onComplete={completeTask} 
          onDelete={deleteTask} /> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default App;