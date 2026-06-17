import React, {useState} from 'react'
import type { Todo } from '../App'
import TodoItem from './TodoItem';
import "./TodoList.css"

interface Props{
  todos:Todo[];
  onUpdate:(id:number)=>void;
  onDelete:(id:number)=>void;
}

const TodoList = ({todos, onUpdate, onDelete}:Props) => {
  const [search, setSearch] = useState("")

  const getFilteredData=()=>{
    if(search=="") return todos;
    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const onChangeSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }

  const filteredTodos=getFilteredData()

  return (
    <div className='TodoList'>
      <h4>Todo List 📝</h4>
      <input 
      type="text" 
      placeholder='검색어를 입력해주세요.' 
      value={search}
      onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>(
          <TodoItem 
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList