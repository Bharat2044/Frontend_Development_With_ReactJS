function Tweet({ content, likeCount }) {
    return (
        <>
            <div className="tweet-content">
                {content}
            </div>
            <div className="likes">
                {likeCount} likes
            </div>
        </>
    )
}

export default Tweet;