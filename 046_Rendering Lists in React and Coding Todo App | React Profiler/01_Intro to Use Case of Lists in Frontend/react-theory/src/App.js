// import './App.css';
import Component1 from './Component1';
import Todo from './Todo';

function App() {
  const todos = ['Todo1', 'Todo2', 'Todo3', 'Todo4'];

  return (    
    <div className="App">
      <Todo todoList={todos} />
      {/* <Component1 /> */}
    </div>
  );
}

export default App;
