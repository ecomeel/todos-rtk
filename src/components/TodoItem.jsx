import React from "react";

export default function TodoItem({ id, text, completed, toggleTodoComplete, removeTodo }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoComplete(id)}
            />
            <span>{text}</span>
            <span className="deleteBtn" onClick={() => removeTodo(id)}>
                &times;
            </span>
        </li>
    );
}
