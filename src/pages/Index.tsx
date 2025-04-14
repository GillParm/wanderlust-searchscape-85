
import SearchBar from "@/components/SearchBar";
import DestinationTypeCarousel from "@/components/DestinationTypeCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-travel-light-blue">
      {/* Hero Section with Beach Background */}
      <div className="relative pt-16 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="Beach Hero" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-travel-light-blue"></div>
        </div>
        
        <div className="relative z-10 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Discover Your Perfect Destination
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Find your next adventure from thousands of destinations worldwide
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="relative z-20 max-w-3xl mx-auto mb-20">
          <SearchBar />
        </div>
        
        {/* Destination Types Carousel */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
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
