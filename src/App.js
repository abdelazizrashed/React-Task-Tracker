import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: "Task 1",
            day: "Day 1", 
            reminder: true
        },
        {
            id:2,
            text: "Task 2",
            day: " Day 2",
            reminder: true
        },
        {
            id:3,
            text: "Task 3",
            day: "Day 3",
            reminder: true
        },
        {
            id:4,
            text: "Task 4",
            day: "Day 4",
            reminder: true
        },
    ]
)

    //Delete Task
    const deleteTask = (id) =>{
      setTasks(
        tasks.filter((task) => task.id !== id)
        )
    }

    //Toggle reminder
    const toggleReminder = (id) =>{
      setTasks(
        tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder}: task)
      )
    }

  return (
    <div className="container">
      <Header />
      {
      tasks.length > 0 ?
      (
      <Tasks tasks = {tasks} deleteTask = {deleteTask} toggleReminder = {toggleReminder}/>
      ): 
      (
        "No Tasks"
        )
        }
    </div>
  );
}

export default App;
