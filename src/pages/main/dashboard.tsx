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
  ShieldCheck,
  Briefcase
} from 'lucide-react';

// --- Helper Components ---

// Grid Item for Services (Airtime, Data, etc.)
const ServiceItem = ({ icon: Icon, label, badge }: { icon: any, label: string, badge?: string }) => (
  <div className="flex flex-col items-center gap-2 relative cursor-pointer active:scale-95 transition-transform">
    <div className="w-10 h-10 center text-primary bg-secondary/50 rounded-full mb-1">
      <Icon size={24} strokeWidth={2} />
    </div>
    <span className="text-[12px] text-main font-medium">{label}</span>
    {badge && (
      <div className="absolute -top-1 -right-2 bg-[#FF4D4F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-bl-lg rounded-tr-lg z-10">
        {badge}
      </div>
    )}
  </div>
);

// Quick Action Item (To Opay, To Bank, Withdraw)
const QuickAction = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer active:opacity-70 transition-opacity">
    <div className="w-12 h-12 bg-secondary rounded-2xl center text-primary shadow-sm">
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <span className="text-[13px] text-main font-medium">{label}</span>
  </div>
);

// Bottom Navigation Item
const NavItem = ({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 cursor-pointer ${active ? 'text-primary' : 'text-muted hover:text-main'}`}>
    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
    <span className={`text-[10px] font-medium ${active ? 'font-bold' : ''}`}>{label}</span>
  </div>
);

// --- Main Component ---

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F4F7] font-sans pb-28">
      {/* Container limited to mobile width on desktop */}
      <div className="layout px-4 pt-4 space-y-4">
        
        {/* 1. Header Section */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden border border-line">
              {/* Placeholder Avatar */}
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" className="w-full h-full object-cover" />
            </div>
            <span className="text-main font-bold text-[15px]">HI, BULLISH</span>
          </div>
          <div className="flex items-center gap-5 text-main">
            <Headphones size={22} className="cursor-pointer" />
            <ScanLine size={22} className="cursor-pointer" />
            <Bell size={22} className="cursor-pointer" />
          </div>
        </div>

        {/* 2. Green Balance Card */}
        <div className="bg-primary p-5 rounded-[20px] text-white shadow-lg shadow-primary/20 relative overflow-hidden">
          {/* Top Row: Available Balance Label */}
          <div className="flex items-center justify-between mb-3 z-10 relative">
            <div className="flex items-center gap-2 text-sm font-medium opacity-90">
              <ShieldCheck size={14} />
              <span>Available Balance</span>
              <button onClick={() => setShowBalance(!showBalance)} className="cursor-pointer hover:opacity-80 ml-1">
                {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-medium bg-white/20 px-2 py-1 rounded-md cursor-pointer hover:bg-white/30 transition-colors">
              <span>Transaction History</span>
              <ChevronRight size={12} />
            </div>
          </div>

          {/* Middle Row: Amount & Button */}
          <div className="flex items-center justify-between z-10 relative">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight">
                {showBalance ? '₦125,400.50' : '₦*******'}
              </span>
              <ChevronRight size={18} className="opacity-70" />
            </div>
            <button className="bg-white text-primary text-[13px] font-bold py-1.5 px-4 rounded-full shadow-sm active:scale-95 transition-transform">
              + Add Money
            </button>
          </div>
        </div>

        {/* 3. BizPayment Banner (Slim) */}
        <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-between shadow-sm cursor-pointer">
          <div className="flex items-center gap-2 text-main text-[13px]">
            <Briefcase size={16} className="text-primary" />
            <span className="text-muted">BizPayment: today received</span>
            <span className="font-bold text-main">₦0.00</span>
          </div>
          <ChevronRight size={16} className="text-muted" />
        </div>

        {/* 4. Recent Transactions (White Card) */}
        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-line/30 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary rounded-full center text-primary">
                  <ArrowUp size={16} strokeWidth={2.5} />
                </div>
                <span className="text-main text-[13px] font-medium">Transaction</span>
              </div>
              <div className="text-right">
                <div className="text-main font-bold text-[13px]">₦0.00</div>
                <div className="text-primary text-[10px] font-medium bg-secondary px-1.5 py-0.5 rounded text-center inline-block mt-0.5">Successful</div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Main Action Row (To Opay, To Bank, Withdraw) */}
        <div className="bg-white p-5 rounded-2xl shadow-sm grid grid-cols-3 gap-4">
          <QuickAction icon={Send} label="To Opay" />
          <QuickAction icon={Landmark} label="To Bank" />
          <QuickAction icon={Download} label="Withdraw" />
        </div>

        {/* 6. Services Grid */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <div className="grid grid-cols-4 gap-y-6 gap-x-2">
            <ServiceItem icon={Smartphone} label="Airtime" badge="Up to 6%" />
            <ServiceItem icon={Wifi} label="Data" badge="Up to 6%" />
            <ServiceItem icon={CircleDollarSign} label="Betting" badge="Up to 10%" />
            <ServiceItem icon={Tv} label="TV" />
            
            <ServiceItem icon={Vault} label="Safebox" />
            <ServiceItem icon={HandCoins} label="Loan" badge="Hot" />
            <ServiceItem icon={CalendarCheck} label="Check-in" />
            <ServiceItem icon={Grid} label="More" />
          </div>
        </div>

        {/* 7. Special Bonus Banner */}
        <div className="bg-gradient-to-r from-[#E6F9F1] to-[#FFF5F5] p-4 rounded-2xl shadow-sm relative overflow-hidden">
           <div className="flex items-center justify-between mb-2">
             <span className="text-main font-bold text-sm">Special Bonus For Your</span>
             <Gift size={16} className="text-purple-500" />
           </div>
           
           <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl flex items-center justify-between border border-white/50">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg center">
                  <Gift size={20} className="text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-main font-bold text-[13px]">Claim Your Rewards🎁</span>
                  <span className="text-muted text-[10px]">Grab FREE coupons</span>
                </div>
             </div>
             <button className="bg-primary text-white text-[12px] font-bold px-5 py-2 rounded-full shadow-md">
               GO
             </button>
           </div>
        </div>

        {/* 8. Hot Deal Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 bg-yellow-100 rounded-full center shrink-0">
             <span className="text-xl">⚽</span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-main font-bold text-[13px]">Hot Deal Just for You!</h4>
            <p className="text-muted text-[11px]">
              Deposit <span className="line-through">₦100</span>-₦1,000, Get ₦100 Instantly!
            </p>
          </div>
        </div>

      </div>

      {/* --- Bottom Navigation Fixed --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-line py-3 z-50 pb-5">
        <div className="layout flex items-center justify-around">
          <NavItem icon={Home} label="Home" active />
          <NavItem icon={Gift} label="Rewards" />
          <NavItem icon={PieChart} label="Finance" />
          <NavItem icon={CreditCard} label="Cards" />
          <NavItem icon={User} label="Me" />
        </div>
      </div>
    </div>
  );
}
