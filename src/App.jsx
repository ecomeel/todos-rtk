import { useState } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { addTodo} from "./todoSlice";

function App() {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const pushTodo = () => {
      dispatch(addTodo({text}));
      setText('')
    }

    const toggleTodoComplete = (todoId) => {
    };

    return (
        <div className="App">
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={pushTodo}
            />
            <TodoList />
        </div>
    );
}

export default App;
