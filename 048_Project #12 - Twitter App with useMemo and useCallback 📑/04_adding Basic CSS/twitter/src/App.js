import './App.css';
import TweetList from './components/TweetList';

const initialDummyTweets = [
  {id: 0, content: 'We have a new twitter as threads', likeCount: 3},
  {id: 1, content: 'What should we post ??', likeCount: 4},
  {id: 2, content: 'What is up with tech community ?', likeCount: 2},
];

function App() {
  return (
    <div>
      <TweetList tweets={initialDummyTweets} />
    </div>
  );
}

export default App;
