import ViewTweets from "./ViewTweets";
import SearchDetails from "./SearchDetails";
import './SearchManagement.css';

export default function SearchManagement() {
    return (
        <div className="search-management-container">
            <SearchDetails />
            <ViewTweets />
        </div>
    );
}