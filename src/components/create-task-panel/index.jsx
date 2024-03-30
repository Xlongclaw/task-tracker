import React from "react";
import { BsX } from "react-icons/bs";
import XTextField from "../XTextField";
import { TasksContext } from "../../providers/TasksProvider";

export default function CreateTaskPanel({onCloseButtonPress}) {
  const [taskData,setTaskData] = React.useState({status:"Pending"})
  const tasksState = React.useContext(TasksContext)

  const onSubmit = () =>{
    tasksState.createTask(taskData)
  }

  return (
    <div className=" bg-zinc-100 flex flex-col justify-center items-center gap-5 border border-black rounded-2xl px-8 py-6">
      <div className="flex items-center justify-between w-full">
        <h4 className="text-xs font-medium">CREATE A TASK</h4>
        <button onClick={onCloseButtonPress}>
          <BsX size={24} />
        </button>
      </div>
      <XTextField onChange={(value)=>{setTaskData( (task)=> {  return {...task,title:value}})}} placeholder={"Title"} />
      <XTextField onChange={(value)=>{setTaskData( (task)=> {  return {...task,description:value}})}} placeholder={"Description"} />
      <XTextField onChange={(value)=>{setTaskData( (task)=> {  return {...task,team:value}})}} placeholder={"Team"} />
      <XTextField onChange={(value)=>{setTaskData( (task)=> {  return {...task,assignee:value}})}} placeholder={"Assignee"} />
      <XTextField onChange={(value)=>{setTaskData( (task)=> {  return {...task,priority:value}})}} placeholder={"Priority"} />
      <button onClick={onSubmit} className="bg-accent text-white px-3 text-sm rounded-lg py-1">
        Submit
      </button>
    </div>
  );
}
