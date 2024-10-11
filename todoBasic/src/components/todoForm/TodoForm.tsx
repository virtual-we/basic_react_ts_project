import React, {useState } from 'react'
import { TodoCategory } from '../enums/TodoCategory';

interface TodoFormProps {
  addTodo: (text: string, category: TodoCategory)=>void
}

export const TodoForm:React.FC<TodoFormProps> = ({addTodo}) => {
    const [input, setInput]=useState('');
    const [category, setCategory]=useState<TodoCategory>(TodoCategory.Personal);

    const handleClick=(e: React.FormEvent<HTMLFormElement>)=>{
      e?.preventDefault();
      if(input.trim()){
        addTodo(input.trim(), category);
        setInput('');
      }
    }
  return (
    <>
    <form onSubmit={handleClick}> 
        <label>Type your todo here:
        <input
        type='text'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
         />
         <select
         value={category}
         onChange={e=>setCategory(e.target.value as TodoCategory)}
         >
          {Object.values(TodoCategory).map((cat)=>(
          <option value={cat} key={cat}> {cat}</option>
          ))}
         </select>
        <button type='submit' >OK</button>
        </label>
    </form>
    </>
  )
}
