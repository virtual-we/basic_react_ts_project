import React from 'react'
import { TodoCategory } from '../enums/TodoCategory'

interface Todo{
    text: string
    category: TodoCategory
}

interface TodoListProp{
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProp> = ({todos}) => {
  return (
    <>
    <ul>
    {todos.map((todo, index)=>
        <li key= {index}>{todo.text} and its category is {todo.category}</li>)} 
    </ul>
        


    </>
  )
}
