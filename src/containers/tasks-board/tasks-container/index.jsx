import classNames from "classnames";
import React from "react";
import TaskWrapper from "./task-wrapper";
import { TasksContext } from "../../../providers/TasksProvider";
import Mask from "../../../components/Mask";
import EditTaskPanel from "../../../components/edit-task-panel";

export default function TasksContainer({ status }) {
  const tasksState = React.useContext(TasksContext);
  const tasks = tasksState.getTasksByStatus(status);

  return (
    <div className="w-full ">
      <p
        className={classNames(
          "text-center p-3 border rounded-2xl overflow-hidden text-white border-black",
          {
            "bg-slate-600": status === "Pending",
            "bg-yellow-500": status === "In Progress",
            "bg-emerald-600": status === "Completed",
            "bg-sky-700": status === "Deployed",
            "bg-orange-300": status === "Deffered",
          }
        )}
      >
        {status}
      </p>
      <div className="h-[30rem] overflow-y-scroll hidescroll border shadow-lg my-2 rounded-2xl">
        {tasks.map((task, i) => (
          <TaskWrapper task={task} key={`TASK_${i}_${status}`} />
        ))}
      </div>
    </div>
  );
}
