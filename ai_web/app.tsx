
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/Login';
import AIChat from './components/AIChat';
import DashboardStats from './components/DashboardStats';
import { PageId, User } from './types';
// Fix: Import NAV_ITEMS from constants
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [user, setUser] = useState<User | null>(null);

  // Sync scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'features':
        return <Features />;
      case 'ai-helper':
        return <AIChat />;
      case 'analytics':
        return <DashboardStats />;
      case 'contact':
        return (
          <div className="py-24 px-4 text-center animate-in zoom-in duration-500">
            <div className="max-w-2xl mx-auto bg-white p-16 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100%]"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-indigo-100 rotate-6">
                  <i className="fa-solid fa-paper-plane text-4xl"></i>
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Let's Connect</h2>
                <p className="text-slate-500 mb-12 text-lg leading-relaxed">
                  Have a custom requirement? Our team is ready to help you deploy the next big thing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Email Us</div>
                    <div className="font-bold text-slate-700">hello@stickypro.ai</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Office</div>
                    <div className="font-bold text-slate-700">New York, NY</div>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        user={user} 
        onLogout={handleLogout}
      />
      
      <main className="flex-1 mt-20">
        {renderPage()}
      </main>

      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold">S</div>
                <span className="text-3xl font-black tracking-tighter">S-PRO</span>
              </div>
              <p className="text-slate-400 text-lg max-w-sm mb-10 leading-relaxed">
                The most advanced sticky navigation and AI multi-page dashboard for modern teams.
              </p>
              <div className="flex space-x-5">
                {['twitter', 'github', 'linkedin', 'dribbble'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-slate-700">
                    <i className={`fa-brands fa-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black text-xl mb-8 uppercase tracking-widest text-indigo-400 text-sm">Product</h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}>
                    <button onClick={() => setCurrentPage(item.id)} className="text-slate-400 hover:text-white transition-all text-lg font-medium">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xl mb-8 uppercase tracking-widest text-indigo-400 text-sm">Company</h4>
              <ul className="space-y-4 text-lg">
                <li><a href="#" className="text-slate-400 hover:text-white transition-all font-medium">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all font-medium">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all font-medium">Privacy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all font-medium">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-bold">
            <p>© 2024 S-PRO EXPLORER. ALL RIGHTS RESERVED.</p>
            <p className="mt-4 md:mt-0 flex items-center space-x-2">
              <span>DESIGNED WITH</span>
              <i className="fa-solid fa-heart text-red-500"></i>
              <span>IN NYC</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
