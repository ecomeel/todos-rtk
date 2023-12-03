import React from "react";
import { useDispatch } from "react-redux";

import { removeTodo, toggleStatus } from "../todoSlice";

export default function TodoItem({ id, title, completed }) {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
            />
            <span>{title}</span>
            <span
                className="deleteBtn"
                onClick={() => dispatch(removeTodo(id))}
            >
                &times;
            </span>
        </li>
    );
}
