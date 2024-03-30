import React from 'react'
import NavigationBar from './containers/navigation-bar'
import TasksBoard from './containers/tasks-board'

export default function App() {
  return (
    <div>
      <NavigationBar/>
      <TasksBoard/>
    </div>
  )
}