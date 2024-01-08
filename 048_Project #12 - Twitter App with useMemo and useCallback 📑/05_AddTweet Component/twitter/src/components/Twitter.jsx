import TweetList from './TweetList';
import AddTweet from './AddTweet';
import { useState } from 'react';

const initialDummyTweets = [
    {id: 0, content: 'We have a new twitter as threads', likeCount: 3},
    {id: 1, content: 'What should we post ??', likeCount: 4},
    {id: 2, content: 'What is up with tech community ?', likeCount: 2}
];

function Twitter() {
    const [tweets, setTweets] = useState(initialDummyTweets);

    const handleAddTweet = (text) => {
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id+1 : 0;

        setTweets([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random() * 10),   // this is a random like count 
            id: nextId,
        }]);
    }

    return (
        <>
            <AddTweet onAddTweet={handleAddTweet} />
            <TweetList tweets={tweets} />
        </>
    );
}

export default Twitter;