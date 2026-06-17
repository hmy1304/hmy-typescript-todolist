import React from 'react'
import type { Todo } from '../App'
import "./TodoItem.css"

interface TodoItemProps{
  todo:Todo;
  onUpdate:(id:number)=>void;
  onDelete:(id:number)=>void;
}

const TodoItem = ({todo, onUpdate, onDelete}:TodoItemProps) => {
  return (
    <div className={`TodoItem ${todo.isDone? "check":""}`}>
      <input 
      type="checkbox" 
      checked={todo.isDone}
      onChange={()=>onUpdate(todo.id)}
      />
      <div className="content">
        {todo.content}
      </div>
      <div className="date">
        {new Date(todo.date).toLocaleDateString()}
      </div>
      <button onClick={()=>onDelete(todo.id)}>삭제</button>
    </div>
  )
}

export default TodoItem