import React from "react";
import { useDispatch } from "react-redux";

import {deleteTodo, toggleComplete} from '../todoSlice'

export default function TodoItem({ id, text, completed}) {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleComplete({id}))}
            />
            <span>{text}</span>
            <span className="deleteBtn" onClick={() => dispatch(deleteTodo({id}))}>
                &times;
            </span>
        </li>
    );
}
