
import React from 'react';

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="pt-20 pb-32 px-4 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-50 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 text-sm font-bold tracking-wide text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full animate-bounce duration-[3000ms]">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping"></span>
              <span>VERSION 2.5 IS NOW LIVE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Build Faster. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-300% animate-gradient">Design Smarter.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stop fighting with CSS. Our dynamic multi-page boilerplate comes with 
              <b> Gemini 3 </b> integration and <b> Recharts </b> built-in.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <button 
                onClick={() => onNavigate('login')}
                className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg overflow-hidden transition-all hover:pr-14"
              >
                <span className="relative z-10">Get Started Free</span>
                <i className="fa-solid fa-arrow-right absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></i>
              </button>
              <button 
                onClick={() => onNavigate('features')}
                className="px-10 py-5 rounded-2xl font-black text-lg text-slate-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Watch Demo
              </button>
            </div>

            <div className="mt-16 flex items-center justify-center lg:justify-start space-x-8">
              <div>
                <div className="text-3xl font-black text-slate-900">12K+</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Users</div>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl font-black text-slate-900">99.9%</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Uptime</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100">
                <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <i className="fa-solid fa-display text-6xl text-indigo-400 mb-6 animate-pulse"></i>
                    <div className="space-y-3">
                      <div className="h-2 w-48 bg-slate-800 rounded-full mx-auto"></div>
                      <div className="h-2 w-32 bg-slate-800 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Marquee Section */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
        <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="flex items-center space-x-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <i className="fa-brands fa-react text-3xl"></i>
              <span className="font-bold text-xl text-slate-900">ReactJS</span>
              <div className="w-2 h-2 rounded-full bg-slate-200 mx-8"></div>
              <i className="fa-brands fa-google text-3xl"></i>
              <span className="font-bold text-xl text-slate-900">Gemini AI</span>
              <div className="w-2 h-2 rounded-full bg-slate-200 mx-8"></div>
              <i className="fa-brands fa-aws text-3xl"></i>
              <span className="font-bold text-xl text-slate-900">CloudFlow</span>
              <div className="w-2 h-2 rounded-full bg-slate-200 mx-8"></div>
            </div>
          ))}
        </div>
      </section>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .bg-300% { background-size: 300% 300%; }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
