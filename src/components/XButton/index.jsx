import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function XButton({onPress,title}) {
  return (
    <button onPress={onPress} 
    className='border-black border-dashed bg-gradient-to-br from-accent/40 to-accent/50 border px-5 text-sm font-medium hover:scale-105 transition-transform ease-in
     rounded-full flex items-center gap-2'>
     <BsPlus size={24}/> {title}
    </button>
  )
}
