const initialState = [];

export default function reducerTodo(state = initialState, action) {
    switch (action.type) {
        case addTodo:
            return [...state, action.payload];
            
        case deleteTodo:
            return state.filter((todo) => todo.id != action.payload);

        case toggleTodoComplete:
            state.forEach((todo) => {
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
