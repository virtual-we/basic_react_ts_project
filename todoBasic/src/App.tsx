import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/todoForm/TodoForm'
import { TodoList } from './components/todos/TodoList';
import { TodoCategory } from './components/enums/TodoCategory';

interface Todo{
  id: number,
  text: string,
  category: TodoCategory
}

const App: React.FC=()=> {
  const [todos, setTodos]=useState<Todo[]>([]);

  const addTodo=(text: string, category: TodoCategory)=>{

    const newTodo: Todo={
      id:Date.now(),
      text,
      category
    };
    setTodos([...todos, newTodo])
  }

  onEditTodo(id: Number, newText: String, newCategory: TodoCategory){
    setTodos(todos.map(todo=> todo.id===id?{...todo, Text=newText, category=newCategory}: todo))

  }


  const onDelete(id:number){
    setTodos(todos.filter((todo)=> todo.id!=id));
  }

  return (
    <>
      <TodoForm addTodo= {addTodo} />
      <TodoList todos= {todos, onDelete={onDelete}, onEditTodo={onEditTodo}} />
    </>
  )
}

export default App
