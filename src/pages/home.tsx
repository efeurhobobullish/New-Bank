import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to onboarding after 4 seconds
    // This allows for exactly 2 full cycles of the heartbeat animation
    const timer = setTimeout(() => {
      navigate('/onboarding'); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    // bg-primary pulls the OPay green from your index.css
    <div className="h-screen w-full bg-primary flex flex-col justify-between items-center font-sans overflow-hidden">
      
      {/* Center Content */}
      <div className="flex-1 flex flex-col justify-center items-center">
        
        {/* White Circle Background with Framer Motion Heartbeat */}
        <motion.div 
          className="bg-white rounded-full w-[100px] h-[100px] flex justify-center items-center mb-5 shadow-md"
          animate={{ 
            scale: [1, 1.15, 1, 1.15, 1], // The "Lub-Dub" pattern: Normal -> Big -> Normal -> Big -> Normal
          }}
          transition={{
            duration: 1.5,             // Length of one full "Lub-Dub....." cycle
            ease: "easeInOut",         // Smooth acceleration/deceleration
            times: [0, 0.15, 0.3, 0.45, 1], // Syncs the beats to the start of the second, then a long pause
            repeat: Infinity,          // Loops forever until navigation happens
            repeatDelay: 0.5           // Adds a slight rest between cycles
          }}
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-[60px] h-auto" 
          />
        </motion.div>

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


