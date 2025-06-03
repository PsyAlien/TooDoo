export default function TodoList({ todos, onDelete, onToggleDone }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "done" : ""}>
          <span>{todo.title}</span>
          <div className="button-group">
            {/* Custom ✅ button with SVG */}
            <button 
              onClick={() => onToggleDone(todo.id)} 
              className="check-button"
              aria-label="Mark as done"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#00ff99"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* ❌ delete button */}
            <button onClick={() => onDelete(todo.id)}>❌</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
