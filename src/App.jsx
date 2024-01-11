import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import { TodoProvider } from './contexts/ToDoContext'
import TodoList from './components/TodoList'


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prev => [{ id: Date.now(), ...todo }, ...prev])
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"))
    if (todos && todos.length > 0) setTodos(todos)

  }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])




  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className='  h-screen bg-black text-white w-screen'>
        <h1 className='text-3xl font-bold text-center p-10 '>MANAGE YOUR <span className=' text-purple-400'>TODOs</span></h1>

        <div className='w-full  mx-auto shadow-md rounded-lg px-4 py-3 text-white flex-wrap m-auto item-center text-center justify-center max-w-[50%] min-w-[40%] flex h bg-purple-500 min-h-[200px]'>
          <TodoInput />
          <div className="flex flex-wrap gap-y-2">
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoList todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
