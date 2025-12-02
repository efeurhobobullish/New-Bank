import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center">
      {/* Container - using your .layout but ensuring it fills height */}
      <div className="layout w-full min-h-screen flex flex-col pt-8 pb-6 relative">
        
        {/* Header: Back Button */}
        <div className="w-full flex items-center justify-start mb-10">
          <button className="p-2 -ml-2 hover:bg-line/20 rounded-full transition-colors cursor-pointer text-main">
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>
        </div>

        {/* Logo Section */}
        <div className="center w-full mb-16">
          <img 
            src="/qr_opay.png" 
            alt="OPay Logo" 
            className="h-12 md:h-14 object-contain" 
          />
        </div>

        {/* Form Section */}
        <div className="w-full flex flex-col gap-5">
          {/* Mobile/Email Input */}
          <input
            type="text"
            placeholder="Enter your Mobile No./Email"
            className="w-full h-14 bg-transparent border border-line rounded-lg px-5 text-lg text-main placeholder:text-muted placeholder:text-base focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          
          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter 6-digit Password"
            className="w-full h-14 bg-transparent border border-line rounded-lg px-5 text-lg text-main placeholder:text-muted placeholder:text-base focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />

          {/* Forgot Password */}
          <div className="flex justify-end w-full mt-1">
            <button className="text-primary font-bold text-[15px] cursor-pointer hover:opacity-80">
              Forgot Password?
            </button>
          </div>

          {/* Login Button - Made bigger and bolder */}
          <button className="btn btn-primary w-full h-14 rounded-full text-lg font-bold mt-4 shadow-lg shadow-primary/20">
            Log in
          </button>
        </div>

        {/* Spacer to push bottom content down */}
        <div className="flex-1"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center w-full gap-8 mt-8">
          
          {/* Sign Up Prompt */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-muted text-[15px]">
              Don't have an Opay Account yet?
            </p>
            <button className="text-primary font-bold text-[15px] cursor-pointer hover:underline">
              Click here to get one
            </button>
          </div>

          {/* Footer Logos - Significantly larger */}
          <div className="w-full center pb-2">
            <img 
              src="/footer.png" 
              alt="Licensed by CBN and insured by NDIC" 
              className="w-3/4 max-w-[280px] h-auto object-contain opacity-90" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}