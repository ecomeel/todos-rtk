import "./App.css";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
              ...todos,
              {
                id: new Date().toISOString(),
                text,
                completed: false
              }
            ]);
            setText('');
        }
    };

    return (
        <div className="App">
            <label htmlFor="">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={addTodo}>Add todo</button>
            </label>
            <ul>
              {
                todos.map(todo => <li key={todo.id}>
                  <input type="checkbox"/>
                  <span>{todo.text}</span>
                  <span style={{color: 'red'}}>&times;</span>
                </li> )
              }
            </ul>
        </div>
    );
}

export default App;
