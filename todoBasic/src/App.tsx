import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/todoForm/TodoForm'
import { TodoList } from './components/todos/TodoList';

const App: React.FC=()=> {
  const [todos, setTodos]=useState<string[]>([]);

  const addTodo=(newTodo: string)=>{
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <TodoForm addTodo= {addTodo} />
      <TodoList todos= {todos} />
    </>
  )
}

export default App
