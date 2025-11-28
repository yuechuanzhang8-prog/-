import React from 'react';
import SectionHeading from './SectionHeading';
import { OFFICE_LOCATIONS } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <SectionHeading 
                    title="关于我们" 
                    subtitle="【百年海外】自2010年起深耕行业。从最初服务出海企业，到应客户要求提供全方位海外资产保全、教育规划。我们始终坚持“专业、诚信”的核心价值观。"
                    align="left"
                />
                <div className="prose prose-lg text-gray-500">
                    <p>
                        我们不追求最快的发展速度，但追求最稳健的服务质量。为众多企业和家庭一站式解决各类出海问题，目前服务过的企业和家庭均超过2000家。
                    </p>
                    <div className="mt-8 flex gap-8">
                        <div className="border-l-4 border-brand-gold pl-6">
                            <span className="block text-4xl font-bold text-brand-dark">2010</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider">成立于深圳</span>
                        </div>
                        <div className="border-l-4 border-brand-gold pl-6">
                            <span className="block text-4xl font-bold text-brand-dark">3</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider">全球运营中心</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative">
                <div className="absolute -inset-4 border-2 border-brand-gold/20 rounded-2xl transform rotate-3"></div>
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                    alt="Office Interior" 
                    className="relative rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-2xl font-bold text-brand-dark mb-10 text-center font-serif">全球办公网络</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICE_LOCATIONS.map((loc, index) => (
              <div key={index} className="group relative h-96 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-12 h-1 bg-brand-gold mb-4 w-0 group-hover:w-12 transition-all duration-500"></div>
                  <h3 className="text-3xl font-bold text-white mb-2">{loc.city}</h3>
                  <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    {loc.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;