import TweetContainer from "./TweetContainer";
import TweetsActions from "./TweetActions";
import testAvatar from "../../../images/test-img.jpg";
import "./ViewTweets.css";

const testTweet = {
    username: "Chad_R_Stewart",
    userAvatar: testAvatar,
    tweetDatePosted: "Jan 1 1970",
    tweetBody: "This is a test tweet... I think..."
}

const tweetArray = [testTweet, testTweet, testTweet];

export default function ViewTweets() {
    return <div>
        {
            tweetArray.map(tweetObject => {
                return <div className="search-results-container">
                    <TweetContainer {...tweetObject} />
                    <TweetsActions />
                </div>
            })
        }
    </div>;
}