import React, { useState } from 'react'
import { TodoCategory } from '../enums/TodoCategory'

interface Todo{
    id: number,
    text: string,
    category: TodoCategory,
}

interface TodoListProp{
  todos: Todo[];
  onDelete:(id:number)=>void,
  onEditTodo: (id: number, newText: string, newCategory: TodoCategory)=>void
}

export const TodoList: React.FC<TodoListProp> = ({todos, onDelete, onEditTodo}) => {
  const [editID, setEditId]= useState<number | null> (null);
  const [editText, setEditText] = useState<string>('');
  const [editCatogery, setEditCatogery] = useState<TodoCategory>(TodoCategory.Personal);
  return (
    <>
    <ul>
    {todos.map((todo)=>
        <li key= {todo.id}>{todo.text}-&gt; Category:-{todo.category}</li>)} 
    </ul>

    </>
  )
}


