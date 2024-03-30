import React from "react";

export default function XDatePicker({title}) {
  return (
    <div className="text-sm font-medium border relative border-zinc-600 text-zinc-600 rounded-full px-6 flex gap-4 items-center">
      <h4 className="text-accent text-xs font-medium absolute top-[-10px] left-4 bg-white px-2 ">
        {title}
      </h4>
      {/* <BsCaretDownFill className='text-accent'/> */}
      <input className="focus:outline-none text-sm h-[44px]" type="date" />
    </div>
  );
}
