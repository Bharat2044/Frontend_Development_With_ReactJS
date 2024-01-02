// import './App.css';
import Todo from './Todo';

function App() {
  const todos = ['Todo1', 'Todo2', 'Todo3', 'Todo4'];

  return (    
    <div className="App">
      <Todo todoList={todos} />
    </div>
  );
}

export default App;
