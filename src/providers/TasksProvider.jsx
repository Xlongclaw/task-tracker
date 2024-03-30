import React from "react";

export const TasksContext = React.createContext();

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);
  const createTask = (task) =>{
    setTasks((tasks)=>[...tasks,task])
  }

  const getTasksByStatus = (status) => {
    const filteredTasks = tasks.filter((task)=>task.status === status)
    return filteredTasks
  }

  React.useEffect(()=>{
    console.log(tasks);
  },[tasks])

  return <TasksContext.Provider value={{ tasks , createTask ,getTasksByStatus }}>{children}</TasksContext.Provider>;
}
