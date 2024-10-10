import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/todoForm/TodoForm'
import { TodoList } from './components/todos/TodoList';
import { TodoCategory } from './components/enums/TodoCategory';

interface Todo{
  text: string,
  category: TodoCategory
}

const App: React.FC=()=> {
  const [todos, setTodos]=useState<Todo[]>([]);

  const addTodo=(text: string, category: TodoCategory)=>{

    const newTodo: Todo={
      text,
      category
    };
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
