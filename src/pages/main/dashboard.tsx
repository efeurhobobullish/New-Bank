import React, { useState } from 'react';
import { 
  Headset, 
  ScanLine, 
  Bell, 
  Eye, 
  ChevronRight, 
  Landmark, 
  ArrowDownToLine,
  Smartphone,
  Wifi,
  Trophy,
  Tv,
  Lock,
  HandCoins,
  CalendarCheck,
  LayoutGrid,
  Gift,
  Megaphone,
  Gem,
  TrendingUp,
  CreditCard,
  User,
  ArrowUpRight,
  Plus
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);

  // Toggle balance visibility
  const toggleBalance = () => setShowBalance(!showBalance);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24 relative">
      
      {/* ---------------- Top Header ---------------- */}
      <div className="bg-gray-50 sticky top-0 z-10 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* User Avatar Placeholder */}
          <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden border border-gray-200">
             <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-[#1b1b1b] text-sm">HI, BULLISH</span>
        </div>
        
        <div className="flex items-center gap-5 text-gray-600">
          <div className="relative">
            <Headset size={22} strokeWidth={2} />
            <span className="absolute -top-1 -right-1 bg-pink-100 text-pink-600 text-[8px] px-1 rounded-full font-bold">HELP</span>
          </div>
          <ScanLine size={22} strokeWidth={2} />
          <Bell size={22} strokeWidth={2} />
        </div>
      </div>

      {/* ---------------- Scrollable Content ---------------- */}
      <div className="px-3 space-y-3">

        {/* --- Balance Card --- */}
        <div className="bg-primary rounded-xl p-4 text-white shadow-md relative overflow-hidden">
          {/* Top Row: Label & History Link */}
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-2 opacity-90">
              <span className="text-xs font-medium">Available Balance</span>
              <button onClick={toggleBalance}>
                {showBalance ? <Eye size={16} /> : <div className="w-4 h-4 bg-white/30 rounded-full" />}
              </button>
            </div>
            <div className="flex items-center gap-1 opacity-90">
              <span className="text-xs font-medium">Transaction History</span>
              <ChevronRight size={14} />
            </div>
          </div>

          {/* Balance & Add Money */}
          <div className="flex justify-between items-end mb-4">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold tracking-tight">
                {showBalance ? '₦0.00' : '****'}
              </h1>
              <ChevronRight size={24} className="mt-1 opacity-80" />
            </div>
            <button className="bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm active:scale-95 transition-transform">
              <Plus size={14} strokeWidth={3} /> Add Money
            </button>
          </div>

          {/* Ticker Footer (Inside Card) */}
          <div className="bg-white/10 -mx-4 -mb-4 px-4 py-2 flex items-center justify-between mt-2 backdrop-blur-sm">
             <div className="flex items-center gap-2 text-xs">
                <Megaphone size={14} className="fill-white/20" />
                <span className="truncate max-w-[200px] opacity-90">BizPayment: today received ₦0.00</span>
             </div>
             <ChevronRight size={14} className="opacity-70" />
          </div>
        </div>

        {/* --- Recent Transactions Preview --- */}
        <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col gap-3">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                    <ArrowUpRight size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Transaction</span>
               </div>
               <div className="text-right">
                  <p className="text-sm font-bold text-gray-800">₦0.00</p>
                  <p className="text-[10px] text-primary font-medium">Successful</p>
               </div>
            </div>
          ))}
        </div>

        {/* --- Quick Actions --- */}
        <div className="bg-white rounded-xl p-5 shadow-sm grid grid-cols-3 gap-4">
          <QuickActionItem icon={<div className="font-bold text-lg">O</div>} label="To Opay" isTextIcon />
          <QuickActionItem icon={<Landmark size={22} />} label="To Bank" />
          <QuickActionItem icon={<ArrowDownToLine size={22} />} label="Withdraw" />
        </div>

        {/* --- Services Grid --- */}
        <div className="bg-white rounded-xl p-4 shadow-sm grid grid-cols-4 gap-y-6 gap-x-2">
           <ServiceItem icon={<Smartphone size={22} />} label="Airtime" badge="Up to 6%" />
           <ServiceItem icon={<Wifi size={22} />} label="Data" badge="Up to 6%" />
           <ServiceItem icon={<Trophy size={22} />} label="Betting" badge="Up to 10%" />
           <ServiceItem icon={<Tv size={22} />} label="TV" />
           <ServiceItem icon={<Lock size={22} />} label="Safebox" />
           <ServiceItem icon={<HandCoins size={22} />} label="Loan" badge="Hot" badgeColor="bg-red-500" />
           <ServiceItem icon={<CalendarCheck size={22} />} label="Check-in" />
           <ServiceItem icon={<LayoutGrid size={22} />} label="More" />
        </div>

        {/* --- Special Bonus Banner --- */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 shadow-sm relative overflow-hidden">
           <h3 className="text-sm font-bold text-gray-800 mb-2">Special Bonus For Your</h3>
           <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shadow-sm">
                    <Gift size={20} className="text-blue-500" />
                 </div>
                 <div>
                    <p className="font-bold text-sm text-gray-800">Claim Your Rewards🎁</p>
                    <p className="text-[10px] text-gray-500">Grab FREE coupons & cashbacks!</p>
                 </div>
              </div>
              <button className="bg-primary text-white text-xs font-bold px-5 py-2 rounded-full shadow-md active:scale-95">
                 GO
              </button>
           </div>
        </div>

        {/* --- Invite Banner --- */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
           <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Megaphone size={20} className="text-primary" />
           </div>
           <div>
              <p className="font-bold text-sm text-gray-800">Cash up for grabs!</p>
              <p className="text-xs text-gray-500">Invite friends, earn up to ₦6,300 Bonus</p>
           </div>
        </div>

      </div>

      {/* ---------------- Bottom Navigation ---------------- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-6 flex justify-between items-center text-xs pb-4 md:pb-2">
        <NavItem icon={<div className="w-5 h-5 border-4 border-primary rounded-full"></div>} label="Home" active />
        <NavItem icon={<Gem size={22} />} label="Rewards" />
        <NavItem icon={<TrendingUp size={22} />} label="Finance" />
        <NavItem icon={<CreditCard size={22} />} label="Cards" />
        <NavItem icon={<User size={22} />} label="Me" />
      </div>

    </div>
  );
};

// --- Sub-components for cleaner code ---

const QuickActionItem = ({ icon, label, isTextIcon = false }: { icon: React.ReactNode, label: string, isTextIcon?: boolean }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer active:opacity-70">
    <div className={`w-11 h-11 rounded-full flex items-center justify-center shadow-sm ${isTextIcon ? 'bg-green-100 text-primary border border-green-200' : 'bg-green-50 text-primary'}`}>
       {icon}
    </div>
    <span className="text-xs font-medium text-gray-700">{label}</span>
  </div>
);

const ServiceItem = ({ icon, label, badge, badgeColor = "bg-red-400" }: { icon: React.ReactNode, label: string, badge?: string, badgeColor?: string }) => (
  <div className="flex flex-col items-center gap-2 relative cursor-pointer active:opacity-70">
     {badge && (
       <span className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${badgeColor} text-white text-[9px] px-1.5 py-0.5 rounded-tr-lg rounded-bl-lg font-bold whitespace-nowrap z-10 shadow-sm border border-white`}>
         {badge}
       </span>
     )}
     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary mb-1">
        {icon}
     </div>
     <span className="text-[11px] font-medium text-gray-600 text-center">{label}</span>
  </div>
);

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${active ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}>
     {icon}
     <span className="font-medium text-[10px]">{label}</span>
  </div>
);

export default Dashboard;


