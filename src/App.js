import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h1>Let's add today's tasks to be done</h1>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
