import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { addNewTodo, fetchTodos} from "./todoSlice";

function App() {
    const [title, setTitle] = useState("");
    const {status, error} = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const pushTodo = () => {
      dispatch(addNewTodo(title));
      setTitle('')
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
            {status === 'loading' && <h2>Loading</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <TodoList />
        </div>
    );
}

export default App;
