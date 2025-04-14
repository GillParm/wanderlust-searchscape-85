
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DestinationType {
  id: string;
  title: string;
  imageUrl: string;
  count?: number;
}

const DestinationTypeCarousel = () => {
  const destinationTypes: DestinationType[] = [
    {
      id: "beach",
      title: "Beach",
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 1254,
    },
    {
      id: "all-inclusive",
      title: "All Inclusive",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 876,
    },
    {
      id: "family-friendly",
      title: "Family Friendly",
      imageUrl: "https://images.unsplash.com/photo-1541029071145-badf5c6c5aee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 943,
    },
    {
      id: "adventure",
      title: "Adventure",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 1056,
    },
    {
      id: "romantic",
      title: "Romantic",
      imageUrl: "https://images.unsplash.com/photo-1529044728228-5233dbbe39f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 723,
    },
    {
      id: "city",
      title: "City Break",
      imageUrl: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 1148,
    },
    {
      id: "cultural",
      title: "Cultural",
      imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 892,
    },
    {
      id: "nature",
      title: "Nature",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 1372,
    },
  ];

  const handleDestinationTypeClick = (type: string) => {
    window.location.href = `/search-results?type=${encodeURIComponent(type)}`;
  };

  return (
    <div className="relative w-full">
      <motion.h2 
        className="text-2xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Or select a popular type of destination
      </motion.h2>
      
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {destinationTypes.map((type) => (
            <CarouselItem key={type.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <motion.div 
                className="overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleDestinationTypeClick(type.id)}
              >
                <div className="relative">
                  <AspectRatio ratio={1}>
                    <img
                      src={type.imageUrl}
                      alt={type.title}
                      className="object-cover w-full h-full brightness-[0.85] transition-all duration-300 hover:brightness-100 hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/5" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white text-xl font-bold drop-shadow-sm">
                        {type.title}
                      </h3>
                      {type.count && (
                        <span className="flex items-center text-white text-sm backdrop-blur-sm bg-white/10 px-2 py-1 rounded-full">
                          <MapPin size={14} className="mr-1" />
                          {type.count}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
        <CarouselNext className="right-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default DestinationTypeCarousel;
