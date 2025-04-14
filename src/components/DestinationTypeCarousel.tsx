
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

interface DestinationType {
  id: string;
  title: string;
  imageUrl: string;
  count?: number;
  icon?: React.ReactNode;
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
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 943,
      icon: <Users size={16} className="mr-1" />
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
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      count: 723,
      icon: <Heart size={16} className="mr-1" />
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
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {destinationTypes.map((type, index) => (
            <CarouselItem key={type.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card 
                  className="overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full"
                  onClick={() => handleDestinationTypeClick(type.id)}
                >
                  <motion.div 
                    className="cursor-pointer h-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="relative">
                      <AspectRatio ratio={1}>
                        <img
                          src={type.imageUrl}
                          alt={type.title}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 0.5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AspectRatio>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white text-xl font-bold drop-shadow-lg">
                            {type.title}
                          </h3>
                          
                          {type.count && (
                            <span className="flex items-center text-white text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                              {type.icon || null}
                              {type.count.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="bg-gradient-to-b from-white/90 to-white p-4">
                      <p className="text-sm text-gray-600">
                        {type.id === "beach" && "Relax on stunning coastlines with crystal clear waters."}
                        {type.id === "all-inclusive" && "Enjoy premium resorts with everything included."}
                        {type.id === "family-friendly" && "Perfect destinations for memorable family vacations."}
                        {type.id === "adventure" && "Thrilling experiences for the adventurous traveler."}
                        {type.id === "romantic" && "Idyllic settings for couples seeking romance."}
                        {type.id === "city" && "Explore vibrant urban centers around the world."}
                        {type.id === "cultural" && "Immerse yourself in rich historical experiences."}
                        {type.id === "nature" && "Connect with breathtaking natural landscapes."}
                      </p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors shadow-md" />
        <CarouselNext className="right-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors shadow-md" />
      </Carousel>
    </div>
  );
};

export default DestinationTypeCarousel;
