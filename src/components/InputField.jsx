import React from "react";

export default function InputField({ title, handleInput, handleSubmit }) {
    return (
        <label htmlFor="">
            <input
                type="text"
                value={title}
                onChange={(e) => handleInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Add todo</button>
        </label>
    );
}
