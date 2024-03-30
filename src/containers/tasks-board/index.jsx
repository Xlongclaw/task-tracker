import React from 'react'
import FilterSection from './filter-section'
import XButton from '../../components/XButton'

export default function TasksBoard() {
  return (
    <div className='px-48 py-4 border'>
      <div className='flex justify-between'>
      <FilterSection/>
      <XButton onPress={()=>{}} title={"Add new task"}/>
      </div>
    </div>
  )
}
