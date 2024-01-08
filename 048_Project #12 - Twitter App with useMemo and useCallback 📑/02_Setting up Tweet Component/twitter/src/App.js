import './App.css';
import Tweet from './components/Tweet';

function App() {
  return (
    <div>
      <Tweet content={"First Tweet"} likeCount={20} />
    </div>
  );
}

export default App;
