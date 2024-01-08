import Tweet from "./Tweet";
import "../CSS/TweetList.css";

function TweetList({ tweets }) {
    return (
        <ul className="tweet-list">
            {tweets.map((tweet) => (
                <li className="tweet-like-wrapper" key={tweet.id}>
                    <Tweet content={tweet.content} likeCount={tweet.likeCount} />
                </li>
            ))}
        </ul>
    );
}

export default TweetList;
