import React, { useState } from 'react'

interface todoElement{
    todos: string[]
}

export const TodoList: React.FC<todoElement> = ({todos}) => {
  return (
    <>
        {todos.map((todo, index)=>
        <li key= {index}>{todo}</li>)}
    </>
  )
}
