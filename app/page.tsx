import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-600/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase italic">WASSAL <span className="text-blue-600">AI</span></div>
        <div className="px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em]">Global SaaS v1.0</div>
      </nav>
      
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto pt-24 pb-32 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
          Intelligence for <br/> <span className="text-blue-600">Modern</span> Commerce.
        </h1>
        <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          The first AI-driven sentiment layer for Salla, Shopify, and Mercado Libre. Built for the next generation of global merchants.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="px-10 py-4 bg-white text-black font-black rounded-2xl shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer uppercase text-sm tracking-tight">
            Coming Soon to Salla
          </div>
          <div className="px-8 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-slate-400 font-medium text-sm backdrop-blur-sm">
            UK & Wyoming Registered
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: 'Llama-Powered', d: 'Custom-trained models optimized for Middle Eastern and Global dialects.' },
            { t: 'Universal Sync', d: 'Unified intelligence layer for Salla, Shopify, and WooCommerce.' },
            { t: 'Predictive Insights', d: 'Analyze order patterns and customer sentiment in real-time.' }
          ].map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-900/50 to-transparent border border-white/5 hover:border-blue-500/20 transition-all duration-500">
              <div className="text-blue-600 font-black mb-6 uppercase tracking-[0.3em] text-[10px]">0{i+1} — {f.t}</div>
              <p className="text-slate-400 leading-relaxed font-light text-lg">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-white/5">
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">
          © 2026 Wassal AI Technologies • London • Wyoming
        </p>
      </footer>
    </div>
  );
}