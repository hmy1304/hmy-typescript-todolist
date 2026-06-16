import React, {useState} from 'react'
import "./TodoEditor.css"
interface TodoCreate{
  onCreate:(content:string)=>void
}

const TodoEditor = ({onCreate}:TodoCreate) => {
  const [content, setContent] = useState<string>('')

  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setContent(e.target.value)
  }

  const onKeyupEnter=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==='Enter') {
      handleSubmit()
    }
  }

  const handleSubmit=()=>{
    if(!content.trim()) return

    onCreate(content)
    setContent('')
  }

  return (
    <div className='Editor'>
      <input
        onKeyUp={onKeyupEnter}
        onChange={onChange}
        placeholder='새로운 Todo...'
        type="text"
        value={content} />
      <button onClick={handleSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor