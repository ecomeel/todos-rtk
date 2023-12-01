import React from "react";

export default function InputField({ text, handleInput, handleSubmit }) {
    return (
        <label htmlFor="">
            <input
                type="text"
                value={text}
                onChange={(e) => handleInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Add todo</button>
        </label>
    );
}
