
import SearchBar from "@/components/SearchBar";
import DestinationTypeCarousel from "@/components/DestinationTypeCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-travel-light-blue">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Discover Your Perfect Destination
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your next adventure from thousands of destinations worldwide
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-20">
          <SearchBar />
        </div>
        
        {/* Destination Types Carousel */}
        <div className="max-w-6xl mx-auto">
          <DestinationTypeCarousel />
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-60 -left-24 w-72 h-72 bg-travel-teal rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-40 -right-24 w-96 h-96 bg-travel-blue rounded-full opacity-10 blur-3xl"></div>
    </div>
  );
};

export default Index;
