
import { motion } from "framer-motion";
import { TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PopularSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

interface TrendingItem {
  name: string;
  imageUrl: string;
}

const PopularSuggestions = ({ onSuggestionClick }: PopularSuggestionsProps) => {
  const [showMoreDestinations, setShowMoreDestinations] = useState(false);
  const [showMoreEvents, setShowMoreEvents] = useState(false);

  const initialDestinations: TrendingItem[] = [
    {
      name: "Bali, Indonesia",
      imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Santorini, Greece",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Kyoto, Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Machu Picchu, Peru",
      imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const additionalDestinations: TrendingItem[] = [
    {
      name: "Amalfi Coast, Italy",
      imageUrl: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Banff National Park, Canada",
      imageUrl: "https://images.unsplash.com/photo-1581088561839-29a5e8d5b451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const initialEvents: TrendingItem[] = [
    {
      name: "New Year's Eve in New York",
      imageUrl: "https://images.unsplash.com/photo-1515388242805-b3488e247b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Carnival in Rio de Janeiro",
      imageUrl: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Cherry Blossom Festival in Japan",
      imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Oktoberfest in Munich",
      imageUrl: "https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const additionalEvents: TrendingItem[] = [
    {
      name: "Coachella Music Festival, USA",
      imageUrl: "https://images.unsplash.com/photo-1507941097613-9f2157b69235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Running of the Bulls, Spain",
      imageUrl: "https://images.unsplash.com/photo-1565024144485-cfac1106bee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const trendingDestinations = showMoreDestinations 
    ? [...initialDestinations, ...additionalDestinations]
    : initialDestinations;

  const trendingEvents = showMoreEvents
    ? [...initialEvents, ...additionalEvents]
    : initialEvents;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <TrendingUp className="text-travel-blue mr-2" size={18} />
            <h3 className="text-sm font-semibold text-gray-500">
              TRENDING DESTINATIONS
            </h3>
          </div>
          
          <div className="space-y-3">
            {trendingDestinations.map((destination, index) => (
              <div
                key={index}
                onClick={() => onSuggestionClick(destination.name)}
                className="p-3 hover:bg-travel-light-blue rounded-lg cursor-pointer transition-colors duration-200 flex items-center"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mr-3">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-800">{destination.name}</span>
              </div>
            ))}
            
            {!showMoreDestinations && (
              <button
                onClick={() => setShowMoreDestinations(true)}
                className="w-full p-2 mt-2 text-sm text-travel-blue hover:bg-travel-light-blue rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                More destinations <ChevronDown className="ml-1" size={16} />
              </button>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <TrendingUp className="text-travel-blue mr-2" size={18} />
            <h3 className="text-sm font-semibold text-gray-500">
              TRENDING EVENTS
            </h3>
          </div>
          
          <div className="space-y-3">
            {trendingEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => onSuggestionClick(event.name)}
                className="p-3 hover:bg-travel-light-blue rounded-lg cursor-pointer transition-colors duration-200 flex items-center"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mr-3">
                  <img 
                    src={event.imageUrl} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-800">{event.name}</span>
              </div>
            ))}
            
            {!showMoreEvents && (
              <button
                onClick={() => setShowMoreEvents(true)}
                className="w-full p-2 mt-2 text-sm text-travel-blue hover:bg-travel-light-blue rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                More events <ChevronDown className="ml-1" size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularSuggestions;
