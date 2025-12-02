import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to onboarding after 3 seconds (allows for 3 heartbeats)
    const timer = setTimeout(() => {
      navigate('/onboarding'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      {/* Internal Style for the specific heartbeat animation */}
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.15); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .animate-heartbeat {
          animation: heartbeat 1s ease-in-out infinite;
        }
      `}</style>

      {/* Main Container */}
      <div className="h-screen w-full bg-primary flex flex-col justify-between items-center font-sans">
        
        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center items-center">
          
          {/* White Circle Background for Logo with Heartbeat Animation */}
          <div className="animate-heartbeat bg-white rounded-full w-[100px] h-[100px] flex justify-center items-center mb-5 shadow-md">
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
            src="/bottom.png" 
            alt="License and Insurance" 
            className="max-w-[80%] h-auto max-h-[60px]" 
          />
        </div>
      </div>
    </>
  );
};

export default Home;
