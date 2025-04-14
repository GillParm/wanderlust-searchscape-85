
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import PopularSuggestions from "./PopularSuggestions";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Close the expanded search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with the query
      console.log(`Searching for: ${searchQuery}`);
      // In a real app, we would navigate to the search results page
      // navigate(`/search-results?q=${encodeURIComponent(searchQuery)}`);
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    console.log(`Selected suggestion: ${suggestion}`);
    // In a real app, we would navigate to the search results page
    // navigate(`/search-results?q=${encodeURIComponent(suggestion)}`);
    alert(`Selected suggestion: ${suggestion}`);
  };

  return (
    <div
      ref={searchBarRef}
      className="relative w-full max-w-3xl mx-auto transition-all duration-300"
    >
      <form onSubmit={handleSearch} className="relative">
        <div
          className={`flex items-center w-full bg-white rounded-full shadow-lg transition-all duration-300 ${
            isExpanded ? "shadow-xl ring-2 ring-travel-blue" : ""
          }`}
        >
          <Search
            className="ml-4 text-travel-blue"
            size={24}
            onClick={() => setIsExpanded(true)}
          />
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="w-full py-4 px-3 text-lg text-gray-700 bg-transparent outline-none"
          />
          <button
            type="submit"
            className="py-3 px-6 mr-1 bg-travel-blue text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200"
          >
            Search
          </button>
        </div>
      </form>

      {isExpanded && (
        <PopularSuggestions onSuggestionClick={handleSuggestionClick} />
      )}
    </div>
  );
};

export default SearchBar;
