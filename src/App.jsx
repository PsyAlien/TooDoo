import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

const LOCAL_KEY = "myTodos";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved && JSON.parse(saved).length > 0) {
      setTodos(JSON.parse(saved));
    } else {
      const myTodos = [
        { id: 1, title: "Summon demon 🩸" },
        { id: 2, title: "Fix spaceship engine 👽" },
        { id: 3, title: "Pray to alien overlords 🔮" },
      ];
      setTodos(myTodos);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(myTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = (id) => {
  const updated = todos.map(todo =>
    todo.id === id 
      ? { ...todo, done: !todo.done } // ← flip 'done' true/false
      : todo
  );
    setTodos(updated); 
  };


  

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: input.trim(),
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="container">
      <h1>🧠✨ Shape your future! 🔮🛸</h1>
      

      <div className="input-group">
        <input
          type="text"
          placeholder="Write your sacrifice..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAdd}>+ Add</button>
      </div>

      <TodoList 
        todos={todos} 
        onDelete={handleDelete} 
        onToggleDone={handleToggleDone}
      />

    </div>
  );
}

export default App;
