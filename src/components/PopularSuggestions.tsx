
import { motion } from "framer-motion";

interface PopularSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const PopularSuggestions = ({ onSuggestionClick }: PopularSuggestionsProps) => {
  const popularDestinations = [
    "Bali, Indonesia",
    "Santorini, Greece",
    "Kyoto, Japan",
    "Machu Picchu, Peru",
  ];

  const popularEvents = [
    "New Year's Eve in New York",
    "Carnival in Rio de Janeiro",
    "Cherry Blossom Festival in Japan",
    "Oktoberfest in Munich",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute z-10 w-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">
            POPULAR DESTINATIONS
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                onClick={() => onSuggestionClick(destination)}
                className="p-3 hover:bg-travel-light-blue rounded-lg cursor-pointer transition-colors duration-200 flex items-center"
              >
                <div className="w-10 h-10 rounded-full bg-travel-light-blue flex items-center justify-center mr-3">
                  <span className="text-travel-blue font-bold">
                    {destination.charAt(0)}
                  </span>
                </div>
                <span className="text-gray-800">{destination}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-2">
            POPULAR EVENTS
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {popularEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => onSuggestionClick(event)}
                className="p-3 hover:bg-travel-light-blue rounded-lg cursor-pointer transition-colors duration-200 flex items-center"
              >
                <div className="w-10 h-10 rounded-full bg-travel-light-blue flex items-center justify-center mr-3">
                  <span className="text-travel-blue font-bold">
                    {event.charAt(0)}
                  </span>
                </div>
                <span className="text-gray-800">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularSuggestions;
