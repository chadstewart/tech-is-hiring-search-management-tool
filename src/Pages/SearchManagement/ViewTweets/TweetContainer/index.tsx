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
            <header className="tweet-header">
                <div className="tweet-user-details">
                    <a aria-hidden="true"
                       tabIndex={-1}
                       target="blank"
                       rel="noopener noreferrer"
                       href={`https://www.twitter.com/${props.username}`}>
                        <img alt="" src={props.userAvatar} />
                    </a>
                    <a id="tweet-username"
                       rel="noopener noreferrer"
                       target="blank"
                       href={`https://www.twitter.com/${props.username}`}>
                           @{props.username}
                    </a>
                </div>
                <div className="spacer"> | </div>
                <div className="tweet-date-posted">{props.tweetDatePosted}</div>
            </header>
            <div className="tweet-body">
                <p className="tweet-body-content">{props.tweetBody}</p>
            </div>
        </div>
    );
}