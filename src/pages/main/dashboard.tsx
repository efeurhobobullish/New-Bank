import {
  Bell,
  ScanLine,
  HelpCircle,
  Eye,
  EyeOff,
  ChevronRight,
  ArrowUp,
  Send,
  Banknote,
  Download,
  Phone,
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


// Helper component for Service Grid Items
const ServiceItem = ({ icon: Icon, label, color, badge }: any) => (
  <div className="flex flex-col items-center gap-2 relative cursor-pointer group">
    <div className={`w-12 h-12 ${color} rounded-full center text-white transition-transform group-hover:scale-105`}>
      <Icon size={24} />
    </div>
    <span className="text-[13px] text-main font-medium">{label}</span>
    {badge && (
      <div className="absolute -top-2 -right-1 bg-[#FF4D4F] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white z-10">
        {badge}
      </div>
    )}
  </div>
);

// Helper component for Bottom Nav Items
const NavItem = ({ icon: Icon, label, active }: any) => (
  <div className={`flex flex-col items-center gap-1 cursor-pointer ${active ? 'text-primary' : 'text-muted hover:text-main'}`}>
    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
    <span className="text-[11px] font-medium">{label}</span>
  </div>
);

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-24">
      {/* Main Layout Container */}
      <div className="layout px-4 pt-4 space-y-4">
        
        {/* Top App Bar */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://i.pravatar.cc/150?img=3" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <span className="text-main font-bold text-lg">HI, BULLISH</span>
          </div>
          <div className="flex items-center gap-5 text-main">
            <HelpCircle size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <ScanLine size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <Bell size={24} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-primary p-5 rounded-2xl text-white shadow-md shadow-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-medium opacity-90">
              <ShieldCheck size={16} />
              <span>Available Balance</span>
              <button onClick={() => setShowBalance(!showBalance)} className="cursor-pointer hover:opacity-70">
                {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:opacity-80">
              <span>Transaction History</span>
              <ChevronRight size={16} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-wider">
                {showBalance ? '₦125,400.50' : '₦*******'}
              </span>
              <ChevronRight size={20} className="opacity-80" />
            </div>
            <button className="btn btn-secondary text-sm py-2 px-5 shadow-sm">
              + Add Money
            </button>
          </div>
        </div>

        {/* BizPayment Banner */}
        <div className="bg-secondary p-3 rounded-xl flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <Briefcase size={18} />
            <span>BizPayment: today received</span>
            <span className="font-bold">₦0.00</span>
          </div>
          <ChevronRight size={18} className="text-primary" />
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex flex-col gap-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center justify-between border-b border-line/40 last:border-0 pb-3 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full center text-primary">
                    <ArrowUp size={20} />
                  </div>
                  <span className="text-main font-medium">Transaction</span>
                </div>
                <div className="text-right">
                  <div className="text-main font-bold">₦0.00</div>
                  <div className="text-primary text-xs font-medium">Successful</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-5 rounded-2xl shadow-sm grid grid-cols-3 gap-2">
          <ServiceItem icon={Send} label="To Opay" color="bg-green-500" />
          <ServiceItem icon={Banknote} label="To Bank" color="bg-blue-500" />
          <ServiceItem icon={Download} label="Withdraw" color="bg-red-500" />
        </div>

        {/* Services Grid */}
        <div className="bg-white p-5 rounded-2xl shadow-sm grid grid-cols-4 gap-y-6 gap-x-2">
          <ServiceItem icon={Phone} label="Airtime" color="bg-green-500" badge="Up to 6%" />
          <ServiceItem icon={Wifi} label="Data" color="bg-green-500" badge="Up to 6%" />
          <ServiceItem icon={CircleDollarSign} label="Betting" color="bg-green-500" badge="Up to 10%" />
          <ServiceItem icon={Tv} label="TV" color="bg-green-500" />
          <ServiceItem icon={Vault} label="Safebox" color="bg-green-500" />
          <ServiceItem icon={HandCoins} label="Loan" color="bg-green-500" badge="Hot" />
          <ServiceItem icon={CalendarCheck} label="Check-in" color="bg-green-500" />
          <ServiceItem icon={Grid} label="More" color="bg-green-500" />
        </div>

        {/* Special Bonus Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-main font-bold text-lg flex items-center gap-2">
              Special Bonus For Your
              <Gift className="text-purple-500" size={20} />
            </h3>
            <ChevronRight size={20} className="text-muted" />
          </div>
          <div className="bg-secondary/30 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/api/placeholder/60/60" alt="Gift" className="w-14 h-14 object-contain" />
              <div>
                <h4 className="text-main font-bold">Claim Your Rewards🎁</h4>
                <p className="text-muted text-sm">Grab FREE coupons & cashbacks!</p>
              </div>
            </div>
            <button className="btn btn-primary py-2 px-6 text-sm rounded-full">
              GO
            </button>
          </div>
        </div>

        {/* Hot Deal Banner */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 shrink-0">
            <img src="/api/placeholder/60/60" alt="Deal" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="text-main font-bold flex items-center gap-2">
              Hot Deal Just for You!
            </h4>
            <p className="text-muted text-sm">
              Deposit <span className="line-through">₦100</span>-₦1,000, Get ₦100 Instantly!
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-line py-3 z-50">
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