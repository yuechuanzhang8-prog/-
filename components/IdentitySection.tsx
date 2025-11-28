import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import SectionHeading from './SectionHeading';
import { IDENTITY_PATHS, MISCONCEPTIONS, IDENTITY_TYPES } from '../constants';
import { Check, X, Shield, ArrowRight } from 'lucide-react';

const data = [
  { name: '长居和永居 (PR)', value: 80 },
  { name: '入籍 (Citizenship)', value: 20 },
];

const COLORS = ['#d4af37', '#1e293b'];

const IdentitySection: React.FC = () => {
  return (
    <section id="identity" className="py-24 bg-brand-darker text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark/50 skew-x-12 transform translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="身份规划" 
          subtitle="不只是移民，更是为家族建立第二道安全防线"
          dark
        />

        {/* 1. Identity Paths (Bento Grid Style) */}
        <div className="mb-32">
          <p className="text-center text-brand-gold mb-8 uppercase tracking-widest text-sm font-bold">多元化配置 — 多个身份多条路</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {IDENTITY_PATHS.map((path, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-default">
                <div className="w-14 h-14 bg-brand-darker rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <path.icon className="text-brand-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white group-hover:text-brand-darker">{path.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-brand-darker/80">{path.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Misconceptions vs Reality (Split Layout) */}
        <div className="mb-32 bg-brand-dark rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Chart & Insight */}
            <div className="lg:col-span-5 p-12 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-transparent"></div>
               <h4 className="text-xl font-serif text-white mb-2 text-center">移民 <span className="text-brand-gold">≠</span> 换国籍</h4>
               <p className="text-gray-400 text-sm mb-8">80% 客户选择保留中国国籍</p>
               
               <div className="h-64 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                     <Pie
                       data={data}
                       cx="50%"
                       cy="50%"
                       innerRadius={60}
                       outerRadius={80}
                       paddingAngle={5}
                       dataKey="value"
                       stroke="none"
                     >
                       {data.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                       ))}
                     </Pie>
                     <Tooltip 
                        contentStyle={{backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff'}}
                        itemStyle={{color: '#d4af37'}}
                     />
                   </PieChart>
                 </ResponsiveContainer>
                 {/* Center Label */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-white">80%</span>
                        <span className="text-xs text-gray-500">选择永居</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Right: Misconception List */}
            <div className="lg:col-span-7 p-12 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-white">常见误区解析</h3>
              <div className="space-y-6">
                {MISCONCEPTIONS.map((item) => (
                  <div key={item.id} className="relative pl-8 border-l-2 border-brand-gold/30">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-gold"></span>
                    <h4 className="text-lg font-bold text-brand-gold mb-2">{item.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-red-500/10 p-3 rounded border border-red-500/20">
                            <div className="flex items-center gap-2 text-red-400 text-sm font-bold mb-1">
                                <X size={14} /> 误区
                            </div>
                            <p className="text-gray-400 text-sm">{item.myth}</p>
                        </div>
                        <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
                            <div className="flex items-center gap-2 text-green-400 text-sm font-bold mb-1">
                                <Check size={14} /> 真相
                            </div>
                            <p className="text-gray-300 text-sm">{item.reality}</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 3. Types Comparison (Pricing Table Style) */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">身份类型全景对比</h3>
            <p className="text-gray-400">选择最适合您家庭的方案</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-end">
            {IDENTITY_TYPES.map((type, idx) => {
              const isPremium = idx === 2; // Highlight Citizenship
              return (
                <div key={idx} className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${isPremium ? 'bg-gradient-to-b from-brand-gold/20 to-brand-dark border border-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] transform lg:-translate-y-4' : 'bg-slate-800/50 border border-slate-700'}`}>
                  {isPremium && (
                    <div className="bg-brand-gold text-brand-darker text-center py-1 text-xs font-bold uppercase tracking-widest">
                      一步到位 · 终极保障
                    </div>
                  )}
                  <div className="p-8">
                    <div className="mb-6">
                        <span className="text-sm text-gray-400 uppercase tracking-wider block mb-2">{type.name.split(' ')[1] || 'TYPE'}</span>
                        <h4 className="text-2xl font-bold text-white">{type.name.split(' ')[0]}</h4>
                        <p className="text-gray-400 mt-2 text-sm min-h-[40px]">{type.description}</p>
                    </div>
                    
                    <div className="h-px bg-white/10 w-full mb-6"></div>

                    <ul className="space-y-4 mb-8">
                      {type.features.map((feat, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <Check className={`mr-3 mt-0.5 flex-shrink-0 ${isPremium ? 'text-brand-gold' : 'text-gray-500'}`} size={16} />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-black/20 rounded-lg p-4">
                        <span className="text-xs text-gray-500 uppercase block mb-2 font-bold">推荐国家</span>
                        <div className="flex flex-wrap gap-2">
                            {type.examples.map((ex, i) => (
                                <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">{ex}</span>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IdentitySection;