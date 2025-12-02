import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Main Container using your .layout class */}
      <div className="layout min-h-screen flex flex-col px-6 py-6">
        
        {/* Top Header: Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 -ml-2 text-main hover:bg-line/20 rounded-full transition-colors cursor-pointer">
            <ChevronLeft size={28} />
          </button>
        </div>

        {/* Logo Section */}
        <div className="center mb-12">
          <img 
            src="/qr_opay.png" 
            alt="Logo" 
            className="h-10 object-contain" 
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-4 w-full">
          <input
            type="text"
            placeholder="Enter your Mobile No./Email"
            className="w-full bg-transparent border border-line rounded-lg px-4 py-4 text-main placeholder:text-muted focus:border-primary transition-colors text-[15px]"
          />
          
          <input
            type="password"
            placeholder="Enter 6-digit Password"
            className="w-full bg-transparent border border-line rounded-lg px-4 py-4 text-main placeholder:text-muted focus:border-primary transition-colors text-[15px]"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mt-4 mb-10">
          <button className="text-primary font-bold text-sm cursor-pointer hover:opacity-80">
            Forgot Password?
          </button>
        </div>

        {/* Login Button using your .btn-primary class */}
        <button className="btn btn-primary w-full py-4 rounded-full text-base shadow-none">
          Log in
        </button>

        {/* Spacer to push footer down */}
        <div className="flex-1"></div>

        {/* Sign Up Prompt */}
        <div className="center flex-col text-center mb-10">
          <p className="text-muted text-sm">
            Don't have an Opay Account yet?
          </p>
          <button className="text-primary font-bold text-sm mt-1 cursor-pointer hover:opacity-80">
            Click here to get one
          </button>
        </div>

        {/* Footer Image */}
        <div className="center pb-4">
          <img 
            src="/footer.png" 
            alt="Licensed by CBN" 
            className="h-6 object-contain grayscale opacity-80" 
          />
        </div>

      </div>
    </div>
  );
}
