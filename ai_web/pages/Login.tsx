
import React, { useState } from 'react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      onLogin({
        name: email.split('@')[0] || 'Guest Pro',
        email: email || 'guest@example.com',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-md bg-white/70 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl border border-white/50 animate-in zoom-in duration-500">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-200">
            <i className="fa-solid fa-lock text-2xl"></i>
          </div>
          <h2 className="text-3xl font-black text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Sign in to unlock advanced AI features</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between ml-1">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <button type="button" className="text-sm text-indigo-600 font-bold hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <i className="fa-solid fa-key absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input
                required
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-slate-200 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <i className="fa-solid fa-circle-notch animate-spin"></i>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Or continue with</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="flex items-center justify-center space-x-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm">
              <i className="fa-brands fa-google text-red-500"></i>
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm">
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
