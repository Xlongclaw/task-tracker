import classNames from "classnames";
import React from "react";
import { BsList } from "react-icons/bs";
import TaskWrapper from "./task-wrapper";

export default function TasksContainer({ status }) {
  return (
    <div className="w-full ">
      <p className={classNames("text-center p-3 border rounded-2xl overflow-hidden text-white border-black",{
        "bg-slate-600": status=== "Pending",
        "bg-yellow-500":status=== "In Progress",
        "bg-emerald-600":status=== "Completed",
        "bg-sky-700":status=== "Deployed",
        "bg-orange-300":status=== "Deffered",
      })}>
        {status}
      </p>
      <div className="h-[30rem] overflow-y-scroll hidescroll">
      <TaskWrapper/>
      <TaskWrapper/>
      <TaskWrapper/>

      </div>
    </div>
  );
}
