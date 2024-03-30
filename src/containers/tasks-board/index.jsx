import React from 'react'
import FilterSection from './filter-section'
import XButton from '../../components/XButton'
import TasksContainer from './tasks-container'

export default function TasksBoard() {
  return (
    <div className=''>
      <div className='flex justify-between px-24 py-4 border'>
      <FilterSection/>
      <XButton onPress={()=>{}} title={"Add new task"}/>
      </div>
      <div className='px-24 grid grid-cols-5 mt-6 gap-2'>
        <TasksContainer status={"Pending"}/>
        <TasksContainer status={"In Progress"}/>
        <TasksContainer status={"Completed"}/>
        <TasksContainer status={"Deployed"}/>
        <TasksContainer status={"Deffered"}/>
      </div>
    </div>
  )
}
