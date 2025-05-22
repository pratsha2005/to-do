import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        title: "Buy milk",
        task: "Buy 2 liters of milk",
        completed: false
    }]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                task: action.payload.task,
                completed: false
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id != action.payload))
        },
        updateTodo: (state, action) => {

        },
        toggleTodo: (state, action) => {
            state.todos.map((todo) => ((todo.id == action.payload) ? (todo.completed = !todo.completed) : (todo.completed = todo.completed)))
        }
    }
})

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;