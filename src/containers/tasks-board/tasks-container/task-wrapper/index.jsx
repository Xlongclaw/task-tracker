import React from 'react'
import { BsList } from 'react-icons/bs'

export default function TaskWrapper() {
  return (
    <div className=" border-b-2 border-dashed border-zinc-200 bg-white  p-3 text-zinc-700">
        <div className="flex justify-between items-center  border-b pb-2">
          <div className="font-medium text-sm">Complete Fox UI </div>
          <div className="bg-accent/70 text-white font-medium flex justify-center items-center text-xs rounded-lg w-8 h-8">P1</div>
        </div>
        <p className="text-xs my-3">Write a progress report for current project: Summarize the challenges, and next steps of your project.</p>
        <div className="flex justify-between">
        <p className="text-sm text-accent mb-5">@longclaw</p>
        <BsList className="p-1 hover:bg-accent/70 hover:text-white rounded-lg cursor-pointer" size={24}/>

        </div>
        <p className="text-xs p-3 bg-slate-600 text-white w-32 text-center rounded-lg">Assign</p>
      </div>
  )
}
