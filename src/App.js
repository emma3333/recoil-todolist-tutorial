import React from 'react'
import { RecoilRoot } from 'recoil'
import TodoList from './components/toDoList'
import './App.css'

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  )
}

export default App
