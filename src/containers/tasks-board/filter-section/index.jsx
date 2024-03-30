import React from 'react'
import XTextField from '../../../components/XTextField'
import { BsCaretDownFill } from 'react-icons/bs'
import XDatePicker from '../../../components/XDatePicker'

export default function FilterSection() {
  return (
    <div className='flex gap-4 items-center'>
        <p className='text-xs font-medium'>Filter by :</p>
        <XTextField onChange={()=>{}} placeholder={"Assignee Name"} />
        {/* <div className='text-sm font-medium border border-black rounded-full p-4 flex gap-4 items-center'>
          <h4>Priority</h4>
          <BsCaretDownFill className='text-accent'/>
        </div> */}
        <XDatePicker title={'From date'}/>
        <XDatePicker title={'To date'}/>
      </div>
  )
}
