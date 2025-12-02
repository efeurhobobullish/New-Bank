import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, CheckSquare, Square } from 'lucide-react';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [showInvite, setShowInvite] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Toggle for the invitation code section
  const toggleInvite = () => setShowInvite(!showInvite);
  
  // Checkbox toggle
  const toggleAgreed = () => setAgreed(!agreed);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative">
      
      {/* ---------------- Header ---------------- */}
      <div className="flex justify-between items-center p-5 pt-8">
        <button onClick={() => navigate(-1)} className="text-black">
          <ChevronLeft size={28} />
        </button>
        <span className="text-primary font-bold text-lg cursor-pointer">Help</span>
      </div>

      {/* ---------------- Main Content ---------------- */}
      <div className="px-6 mt-4 flex-1">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-black mb-8">
          Get an OPay Account
        </h1>

        {/* Phone Input */}
        <div className="flex items-center bg-gray-50 rounded-lg p-4 mb-4 border border-transparent focus-within:border-primary transition-colors">
          {/* Flag & Code */}
          <div className="flex items-center border-r border-gray-300 pr-3 mr-3">
            <span className="text-2xl mr-2">🇳🇬</span>
            <span className="font-bold text-black text-lg">+234</span>
          </div>
          
          {/* Input Field */}
          <input
            type="tel"
            placeholder="Enter your Mobile No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-transparent w-full text-lg text-black placeholder-gray-400 focus:outline-none font-medium"
          />
        </div>

        {/* Invitation Code Dropdown */}
        <div 
          onClick={toggleInvite}
          className="bg-green-50 rounded-lg p-4 flex justify-between items-center cursor-pointer mb-8"
        >
          <div className="flex items-center gap-3">
            {/* Tiny icon for invite */}
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
               <span className="text-white text-xs">👋</span>
            </div>
            <span className="text-gray-600 font-medium text-sm">Have an Invitation Code? (Optional)</span>
          </div>
          <ChevronDown size={20} className={`text-gray-500 transition-transform ${showInvite ? 'rotate-180' : ''}`} />
        </div>

        {/* Expanded Invite Input (Hidden by default) */}
        {showInvite && (
          <div className="mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
             <input 
               type="text" 
               placeholder="Enter code" 
               className="w-full bg-gray-50 p-4 rounded-lg focus:border-primary border border-transparent outline-none"
             />
          </div>
        )}

        {/* ---------------- Promo Badge & Button Wrapper ---------------- */}
        <div className="relative mt-8 mb-6">
          
          {/* "Get ₦300 airtime" Floating Badge */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 text-xs font-bold py-1 px-3 rounded-full flex items-center gap-2 shadow-sm animate-bounce">
             <span>💸</span> Get ₦300 airtime for free
          </div>

          {/* NEXT Button */}
          <button 
            className={`w-full py-4 rounded-full font-bold text-lg text-white shadow-lg transition-all
              ${phone.length > 9 ? 'bg-primary cursor-pointer hover:opacity-90' : 'bg-green-200 cursor-not-allowed'}
            `}
            disabled={phone.length <= 9}
          >
            NEXT
          </button>
        </div>

        {/* ---------------- Terms & Conditions ---------------- */}
        <div className="flex items-start gap-3 mb-8">
          <button onClick={toggleAgreed} className="mt-1 min-w-[20px]">
            {agreed ? (
              <CheckSquare size={24} className="text-primary bg-white" />
            ) : (
              <Square size={24} className="text-gray-300" />
            )}
          </button>
          
          <p className="text-xs text-gray-500 leading-5">
            I have read, understood and agreed to the{' '}
            <span className="text-primary font-bold">Terms & Conditions</span> and{' '}
            <span className="text-primary font-bold">Privacy Policy</span>.
          </p>
        </div>

        {/* ---------------- Login Link Footer ---------------- */}
        <div className="w-full text-center mt-4">
          <p className="text-gray-600 font-medium">
            Already have an OPay Account?{' '}
            <span 
              onClick={() => navigate('/login')} 
              className="text-primary font-bold cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
