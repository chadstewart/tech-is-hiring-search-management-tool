import './TweetContainer.css'

export default function TweetContainer(props: {
    username: string,
    userAvatar: string,
    tweetBody: string,
    tweetDatePosted: string
})

{
    return (
        <div className="tweet-container">
            <div className="tweet-header">
                <div className="tweet-user-details">
                    <a target="blank" href={"https://www.twitter.com/" + props.username}>
                        <img alt={"Avatar for " + props.username} src={props.userAvatar} />
                    </a>
                    <a target="blank" href={"https://www.twitter.com/" + props.username}>@{props.username}</a>
                </div>
                <div className="spacer"> | </div>
                <div className="tweet-date-posted">{props.tweetDatePosted}</div>
            </div>
            <div className="tweet-body">
                <div className="tweet-body-content">{props.tweetBody}</div>
            </div>
        </div>
    );
}