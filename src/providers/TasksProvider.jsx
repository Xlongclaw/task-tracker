import React from "react";

export const TasksContext = React.createContext({
  tasks: [
    { status: "Pending", title: "", assignee: "", team: "", priority: "" },
  ],
  createTask: () => {},
  getTasksByStatus: () => {},
  changeFilterData: () => {},
  getSingleTask:()=>{}
});

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [filter, setFilter] = React.useState({});

  const createTask = (task) => {
    setTasks((tasks) => [...tasks, task]);
    setFilteredTasks((tasks) => [...tasks, task]);
  };
  const getTasksByStatus = (status) => {
    return filteredTasks.filter((task) => task.status === status);
  };

  const changeFilterData = (data) => {
    const filterData = { ...filter, ...data };
    setFilter(filterData);
    const filteredData = tasks.filter(
      (task) =>
        task.assignee.includes(filterData.assignee) &&
        filterData.startDate < task.createdAt &&
        task.createdAt < filterData.endDate
    );

    setFilteredTasks(filteredData);
  };

  const getSingleTask = (createdAt) =>{
    console.log(createdAt);
    return tasks.filter((task)=>task.createdAt === createdAt)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: filteredTasks,
        createTask,
        getTasksByStatus,
        changeFilterData,
        getSingleTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
