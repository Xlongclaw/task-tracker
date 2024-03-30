import React from 'react'
import Logo from '../../components/Logo'
import ProfileScetion from '../../components/ProfileSection'

export default function NavigationBar() {
  return (
    <div className='flex px-24 py-4 justify-between items-center'>
      <Logo/>
      <ProfileScetion/>
    </div>
  )
}
