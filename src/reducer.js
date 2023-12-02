const initialState = {
    todos: [],
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case "todos/addTodo":
            return { ...state, todos: [...state.todos, action.payload] };

        case "todos/deleteTodo":
            return state.filter((todo) => todo.id != action.payload);

        case "todos/toggleComplete":
            state.todos.forEach((todo) => {
                if (todo.id == id) {
                    todo.complete = !todo.complete;
                }
            });
            return state.map((todo) => {
                if (todo.id == action.payload) {
                    todo.complete = !todo.complete;
                }
            });
        default:
            return state;
    }
}
