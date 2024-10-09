import React, { HtmlHTMLAttributes, useState } from 'react'

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

export const TodoForm:React.FC<TodoFormProps> = ({addTodo}) => {
    const [input, setInput]=useState('');

    const handleClick=(e: React.FormEvent<HTMLFormElement>)=>{
      e?.preventDefault();
      if(input.trim()){
        addTodo(input.trim());
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
        <button type='submit' >OK</button>
        </label>
        
    </form>
    </>
  )
}
