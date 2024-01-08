import Tweet from "./Tweet";

function TweetList({ tweets }) {
    return (
        <ul>
            {
                tweets.map((tweet) => (
                    <li>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount} />
                    </li>
                ))
            }
        </ul>
    )
}

export default TweetList;