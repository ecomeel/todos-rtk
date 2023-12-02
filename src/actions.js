export function pushTodo(text) {
    return {
        type: 'todos/addTodo',
        payload: {
            id: new Date().toISOString(),
            text,
            completed: false
        }
    }
}

export function deleteTodo(idTodo) {
    return {
        type: 'todos/deleteTodo',
        payload: idTodo
    }
}

export function toggleComplete(idTodo) {
    return {
        type: 'todos/toggleComplete',
        payload: idTodo
    }
}