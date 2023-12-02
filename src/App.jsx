import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { addTodo, fetchTodos} from "./todoSlice";

function App() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const pushTodo = () => {
      dispatch(addTodo({text}));
      setText('')
    }

    useEffect(() => {
      dispatch(fetchTodos())
    }, [])
    
    return (
        <div className="App">
            <InputField
                title={title}
                handleInput={setTitle}
                handleSubmit={pushTodo}
            />
            <TodoList />
        </div>
    );
}

export default App;
