import { useState } from "react";
import { useSelector } from "react-redux";


import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { selectTodos } from "./selectors";
import { pushTodo, deleteTodo, toggleComplete } from "./actions";


function App() {
  const todos = useSelector(selectTodos)
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim().length) {
            pushTodo(text)
            setText("");
        }
    };


    const removeTodo = (todoId) => {
        // setTodos(todos.filter((todo) => todo.id != todoId));
        deleteTodo(todoId)
    };

    const toggleTodoComplete = (todoId) => {
      // setTodos(todos.map(todo => {
      //   if (todo.id != todoId) return todo
        
      //   return {
      //     ...todo,
      //     completed: !todo.completed
      //   }
      // }))
      todos.forEach(todo => {
        if (todo.id == todoId) {
          toggleComplete(todoId)
        }
      });

    };

    return (
        <div className="App">
            <InputField
              text={text}
              handleInput={setText}
              handleSubmit={addTodo}
            />
            <TodoList
              todos={todos}
              toggleTodoComplete={toggleTodoComplete}
              removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
