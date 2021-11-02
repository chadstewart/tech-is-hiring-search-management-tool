import ViewTweets from "./ViewTweets";
import SearchDetails from "./SearchDetails";

export default function SearchManagement() {
    return (
        <div style={{ width: "40%", margin: "0 auto" }}>
            <SearchDetails />
            <ViewTweets />
        </div>
    );
}