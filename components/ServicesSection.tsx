import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { SERVICE_DOMESTIC, SERVICE_OVERSEAS, SERVICE_CORPORATE } from '../constants';
import { Briefcase, Home, Plane, ArrowRight, Building, GraduationCap, Coins } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'domestic' | 'overseas' | 'corporate'>('domestic');

  const tabs = [
    { id: 'domestic', label: '国内管家服务', icon: Home },
    { id: 'overseas', label: '海外落地安家', icon: Plane },
    { id: 'corporate', label: '企业出海陪跑', icon: Briefcase },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="核心服务体系" 
          subtitle="全流程 · 一站式 · 闭环服务"
        />

        {/* Modern Pill Tabs */}
        <div className="flex justify-center mb-16">
            <div className="inline-flex bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                            activeTab === tab.id 
                            ? 'bg-brand-dark text-white shadow-lg transform scale-105' 
                            : 'text-gray-500 hover:text-brand-dark'
                        }`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
            {activeTab === 'domestic' && (
              <div className="fade-in-up">
                <div className="text-center mb-12">
                   <h3 className="text-3xl font-bold text-brand-dark mb-4">私人定制 · 专属顾问团</h3>
                   <p className="text-gray-500 max-w-2xl mx-auto">
                     打破信息差，为您组建包含律师、税务师、教育专家的“三位一体”服务小组，精准匹配家庭需求。
                   </p>
                </div>
                
                {/* Timeline Process */}
                <div className="relative max-w-5xl mx-auto">
                   <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10">
                      {SERVICE_DOMESTIC.slice(0, 3).map((step, i) => (
                         <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all text-center group">
                            <div className="w-12 h-12 rounded-full bg-brand-gold text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                                {i + 1}
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-brand-dark">{step.split('，')[0]}</h4>
                            <p className="text-gray-500 text-sm">{step.split('，')[1] || '专业服务'}</p>
                         </div>
                      ))}
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10 mt-8 md:mt-12">
                      {SERVICE_DOMESTIC.slice(3).map((step, i) => (
                         <div key={i+3} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all text-center group">
                            <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                                {i + 4}
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-brand-dark">{step.split('、')[0]}</h4>
                            <p className="text-gray-500 text-sm truncate">{step}</p>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'overseas' && (
              <div className="fade-in-up">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-brand-dark mb-6">无缝衔接，他乡亦故乡</h3>
                        <p className="text-gray-600 mb-8 text-lg">
                            从您踏上异国土地的那一刻起，我们的服务才刚刚开始。全方位的落地安家服务，助您快速融入当地生活。
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {SERVICE_OVERSEAS.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <div className="w-8 h-8 rounded bg-brand-gold/20 flex items-center justify-center text-brand-gold-dark flex-shrink-0">
                                        <Plane size={16} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=600&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" alt="Overseas Life" />
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Family" />
                    </div>
                 </div>
              </div>
            )}

            {activeTab === 'corporate' && (
              <div className="fade-in-up bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <div>
                        <div className="inline-block bg-brand-gold text-brand-darker font-bold px-3 py-1 rounded mb-4 text-xs">企业出海引擎</div>
                        <h3 className="text-3xl font-bold mb-6">助力中国企业全球化布局</h3>
                        <ul className="space-y-4 mb-8">
                            {SERVICE_CORPORATE.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <ArrowRight className="text-brand-gold flex-shrink-0 mt-1" size={16} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4">
                            <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex-1">
                                <Building className="text-brand-gold mb-2" />
                                <div className="text-2xl font-bold">盈科/港勤</div>
                                <div className="text-xs text-gray-400">战略合作伙伴</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex-1">
                                <Coins className="text-brand-gold mb-2" />
                                <div className="text-2xl font-bold">BUD专项</div>
                                <div className="text-xs text-gray-400">最高700万补贴</div>
                            </div>
                        </div>
                   </div>
                   <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" alt="Corporate Office" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                            <p className="font-serif italic text-lg text-white">"既节约创业成本，又提升企业形象"</p>
                            <p className="text-sm text-brand-gold mt-2">— 香港共享海景办公室</p>
                        </div>
                   </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;