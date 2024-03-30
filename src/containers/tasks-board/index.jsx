import React from "react";
import FilterSection from "./filter-section";
import XButton from "../../components/XButton";
import TasksContainer from "./tasks-container";
import XTextField from "../../components/XTextField";
import { BsX } from "react-icons/bs";
import Mask from "../../components/Mask";
import CreateTaskPanel from "../../components/create-task-panel";

export default function TasksBoard() {
  const [showCreateTaskPanel, setShowCreateTaskPanel] = React.useState(false);
  return (
    <div className="">
      <div className="flex justify-between px-24 py-4 border">
        <FilterSection />
        <XButton
          onPress={() => {
            setShowCreateTaskPanel(true);
          }}
          title={"Add new task"}
        />
        <Mask show={showCreateTaskPanel}>
          <CreateTaskPanel
            onCloseButtonPress={() => {
              setShowCreateTaskPanel(false);
            }}
          />
        </Mask>
      </div>
      <div className="px-24 grid grid-cols-5 py-6 gap-4 bg-zinc-50">
        <TasksContainer status={"Pending"} />
        <TasksContainer status={"In Progress"} />
        <TasksContainer status={"Completed"} />
        <TasksContainer status={"Deployed"} />
        <TasksContainer status={"Deffered"} />
      </div>
    </div>
  );
}
