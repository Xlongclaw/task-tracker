import classNames from "classnames";
import React from "react";
import { BsList } from "react-icons/bs";

export default function TaskWrapper(props) {
  const [showMenu,setShowMenu] = React.useState(false)
  return (
    <div className=" border-b-2 border-dashed border-zinc-200 bg-white  p-3 text-zinc-700">
      <div className="flex justify-between items-center  border-b pb-2">
        <div className="font-medium text-sm">{props.task.title} </div>
        <div className="bg-accent/70 text-white font-medium flex justify-center items-center text-xs rounded-lg w-8 h-8">
          {props.task.priority}
        </div>
      </div>
      <p className="text-xs my-3">
        {props.task.description}
        {/* Write a progress report for current project: Summarize the challenges,
        and next steps of your project. */}
      </p>
      <div className="flex justify-between">
        <p className="text-sm text-accent mb-5">{props.task.assignee}</p>
        <div onBlur={()=>setShowMenu(false)} className="relative">
        <button onClick={()=>{setShowMenu(!showMenu)}}>
          <BsList
            className={classNames("p-1 hover:bg-accent/70 hover:text-white rounded-lg cursor-pointer",{
              "bg-accent/70 text-white":showMenu
            })}
            size={24}
          />
        </button>
        <div className={classNames("absolute right-0 border bg-white text-xs transition-all font-medium rounded-lg",{
          "opacity-0 pointer-events-none":!showMenu
        })}>
          <p className=" py-2 border-b hover:bg-zinc-300 px-6 cursor-pointer">Edit</p>
          <p className=" py-2 hover:bg-zinc-300 px-6 cursor-pointer">Delete</p>
        </div>
          
        </div>
      </div>
      <p className="text-xs p-3 bg-slate-600 text-white w-32 text-center rounded-lg">
        Assign
      </p>
    </div>
  );
}
