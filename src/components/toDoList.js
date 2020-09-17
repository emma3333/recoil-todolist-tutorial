import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../recoil/selectors'
import TodoItemCreator from './toDoItemCreator'
import TodoItem from './toDoItem'
import TodoListFilters from './toDoListFilter'
import TodoListStats from './toDoListStats'

// use the useRecoilValue() hook to read the value of the toDoListState
const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div>
      <h2>Todo List Recoil Tutorial</h2>
      <>
        <TodoListStats />
        <TodoListFilters /> 
        <TodoItemCreator />

        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    </div>
  )
}

export default TodoList