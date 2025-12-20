
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'Fixed Navigation', icon: 'fa-thumbtack', desc: 'Navbar stays at the top using CSS position: fixed.', color: 'bg-blue-500' },
    { title: 'AI Integration', icon: 'fa-brain', desc: 'Powered by Gemini 3 Flash for intelligent responses.', color: 'bg-purple-500' },
    { title: 'Component Routing', icon: 'fa-route', desc: 'Seamlessly switch between pages without reloads.', color: 'bg-green-500' },
    { title: 'Visual Data', icon: 'fa-chart-pie', desc: 'Dynamic charts using Recharts library.', color: 'bg-orange-500' },
    { title: 'Tailwind Design', icon: 'fa-wind', desc: 'Beautifully styled using utility-first CSS.', color: 'bg-cyan-500' },
    { title: 'Responsive', icon: 'fa-mobile-screen', desc: 'Works perfectly on mobile, tablet, and desktop.', color: 'bg-rose-500' },
  ];

  return (
    <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Capabilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Explore the technology stack and features integrated into this modern web application.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all">
              <div className={`w-14 h-14 ${f.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <i className={`fa-solid ${f.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
