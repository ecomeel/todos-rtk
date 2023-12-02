import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async function () {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        const data = response.json();

        return data;
    }
);

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        status: null,
        error: null
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
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
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolve',
            state.todos = action.payload
        },
        [fetchTodos.rejected]: (state, action) => {},
    },
});

export const { addTodo, deleteTodo, toggleComplete } = todosSlice.actions;

export default todosSlice.reducer;
