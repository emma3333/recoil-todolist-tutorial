import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../recoil/atoms'


const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  // use the useSetRecoilState() hook to get a setter function in our TodoItemCreator component to update our state
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

// utility for creating unique Id
let id = 0
function getId() {
  return id++
}

export default TodoItemCreator