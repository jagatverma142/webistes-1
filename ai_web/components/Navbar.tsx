
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { PageId, User } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 py-2' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-indigo-200 shadow-lg group-hover:rotate-12 transition-all">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900">
              S-PRO
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  currentPage === item.id 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <i className={`fa-solid ${item.icon} opacity-70`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3 bg-white p-1 pr-4 rounded-full border border-slate-200 shadow-sm">
                <img src={user.avatar} className="w-8 h-8 rounded-full border border-slate-100" alt="avatar" />
                <span className="text-sm font-bold text-slate-700 hidden lg:block">{user.name}</span>
                <button onClick={onLogout} className="text-slate-400 hover:text-red-500 transition-colors">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onNavigate('login')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-2xl font-bold transition-all shadow-md shadow-indigo-100 active:scale-95"
              >
                Sign In
              </button>
            )}
            
            <button 
              className="md:hidden text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setIsMobileMenuOpen(false); }}
                className={`w-full text-left flex items-center space-x-3 px-4 py-4 rounded-xl font-bold ${
                  currentPage === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600'
                }`}
              >
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
