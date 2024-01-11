import { createContext, useContext } from "react";

export const TodoContext = createContext({

    todos: [{
        id: 1,
        todo: "my todo",
        completed: false
    }],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (todo, id) => { },
    toggleCompleted: (id) => { }

})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider