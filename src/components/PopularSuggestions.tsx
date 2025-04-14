
import { motion } from "framer-motion";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface PopularSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

interface TrendingItem {
  name: string;
  imageUrl: string;
  description: string;
}

const PopularSuggestions = ({ onSuggestionClick }: PopularSuggestionsProps) => {
  const destinations: TrendingItem[] = [
    {
      name: "Bali, Indonesia",
      imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Tropical paradise"
    },
    {
      name: "Santorini, Greece",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Island getaway"
    },
    {
      name: "Kyoto, Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Ancient temples"
    },
    {
      name: "Machu Picchu, Peru",
      imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Historic wonder"
    },
    {
      name: "Amalfi Coast, Italy",
      imageUrl: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Coastal beauty"
    },
    {
      name: "Marrakech, Morocco",
      imageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Vibrant culture"
    },
    {
      name: "Reykjavik, Iceland",
      imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Northern lights"
    },
    {
      name: "Maldives",
      imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Overwater bungalows"
    },
    {
      name: "Prague, Czech Republic",
      imageUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Fairytale architecture"
    },
    {
      name: "Bangkok, Thailand",
      imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Street food paradise"
    },
  ];

  const events: TrendingItem[] = [
    {
      name: "New Year's Eve in New York",
      imageUrl: "https://images.unsplash.com/photo-1515388242805-b3488e247b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Ball drop celebration"
    },
    {
      name: "Carnival in Rio de Janeiro",
      imageUrl: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "World's biggest party"
    },
    {
      name: "Cherry Blossom Festival in Japan",
      imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Springtime celebration"
    },
    {
      name: "Oktoberfest in Munich",
      imageUrl: "https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Beer festival"
    },
    {
      name: "Holi Festival in India",
      imageUrl: "https://images.unsplash.com/photo-1615884435825-523916f06a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Festival of colors"
    },
    {
      name: "Running of the Bulls, Spain",
      imageUrl: "https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Thrilling tradition"
    },
    {
      name: "Mardi Gras in New Orleans",
      imageUrl: "https://images.unsplash.com/photo-1547405358-9e9d6a166b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Colorful celebration"
    },
    {
      name: "Burning Man, Nevada",
      imageUrl: "https://images.unsplash.com/photo-1513289754978-32135b1db1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Desert art festival"
    },
    {
      name: "Tomorrowland, Belgium",
      imageUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Electronic music festival"
    },
    {
      name: "Day of the Dead, Mexico",
      imageUrl: "https://images.unsplash.com/photo-1539844561132-1c9aabd333eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Cultural celebration"
    },
  ];

  const destinationsScrollRef = useRef<HTMLDivElement>(null);
  const eventsScrollRef = useRef<HTMLDivElement>(null);
  
  const [showLeftButtonDest, setShowLeftButtonDest] = useState(false);
  const [showRightButtonDest, setShowRightButtonDest] = useState(true);
  const [showLeftButtonEvents, setShowLeftButtonEvents] = useState(false);
  const [showRightButtonEvents, setShowRightButtonEvents] = useState(true);

  const handleDestinationsScroll = () => {
    if (destinationsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = destinationsScrollRef.current;
      setShowLeftButtonDest(scrollLeft > 0);
      setShowRightButtonDest(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleEventsScroll = () => {
    if (eventsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = eventsScrollRef.current;
      setShowLeftButtonEvents(scrollLeft > 0);
      setShowRightButtonEvents(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const destScrollElement = destinationsScrollRef.current;
    const eventsScrollElement = eventsScrollRef.current;
    
    if (destScrollElement) {
      destScrollElement.addEventListener("scroll", handleDestinationsScroll);
      return () => destScrollElement.removeEventListener("scroll", handleDestinationsScroll);
    }
    
    if (eventsScrollElement) {
      eventsScrollElement.addEventListener("scroll", handleEventsScroll);
      return () => eventsScrollElement.removeEventListener("scroll", handleEventsScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right", ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const { clientWidth } = ref.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100"
    >
      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <TrendingUp className="text-travel-blue mr-2" size={18} />
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Trending Destinations
              </h3>
            </div>
          </div>
          
          <div className="relative">
            {showLeftButtonDest && (
              <button 
                onClick={() => scroll("left", destinationsScrollRef)} 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-1.5 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
            )}
            
            <div 
              ref={destinationsScrollRef}
              className="flex overflow-x-auto pb-2 gap-3 hide-scrollbar snap-x"
              onScroll={handleDestinationsScroll}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  onClick={() => onSuggestionClick(destination.name)}
                  className="group flex-shrink-0 w-36 snap-start cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="w-36 h-36 relative">
                      <img 
                        src={destination.imageUrl} 
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-gray-900 font-medium text-sm line-clamp-1 group-hover:text-travel-blue transition-colors">
                        {destination.name}
                      </p>
                      <p className="text-gray-500 text-xs line-clamp-1">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {showRightButtonDest && (
              <button 
                onClick={() => scroll("right", destinationsScrollRef)} 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-1.5 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            )}
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <TrendingUp className="text-travel-blue mr-2" size={18} />
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Trending Events
              </h3>
            </div>
          </div>
          
          <div className="relative">
            {showLeftButtonEvents && (
              <button 
                onClick={() => scroll("left", eventsScrollRef)} 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-1.5 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
            )}
            
            <div 
              ref={eventsScrollRef}
              className="flex overflow-x-auto pb-2 gap-3 hide-scrollbar snap-x"
              onScroll={handleEventsScroll}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {events.map((event, index) => (
                <div
                  key={index}
                  onClick={() => onSuggestionClick(event.name)}
                  className="group flex-shrink-0 w-36 snap-start cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="w-36 h-36 relative">
                      <img 
                        src={event.imageUrl} 
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-gray-900 font-medium text-sm line-clamp-1 group-hover:text-travel-blue transition-colors">
                        {event.name}
                      </p>
                      <p className="text-gray-500 text-xs line-clamp-1">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {showRightButtonEvents && (
              <button 
                onClick={() => scroll("right", eventsScrollRef)} 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-1.5 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularSuggestions;
