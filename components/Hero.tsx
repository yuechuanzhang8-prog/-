import React from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-brand-darker overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Architecture Background" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
          style={{ animationDuration: '30s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/90 via-brand-darker/50 to-brand-darker"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-[-5vh]">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 backdrop-blur-md fade-in-up">
           <ShieldCheck size={16} className="text-brand-gold" />
           <span className="text-brand-gold/90 tracking-widest uppercase text-xs font-bold">始于2010年 · 深圳 · 香港 · 福建</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight fade-in-up delay-100 font-serif">
          百年海外
        </h1>
        
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 fade-in-up delay-200"></div>

        <h2 className="text-3xl md:text-5xl font-light text-white mb-10 tracking-wide fade-in-up delay-200">
          <span className="gold-gradient-text font-semibold">安全永在</span> · 家族传承的守护者
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed fade-in-up delay-300">
          为高净值家庭提供 <span className="text-white font-medium">海外财富保全</span>、<span className="text-white font-medium">教育规划</span> 及 <span className="text-white font-medium">企业出海</span> 的一站式管家服务。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up delay-300">
          <button 
            onClick={() => document.getElementById('identity')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-brand-gold text-brand-darker font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          >
            <span className="relative z-10">开启身份规划</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
          </button>
          
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg hover:border-brand-gold hover:text-brand-gold transition-colors backdrop-blur-sm"
          >
            预约专家咨询
          </button>
        </div>
      </div>

      {/* Stats Ticker */}
      <div className="absolute bottom-0 w-full bg-white/5 border-t border-white/10 backdrop-blur-md py-6 z-20 hidden md:block fade-in-up delay-300">
        <div className="max-w-7xl mx-auto px-6 flex justify-around text-center">
            <div>
                <p className="text-3xl font-bold text-white">14<span className="text-brand-gold text-sm align-top">+</span></p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">年行业经验</p>
            </div>
            <div className="w-px bg-white/10 h-10 self-center"></div>
            <div>
                <p className="text-3xl font-bold text-white">2000<span className="text-brand-gold text-sm align-top">+</span></p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">服务家庭</p>
            </div>
            <div className="w-px bg-white/10 h-10 self-center"></div>
            <div>
                <p className="text-3xl font-bold text-white">100<span className="text-brand-gold text-sm align-top">%</span></p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">资金安全保障</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;