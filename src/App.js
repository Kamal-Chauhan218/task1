import React, {useState } from "react";
import "./App.css";
import TodosList from "./components/TodosList";
import Form from "./components/Form";
import Header from "./components/Header";
import axios from "axios";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const baseURL =
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5";

  const fetch = () =>
    axios.get(baseURL).then((response) => {
      console.log("HELLO");
      setTodos(response.data);
    });

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <div className="fetching">
            <button className="button-add2" onClick={fetch}>
              Fetch
            </button>
          </div>
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
