import React from "react";

export default function XDatePicker({title,onStartDateChange,onEndDateChange}) {
  return (
    <div className="text-xs sm:text-sm font-medium border relative border-zinc-600 text-zinc-600 rounded-full px-6 flex gap-4 items-center">
      <h4 className="text-accent text-xs font-medium absolute top-[-10px] left-4 bg-white px-2 ">
        {title}
      </h4>
      {/* <BsCaretDownFill className='text-accent'/> */}
      <input onChange={(e)=>{
        onStartDateChange(new Date( e.target.value).getTime())
      }} className="focus:outline-none text-xs sm:text-sm h-[44px]" type="date" />
      <div className="w-[1px] bg-zinc-400 h-full"></div>
      <h4 className="text-accent text-xs font-medium absolute top-[-10px] left-4 bg-white px-2 ">
        {title}
      </h4>
      {/* <BsCaretDownFill className='text-accent'/> */}
      <input onChange={(e)=>{
        onEndDateChange(new Date( e.target.value).getTime())
      }} className="focus:outline-none text-xs sm:text-sm h-[44px]" type="date" />
    </div>
  );
}
