// import './App.css';
import Todo from './Todo';

function App() {
  const todos = [{data: 'Todo1', id:312}, {data: 'Todo2', id:213}, {data: 'Todo3', id: 314} , {data: 'Todo4', id: 315}];

  return (    
    <div className="App">
      <Todo todoList={todos} />
    </div>
  );
}

export default App;
