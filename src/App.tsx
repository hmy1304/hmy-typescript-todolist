import { useState, useRef } from 'react'
import Header from './components/header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import './App.css'

export interface Todo{
  id:number,
  isDone:boolean,
  content:string,
  date:string
}

const mockData:Todo[]=[
  {
  id:0,
  isDone:false,
  content:"Typescript 공부하기",
  date:new Date().toISOString()
  },
  {
  id:1,
  isDone:false,
  content:"React 공부하기",
  date:new Date().toISOString()
  },
  {
  id:2,
  isDone:false,
  content:"운동하기",
  date:new Date().toISOString()
  },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(mockData)
  const idRef = useRef<number>(1)

  const onCreate =(content:string)=>{
    const newItem:Todo={
      id:idRef.current++,
      content,
      isDone:false,
      date:new Date().toISOString()
    }
    setTodos([newItem,...todos])

  }

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />

    </div>
  )
}

export default App
