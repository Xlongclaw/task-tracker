import React from "react";
import NavigationBar from "./containers/navigation-bar";
import TasksBoard from "./containers/tasks-board";
import TasksProvider from "./providers/TasksProvider";

export default function App() {
  return (
    <div>
      <NavigationBar />
      <TasksProvider>
        <TasksBoard />
      </TasksProvider>
    </div>
  );
}
