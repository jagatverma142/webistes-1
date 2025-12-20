
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '👋 Hi! I can help you with CSS layouts, Sticky headers, or just general React tips. What\'s on your mind?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getGeminiResponse(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <div className="py-12 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-indigo-100 border border-slate-100 overflow-hidden flex flex-col md:flex-row h-[700px]">
          {/* Sidebar */}
          <div className="w-full md:w-80 bg-slate-50 p-8 border-r border-slate-100 hidden md:block">
            <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tighter">AI Assistant</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-bold text-indigo-600 mb-1 uppercase">Model</div>
                <div className="font-bold text-slate-700">Gemini 3 Flash</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-bold text-indigo-600 mb-1 uppercase">Context</div>
                <div className="font-bold text-slate-700">Frontend Engineering</div>
              </div>
            </div>
            <div className="mt-auto pt-40">
              <p className="text-xs font-bold text-slate-400 leading-relaxed">
                Powered by Google GenAI SDK. Ask about StickyNav patterns or complex React architectures.
              </p>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-white">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-black text-slate-900">Live Session</span>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-6 py-4 rounded-[2rem] ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-xl shadow-indigo-100' 
                      : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100 shadow-sm'
                  }`}>
                    <p className="whitespace-pre-wrap leading-relaxed font-medium">{msg.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-50 px-6 py-4 rounded-[2rem] rounded-tl-none border border-slate-100 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-50/50 border-t border-slate-100">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a technical question..."
                  className="w-full pl-6 pr-16 py-5 bg-white border border-slate-200 rounded-3xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm font-medium"
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white w-12 h-12 flex items-center justify-center rounded-2xl transition-all shadow-lg shadow-indigo-100 active:scale-90"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
