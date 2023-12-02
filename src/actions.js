export function push(text) {
    return {
        type: 'todo/addTodo',
        payload: {
            id: new Date().toISOString(),
            text,
            completed: false
        }
    }
}

export function deleteTodo(idTodo) {
    return {
        type: 'todo/deleteTodo',
        payload: idTodo
    }
}

export function toggleTodoComplete(idTodo) {
    return {
        type: 'todo/toggleComplete',
        payload: idTodo
    }
}