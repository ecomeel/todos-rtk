import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "@reduxjs/toolkit";

import reducerTodo from "./reducer.js";

const root = document.getElementById("root");

const store = createStore(reducerTodo)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
