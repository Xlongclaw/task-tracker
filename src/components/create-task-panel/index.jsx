import React from "react";
import { BsX } from "react-icons/bs";
import XTextField from "../XTextField";

export default function CreateTaskPanel({onCloseButtonPress}) {
  return (
    <div className=" bg-zinc-100 flex flex-col justify-center items-center gap-5 border border-black rounded-2xl px-8 py-6">
      <div className="flex items-center justify-between w-full">
        <h4 className="text-xs font-medium">CREATE A TASK</h4>
        <button onClick={onCloseButtonPress}>
          <BsX size={24} />
        </button>
      </div>
      <XTextField placeholder={"Title"} />
      <XTextField placeholder={"Description"} />
      <XTextField placeholder={"Team"} />
      <XTextField placeholder={"Assignee"} />
      <XTextField placeholder={"Priority"} />
      <button className="bg-accent text-white px-3 text-sm rounded-lg py-1">
        Submit
      </button>
    </div>
  );
}
