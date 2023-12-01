import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodoComplete, removeTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    ket={todo.id}
                    {...todo}
                    toggleTodoComplete={toggleTodoComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}
