import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(state.todos);
            console.log(action);
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                complete: false,
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id != action.payload.id
            );
        },
        toggleComplete: (state, action) => {
            const toggledTodo = state.todos.find(
                (todo) => todo.id === action.payload.id
            );
            toggledTodo.complete = !toggledTodo.complete;
        },
    },
});

export const { addTodo, deleteTodo, toggleComplete } = todosSlice.actions;

export default todosSlice.reducer;
