import React, { useState } from 'react'
import { TodoCategory } from '../enums/TodoCategory'

interface Todo {
  id: number,
  text: string,
  category: TodoCategory,
}

interface TodoListProp {
  todos: Todo[];
  onDelete: (id: number) => void,
  onEditTodo: (id: number, newText: string, newCategory: TodoCategory) => void
}

export const TodoList: React.FC<TodoListProp> = ({ todos, onDelete, onEditTodo }) => {
  const [editID, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');
  const [editCatogery, setEditCatogery] = useState<TodoCategory>(TodoCategory.Personal);

  const handleEdit = (todo: Todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
    setEditCatogery(todo.category)
  }

  const handleSave = () => {
    if (editID != null) {
      onEditTodo(editID, editText, editCatogery)
      setEditId(null)
    }
  }

  return (
    <ul>
      {todos.map((todo) =>
        <li key={todo.id}>
          {editID === todo.id ? (
            <>
              <input value={editText} onChange={e => setEditText(e.target.value)} />
              <select value={editCatogery}>
                {Object.values(TodoCategory).map((cat) =>
                  <option key={cat} value={cat}>{cat}</option>
                )}
              </select>
              <button onClick={handleSave}>Save</button>
            </>
          ) : <>
            
            {todo.text}:-&gt; category: {todo.category}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            
          </>
          }
        </li>

      )}
    </ul>

  )
}


