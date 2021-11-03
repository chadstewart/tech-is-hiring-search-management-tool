import { intro } from "../../../../utils/TechIsHiringIntro";
import "./TweetActions.css";

export default function TweetsActions() {

    function handleAction(action: string) {
        if(action === 'full') return alert(intro[`full`]);
        if(action === 'abridged') return alert(intro[`abridged`]);
    }

    return (
        <div className="tweet-actions-container">
            <button className="tweet-actions-option" onClick={() => handleAction("full")}>
                Send full Tech Is Hiring Inquiry
            </button>
            <button className="tweet-actions-option" onClick={() => handleAction("abridged")}>
                Send shortened Tech Is Hiring Inquiry
            </button>
        </div>
    );
}