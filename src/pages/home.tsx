
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#00C685] font-sans px-4">
      
      {/* Middle Section: Logo and Main Text */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        
        {/* Logo Container - White circular background */}
        <div className="bg-white rounded-full p-1 mb-5 shadow-sm">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-16 h-16 object-contain rounded-full" 
          />
        </div>

        {/* Main Text */}
        <h1 className="text-[#181E6B] font-bold text-xl tracking-wide">
          We are Beyond Banking
        </h1>
      </div>

      {/* Bottom Section: License/Footer Image */}
      <div className="mb-12 w-full flex justify-center">
        <img 
          src="/bottom.png" 
          alt="Licensed by the CBN and insured by the NDIC" 
          className="h-6 object-contain sm:h-8" 
        />
      </div>
    </div>
  );
};

export default Home;
