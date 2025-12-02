import { useState } from 'react';
import {
  Bell,
  ScanLine,
  Headphones,
  Eye,
  EyeOff,
  ChevronRight,
  ArrowUp,
  Send,
  Landmark,
  Download,
  Smartphone,
  Wifi,
  CircleDollarSign,
  Tv,
  Vault,
  HandCoins,
  CalendarCheck,
  Grid,
  Home,
  Gift,
  PieChart,
  CreditCard,
  User,
  Briefcase,
  ShieldCheck
} from 'lucide-react';

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(false);

  // Helper for Service Grid
  const ServiceIcon = ({ icon: Icon, label, badge, badgeColor }: any) => (
    <div className="flex flex-col items-center gap-1.5 relative cursor-pointer active:scale-95 transition-transform">
      <div className="relative">
        <div className="w-10 h-10 flex items-center justify-center text-[#00C675] bg-[#E8F9F1] rounded-full">
          <Icon size={22} strokeWidth={2.2} />
        </div>
        {badge && (
          <div className={`absolute -top-2 -right-4 text-[9px] text-white font-bold px-1.5 py-0.5 rounded-tr-lg rounded-bl-lg border border-white z-10 ${badgeColor === 'red' ? 'bg-[#FF4D4F]' : 'bg-[#FF4D4F]'}`}>
            {badge}
          </div>
        )}
      </div>
      <span className="text-[11px] text-[#272D4E] font-medium tracking-tight">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F1F2F4] font-sans pb-24">
      {/* Mobile Container */}
      <div className="max-w-[500px] mx-auto min-h-screen bg-[#F1F2F4] relative">
        
        {/* --- Header --- */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <span className="text-[#1A1E30] font-bold text-[15px]">HI, BULLISH</span>
          </div>
          <div className="flex items-center gap-5 text-[#1A1E30]">
             <div className="relative">
                <Headphones size={22} strokeWidth={2} />
                <div className="absolute -top-1 -right-2 bg-pink-100 text-[8px] text-pink-600 font-bold px-1 rounded-sm">HELP</div>
             </div>
             <ScanLine size={22} strokeWidth={2} />
             <Bell size={22} strokeWidth={2} />
          </div>
        </div>

        {/* --- Main Content Padding --- */}
        <div className="px-3 space-y-3">

          {/* --- Green Balance Card --- */}
          <div className="bg-[#00C675] rounded-[20px] p-5 text-white shadow-lg shadow-[#00C675]/20 relative overflow-hidden">
             {/* Top Row */}
             <div className="flex items-center justify-between mb-1 z-10 relative">
               <div className="flex items-center gap-2 text-sm font-medium">
                 <ShieldCheck size={14} className="opacity-90" />
                 <span className="opacity-95">Available Balance</span>
                 <button onClick={() => setShowBalance(!showBalance)} className="ml-1 outline-none">
                   {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
                 </button>
               </div>
               <div className="flex items-center gap-1 text-[11px] opacity-90 cursor-pointer">
                 <span>Transaction History</span>
                 <ChevronRight size={14} />
               </div>
             </div>

             {/* Balance Row */}
             <div className="flex items-center justify-between z-10 relative">
               <div className="flex items-center gap-2">
                 <span className="text-[26px] font-bold tracking-wide">
                   {showBalance ? '₦125,400.50' : '₦ * * * * * *'}
                 </span>
                 <ChevronRight size={20} className="opacity-80" />
               </div>
             </div>

             {/* Add Money Button (Floating right) */}
             <div className="flex justify-end mt-2">
                <button className="bg-white text-[#00C675] text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-transform flex items-center gap-1">
                   + Add Money
                </button>
             </div>
          </div>

          {/* --- BizPayment Strip --- */}
          <div className="bg-[#E8F9F1] px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer">
             <div className="flex items-center gap-2 text-[12px]">
               <Briefcase size={16} className="text-[#00C675]" />
               <span className="text-[#555]">BizPayment: today received</span>
               <span className="font-bold text-[#00C675]">₦0.00</span>
             </div>
             <ChevronRight size={14} className="text-[#00C675]" />
          </div>

          {/* --- Recent Transactions (Simplified) --- */}
          <div className="bg-white rounded-2xl px-4 py-1 shadow-sm">
             {[1, 2].map((_, i) => (
               <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-[#E8F9F1] flex items-center justify-center">
                        <ArrowUp size={16} className="text-[#00C675]" />
                     </div>
                     <span className="text-[#1A1E30] text-[13px] font-medium">Transaction</span>
                  </div>
                  <div className="text-right">
                     <div className="text-[#1A1E30] font-bold text-[13px]">₦0.00</div>
                     <div className="text-[#00C675] text-[10px] font-medium">Successful</div>
                  </div>
               </div>
             ))}
          </div>

          {/* --- Quick Actions (To Opay, To Bank, Withdraw) --- */}
          <div className="bg-white rounded-2xl p-4 shadow-sm grid grid-cols-3 gap-2">
             <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F9F1] flex items-center justify-center text-[#00C675]">
                   <Send size={22} />
                </div>
                <span className="text-[12px] font-medium text-[#1A1E30]">To Opay</span>
             </div>
             <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F9F1] flex items-center justify-center text-[#00C675]">
                   <Landmark size={22} />
                </div>
                <span className="text-[12px] font-medium text-[#1A1E30]">To Bank</span>
             </div>
             <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F9F1] flex items-center justify-center text-[#00C675]">
                   <Download size={22} />
                </div>
                <span className="text-[12px] font-medium text-[#1A1E30]">Withdraw</span>
             </div>
          </div>

          {/* --- Services Grid --- */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
             <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                <ServiceIcon icon={Smartphone} label="Airtime" badge="Up to 6%" badgeColor="red" />
                <ServiceIcon icon={Wifi} label="Data" badge="Up to 6%" badgeColor="red" />
                <ServiceIcon icon={CircleDollarSign} label="Betting" badge="Up to 10%" badgeColor="red" />
                <ServiceIcon icon={Tv} label="TV" />
                
                <ServiceIcon icon={Vault} label="Safebox" />
                <ServiceIcon icon={HandCoins} label="Loan" badge="Hot" badgeColor="red" />
                <ServiceIcon icon={CalendarCheck} label="Check-in" />
                <ServiceIcon icon={Grid} label="More" />
             </div>
          </div>

          {/* --- Special Bonus Banner --- */}
          <div className="bg-gradient-to-b from-[#E6FDF5] to-white p-3 rounded-2xl shadow-sm border border-[#E6FDF5]">
             <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-[#1A1E30] font-bold text-[14px]">Special Bonus For Your</span>
                <Gift size={18} className="text-purple-500" />
             </div>
             
             <div className="bg-gradient-to-r from-white to-[#F0FAF6] p-3 rounded-xl flex items-center justify-between shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Gift size={20} className="text-blue-500" />
                   </div>
                   <div>
                      <div className="text-[#1A1E30] font-bold text-[13px] flex items-center gap-1">
                        Claim Your Rewards <span className="text-lg">🎁</span>
                      </div>
                      <div className="text-gray-400 text-[10px]">Grab FREE coupons & cashbacks!</div>
                   </div>
                </div>
                <button className="bg-[#00C675] text-white text-[12px] font-bold px-5 py-1.5 rounded-full">
                   GO
                </button>
             </div>
          </div>

          {/* --- Hot Deal --- */}
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl shrink-0">
                ⚽
             </div>
             <div>
                <h4 className="text-[#1A1E30] font-bold text-[13px]">Hot Deal Just for You!</h4>
                <p className="text-gray-400 text-[11px]">
                   Deposit <span className="line-through">₦100</span>-₦1,000, Get ₦100 Instantly!
                </p>
             </div>
          </div>

        </div>
      </div>

      {/* --- Bottom Navigation --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 pb-5 z-50">
        <div className="max-w-[500px] mx-auto flex items-center justify-around">
           <div className="flex flex-col items-center gap-1 cursor-pointer text-[#00C675]">
              <div className="relative">
                 <Home size={24} strokeWidth={2.5} />
                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
              </div>
              <span className="text-[10px] font-bold">Home</span>
           </div>

           <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-[#00C675]">
              <Gift size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Rewards</span>
           </div>

           <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-[#00C675]">
              <PieChart size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Finance</span>
           </div>

           <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-[#00C675]">
              <CreditCard size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Cards</span>
           </div>

           <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-[#00C675]">
              <User size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Me</span>
           </div>
        </div>
      </div>

    </div>
  );
}

