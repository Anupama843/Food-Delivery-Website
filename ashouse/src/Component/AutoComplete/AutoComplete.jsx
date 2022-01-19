import { useState } from "react";
import './AutoComplete.css';

const AutoComplete = ({ suggestions, didSelectedSuggestions }) => {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    return (
        <div className='auto-complete'>
            <label htmlFor="input-label" className="auto-complete-label">Search</label>
            <input className='auto-complete-input' id="input-label"
                type="text"
                onChange={onChange}
                onClick={onClick}
                value={input}
                placeholder="Search for restaurants, cuisines..."
            />
            {showSuggestions && input && <SuggestionsListComponent />}
        </div>
    );

    function onChange(e) {
        const userInput = e.target.value;
        const unLinked = filterByValue(suggestions, userInput);
        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    }

    function filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some((k) => {
                return o[k].toString().toLowerCase()?.includes(string.toLowerCase())
            }));
    }

    function onClick(e, suggestion) {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        didSelectedSuggestions(suggestion);
    };

    function SuggestionsListComponent () {
        return filteredSuggestions.length ? (
            <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    if (index === activeSuggestionIndex) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} key={suggestion.id} onClick={(e) => onClick(e, suggestion) }>
                            {suggestion.name}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div className="no-suggestions">
                <em>No suggestions, you're on your own!</em>
            </div>
        );
    };
};


export default AutoComplete;