import { useState } from "react"
import { useTodo } from "../contexts/ToDoContext"


function TodoList({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }


    return (
        <>
            <div
                className={`flex border-none max-w-[500px] m-auto rounded-lg px-3 mt-1 py-1.5 gap-x-3 shadow-sm shadow-black/75 duration-500  text-black ${todo.completed ? "bg-[#c6e9a7a1]" : "bg-[#0000000f]"
                    }`}
            >
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                        } ${todo.completed ? "line-through" : ""}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />
                <button
                    className="inline-flex w-12 h-8 rounded-lg text-sm border-none justify-center items-center bg-blue-400 hover:bg-blue-500 shrink-0 disabled:opacity-50"
                    onClick={() => {
                        if (todo.completed) return;

                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "Save" : "Edit"}
                </button>
                <button
                    className="inline-flex w-12 h-8 rounded-lg text-sm border-none justify-center items-center bg-red-400 hover:bg-red-500 shrink-0"
                    onClick={() => deleteTodo(todo.id)}
                >
                    
                    Delete
                </button>
            </div>
        </>
    )
}

export default TodoList