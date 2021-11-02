import ViewTweets from "./ViewTweets";
import SearchDetails from "./SearchDetails";

export default function SearchManagement() {
    return (
        <div style={{ width: "50%", margin: "0 auto" }}>
            <SearchDetails />
            <ViewTweets />
        </div>
    );
}