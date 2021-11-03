import { searchTerms } from "../../../utils/searchterms";
import "./SearchDetails.css";

export default function SearchDetails() {
    return (
        <header className="search-details-container">
            <div className="search-details-left">
                <label className="search-terms-header">Search Terms:</label>
                <div className="search-terms-container">
                    {searchTerms.map(searchTerm =>
                        <div className="search-term">{`"${searchTerm}"`}</div>
                    )}
                </div>
            </div>
            <div className="search-details-right">
                <div id="search-attribute-title">
                No. of search results: <br />
                No. of results disqualified: 
                </div>
                <div id="search-attribute-value">
                7<br />
                4
                </div>
            </div>
        </header>
    );
}

/* 

search details:

search terms
no. of search results
no. of results disqualified

*/