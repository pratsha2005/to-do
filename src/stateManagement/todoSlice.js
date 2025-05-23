import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: Date.now(),
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
                id: Date.now(),
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
            state.todos = state.todos.map((todo) => ((todo.id == action.payload.id)? (todo.task = action.payload.task): (todo))
            )
        },
        toggleTodo: (state, action) => {
            state.todos.map((todo) => ((todo.id == action.payload) ? (todo.completed = !todo.completed) : (todo.completed = todo.completed)))
        }
    }
})

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;