import React, { useContext } from "react";
import XTextField from "../../../components/XTextField";
import { BsCaretDownFill } from "react-icons/bs";
import XDatePicker from "../../../components/XDatePicker";
import { TasksContext } from "../../../providers/TasksProvider";

export default function FilterSection() {
  const { changeFilterData } = useContext(TasksContext);
  return (
    <div className="flex gap-4 items-center flex-wrap">
      {/* <p className='text-xs font-medium'>Filter by :</p> */}
      <XTextField
        onChange={(value) => {
          changeFilterData({ assignee: value });
        }}
        placeholder={"Assignee Name"}
      />
      <div className="text-xs sm:text-sm font-medium border border-zinc-600 rounded-full p-3 flex gap-4 items-center">
        <h4>Priority</h4>
        <BsCaretDownFill className="text-accent" />
      </div>
      <div className="flex gap-4">
        <XDatePicker
          title={"Select Date"}
          onStartDateChange={(date) => {
            changeFilterData({ startDate: date });
          }}
          onEndDateChange={(date) => {
            changeFilterData({ endDate: date });
          }}
        />
      </div>
    </div>
  );
}
