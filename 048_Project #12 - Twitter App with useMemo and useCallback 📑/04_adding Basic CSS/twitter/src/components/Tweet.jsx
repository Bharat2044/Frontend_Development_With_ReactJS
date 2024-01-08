import "../CSS/Tweet.css";

function Tweet({ content, likeCount }) {
    return (
        <div className='tweet-wrapper'>
            <div className="tweet-content">
                {content}
            </div>
            <div className="likes">
                {likeCount} likes
            </div>
        </div>
    )
}

export default Tweet;