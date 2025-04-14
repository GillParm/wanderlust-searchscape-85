
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SearchBar from "@/components/SearchBar";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";
  const type = searchParams.get("type") || "";

  useEffect(() => {
    // In a real app, we would fetch search results based on the query or type
    console.log("Fetching results for:", query || type);
  }, [query, type]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-travel-blue hover:underline mb-6"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to search
        </Link>

        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {type
              ? `Exploring ${type.replace("-", " ")} destinations`
              : `Search results for "${query}"`}
          </h1>

          {/* Placeholder for search results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
