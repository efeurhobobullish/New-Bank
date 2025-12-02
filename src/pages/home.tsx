import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to onboarding after 3 seconds
    const timer = setTimeout(() => {
      navigate('/onboarding'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    // bg-primary pulls the OPay green from your index.css
    <div className="h-screen w-full bg-primary flex flex-col justify-between items-center font-sans overflow-hidden">

      {/* Center Content */}
      <div className="flex-1 flex flex-col justify-center items-center">

        {/* Static White Circle Background */}
        <div className="bg-white rounded-full w-[100px] h-[100px] flex justify-center items-center mb-5 shadow-md">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-[60px] h-auto" 
          />
        </div>

        {/* Tagline */}
        <h1 className="text-main text-2xl font-bold text-center m-0">
          We are Beyond Banking
        </h1>
      </div>

      {/* Bottom Footer */}
      <div className="w-full flex justify-center pb-10">
        <img 
          src="/footer.png" 
          alt="License and Insurance" 
          className="max-w-[80%] h-auto max-h-[60px]" 
        />
      </div>
    </div>
  );
};

export default Home;

