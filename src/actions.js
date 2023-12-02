export function addTodo(todo) {
    return {
        type: 'todo/addTodo',
        payload: todo
    }
}

export function deleteTodo() {
    return {
        type: 'todo/deleteTodo'
    }
}

export function toggleTodoComplete() {
    return {
        type: 'todo/toggleComplete'
    }
}