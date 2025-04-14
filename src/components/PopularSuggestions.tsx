import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useState } from "react";

interface PopularSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

interface TrendingItem {
  name: string;
  imageUrl: string;
}

const PopularSuggestions = ({ onSuggestionClick }: PopularSuggestionsProps) => {
  const destinations: TrendingItem[] = [
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
    }
  ];

  const events: TrendingItem[] = [
    {
      name: "New Year's Eve in New York",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Family New Year Celebration",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Romantic New Year's Eve",
      imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Times Square Ball Drop",
      imageUrl: "https://images.unsplash.com/photo-1515388242805-b3488e247b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100"
    >
      <div className="p-4">
        <div className="mb-2">
          <div className="flex items-center mb-2">
            <TrendingUp className="text-travel-blue mr-2" size={18} />
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Trending Destinations
            </h3>
          </div>
          
          <div className="space-y-1">
            {destinations.map((destination, index) => (
              <div
                key={index}
                onClick={() => onSuggestionClick(destination.name)}
                className="group p-1.5 hover:bg-travel-light-blue rounded-lg cursor-pointer transition-all duration-200 flex items-center hover:shadow-sm"
              >
                <div className="w-24 h-14 rounded-md overflow-hidden flex-shrink-0 mr-3">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="text-gray-900 font-medium text-sm group-hover:text-travel-blue transition-colors duration-200 line-clamp-1">
                    {destination.name}
                  </span>
                  <p className="text-gray-500 text-xs mt-0.5">Popular destination</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <TrendingUp className="text-travel-blue mr-2" size={18} />
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Trending Events
            </h3>
          </div>
          
          <div className="space-y-1">
            {events.map((event, index) => (
              <div
                key={index}
                onClick={() => onSuggestionClick(event.name)}
                className="group p-1.5 hover:bg-travel-light-blue rounded-lg cursor-pointer transition-all duration-200 flex items-center hover:shadow-sm"
              >
                <div className="w-24 h-14 rounded-md overflow-hidden flex-shrink-0 mr-3">
                  <img 
                    src={event.imageUrl} 
                    alt={event.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="text-gray-900 font-medium text-sm group-hover:text-travel-blue transition-colors duration-200 line-clamp-1">
                    {event.name}
                  </span>
                  <p className="text-gray-500 text-xs mt-0.5">Popular event</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularSuggestions;
