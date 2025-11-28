import React from 'react';
import SectionHeading from './SectionHeading';
import { ShieldCheck, Ban, LockKeyhole, Globe2 } from 'lucide-react';
import { PARTNERS, COUNTRIES } from '../constants';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="他们都选我们" 
          subtitle="在不确定的时代，选择确定的安全"
        />

        {/* 1. The Manifesto (Conservative & Secure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           {/* Conservative Card */}
           <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-slate-800 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-800">
                    <Ban size={28} strokeWidth={1.5} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-slate-900">我们是「保守的公司」</h3>
                    <p className="text-slate-500 text-sm">谨慎甄选每一个项目</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <div className="group">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-red-500 font-black text-xl">NO.</span> 
                        无成功案例的产品
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed pl-10 border-l-2 border-slate-100 group-hover:border-red-500 transition-colors">
                        不做小白鼠。利润再高，如果风险不可控，我们坚决不推。
                    </p>
                 </div>
                 <div className="group">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-red-500 font-black text-xl">NO.</span> 
                        无法案的产品
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed pl-10 border-l-2 border-slate-100 group-hover:border-red-500 transition-colors">
                        不信空头支票。只有写入法案的政策，才是我们推荐的基础。
                    </p>
                 </div>
              </div>
           </div>

           {/* Secure Card */}
           <div className="bg-gradient-to-br from-brand-dark to-brand-darker p-10 rounded-2xl shadow-xl border-t-4 border-brand-gold text-white hover:transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                  <ShieldCheck size={120} />
              </div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-brand-gold">
                    <LockKeyhole size={28} strokeWidth={1.5} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white">有监管账户的公司</h3>
                    <p className="text-gray-400 text-sm">资金安全是底线</p>
                 </div>
              </div>
              <div className="flex flex-col justify-center h-48 relative z-10">
                 <div className="text-center bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold text-brand-gold mb-2">不成功 不付费</div>
                    <p className="text-gray-300 text-sm mb-4">如同使用支付宝担保交易一样安心</p>
                    <div className="w-12 h-1 bg-brand-gold mx-auto"></div>
                 </div>
              </div>
           </div>
        </div>

        {/* 2. Global Map Section */}
        <div className="bg-brand-darker rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
           {/* Map Background (Abstract) */}
           <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat filter invert"></div>
           
           <div className="relative z-10">
              <div className="text-center mb-12">
                  <div className="inline-block p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
                    <Globe2 size={32} />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 font-serif">超过 2000+ 客户的选择</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                      我们的足迹遍布全球，为您的海外之路提供坚实依靠。
                  </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-16">
                 {COUNTRIES.map((c, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 hover:bg-brand-gold hover:text-brand-darker hover:border-brand-gold transition-all cursor-default">
                       {c}
                    </span>
                 ))}
              </div>

              {/* Partners Strip */}
              <div className="border-t border-white/10 pt-10">
                 <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-8">Trusted Partners</p>
                 <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {PARTNERS.map((p, i) => (
                       <span key={i} className="text-xl font-bold font-serif text-white">{p}</span>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;