import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, CheckSquare, Gift } from 'lucide-react';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [showInvite, setShowInvite] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Toggle for the invitation code section
  const toggleInvite = () => setShowInvite(!showInvite);
  
  // Checkbox toggle
  const toggleAgreed = () => setAgreed(!agreed);

  // Checks if phone number is valid length (10 digits after removing leading 0, or just >9 chars)
  const isPhoneValid = phone.length >= 10;

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative max-w-md mx-auto">
      
      {/* ---------------- Header ---------------- */}
      <div className="flex justify-between items-center px-4 pt-6 pb-2">
        <button onClick={() => navigate(-1)} className="text-black p-2 -ml-2">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <span className="text-primary font-bold text-base cursor-pointer">Help</span>
      </div>

      {/* ---------------- Main Content ---------------- */}
      <div className="px-5 mt-2 flex-1 flex flex-col">
        
        {/* Title */}
        <h1 className="text-[26px] font-bold text-[#1b1b1b] mb-8 leading-tight">
          Get an OPay Account
        </h1>

        {/* Phone Input */}
        <div className="flex items-center bg-[#F5F5F5] rounded-xl px-4 py-4 mb-5 border border-transparent focus-within:border-primary transition-colors">
          {/* Flag & Code */}
          <div className="flex items-center pr-3 mr-3 border-r border-gray-300 h-6">
            <span className="text-2xl mr-2 leading-none">🇳🇬</span>
            <span className="font-bold text-[#1b1b1b] text-base">+234</span>
          </div>
          
          {/* Input Field */}
          <input
            type="tel"
            placeholder="Enter your Mobile No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-transparent w-full text-base text-[#1b1b1b] placeholder-gray-400 focus:outline-none font-medium caret-primary"
          />
        </div>

        {/* Invitation Code Dropdown */}
        <div 
          onClick={toggleInvite}
          className="bg-[#E8F9F0] rounded-xl p-4 flex justify-between items-center cursor-pointer mb-2 active:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-3">
            {/* Styled Icon Container matching the screenshot's character graphic */}
            <div className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center border border-white/50">
               <Gift size={16} className="text-primary fill-current" />
            </div>
            <span className="text-gray-600 font-medium text-[13px] tracking-wide">Have an Invitation Code? (Optional)</span>
          </div>
          <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${showInvite ? 'rotate-180' : ''}`} />
        </div>

        {/* Expanded Invite Input (Animated) */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showInvite ? 'max-h-20 mb-6' : 'max-h-0 mb-0'}`}>
           <input 
             type="text" 
             placeholder="Enter invitation code" 
             className="w-full bg-[#F5F5F5] p-4 rounded-xl focus:border-primary border border-transparent outline-none text-base mt-2"
           />
        </div>

        {/* ---------------- Promo Badge & Button Wrapper ---------------- */}
        <div className="relative mt-12 mb-6 w-full">
          
          {/* "Get ₦300 airtime" Floating Badge */}
          {/* Exact pill shape and color from screenshot */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#E8F9F0] text-primary text-[11px] font-bold py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-sm whitespace-nowrap z-10">
             <span className="text-lg">💸</span> Get ₦300 airtime for free
          </div>

          {/* NEXT Button */}
          <button 
            className={`w-full py-3.5 rounded-full font-bold text-[16px] text-white transition-all duration-200 shadow-sm
              ${isPhoneValid ? 'bg-primary cursor-pointer active:scale-[0.98]' : 'bg-[#A6EBC5] cursor-not-allowed'}
            `}
            disabled={!isPhoneValid}
          >
            NEXT
          </button>
        </div>

        {/* ---------------- Terms & Conditions ---------------- */}
        <div className="flex items-start gap-3 px-1 mb-6">
          <button onClick={toggleAgreed} className="mt-0.5 min-w-[20px] active:scale-90 transition-transform">
            {agreed ? (
              <CheckSquare size={20} className="text-primary bg-white rounded" fill="currentColor" stroke="white" />
            ) : (
              <div className="w-5 h-5 border-2 border-gray-300 rounded-[4px]"></div>
            )}
          </button>
          
          <p className="text-[11px] text-gray-500 leading-tight">
            I have read, understood and agreed to the{' '}
            <span className="text-primary font-bold cursor-pointer">Terms & Conditions</span> and{' '}
            <span className="text-primary font-bold cursor-pointer">Privacy Policy</span>.
          </p>
        </div>

        {/* ---------------- Login Link Footer ---------------- */}
        <div className="w-full text-center mt-auto pb-8">
          <p className="text-[#1b1b1b] font-medium text-sm">
            Already have an OPay Account?{' '}
            <span 
              onClick={() => navigate('/login')} 
              className="text-primary font-bold cursor-pointer ml-1"
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


