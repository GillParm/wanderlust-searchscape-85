
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import PopularSuggestions from "./PopularSuggestions";

const EXAMPLE_SEARCHES = [
  "I want to go somewhere warm with a beach and forests closeby",
  "I want to take my kids to explore a foreign culture",
  "I want to immerse myself in an artistic paradise"
];

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close the expanded search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dynamic placeholder text animation
  useEffect(() => {
    if (isFocused) {
      setPlaceholder("");
      return;
    }

    let currentText = EXAMPLE_SEARCHES[currentExampleIndex];
    let currentPosition = 0;
    let typingTimer: NodeJS.Timeout;
    let deletingTimer: NodeJS.Timeout;

    if (isTyping) {
      typingTimer = setInterval(() => {
        if (currentPosition < currentText.length) {
          setPlaceholder(currentText.substring(0, currentPosition + 1));
          currentPosition++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000); // Pause at the end of typing
        }
      }, 100);

      return () => clearInterval(typingTimer);
    } else {
      deletingTimer = setInterval(() => {
        if (currentPosition > 0) {
          setPlaceholder(currentText.substring(0, currentPosition - 1));
          currentPosition--;
        } else {
          setIsTyping(true);
          setCurrentExampleIndex((prevIndex) => 
            prevIndex === EXAMPLE_SEARCHES.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 50);

      return () => clearInterval(deletingTimer);
    }
  }, [currentExampleIndex, isTyping, isFocused]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with the query
      window.location.href = `/search-results?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    window.location.href = `/search-results?q=${encodeURIComponent(suggestion)}`;
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsExpanded(true);
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
            ref={inputRef}
            type="text"
            placeholder={isFocused ? "Where do you want to go?" : placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            className="w-full py-4 px-3 text-lg text-gray-700 bg-transparent outline-none rounded-full"
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
