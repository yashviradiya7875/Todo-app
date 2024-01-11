import { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext';

function TodoInput() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
  
        if (!todo) return
  
        addTodo({ todo, completed: false})
        setTodo("")
      }


    return (
        <form
            onSubmit={add}
            className='flex h-12 mb-3 w-full max-w-[500px]'>
            <input
                type="text"
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-white text-black shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoInput