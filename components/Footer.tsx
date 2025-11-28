import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-darker text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
             <h2 className="text-2xl font-bold mb-4 tracking-wider">百年海外</h2>
             <p className="text-gray-400 mb-6 leading-relaxed">
               安全永在。<br/>
               为众多企业和家庭一站式解决各类出海问题。
             </p>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 lg:col-span-2">
             <h3 className="text-lg font-bold text-brand-gold mb-6">联系方式</h3>
             <div className="space-y-4">
               <div className="flex items-start gap-3">
                 <MapPin className="text-brand-gold mt-1" size={20} />
                 <div>
                   <p className="text-white font-medium">深圳总部</p>
                   <p className="text-gray-400 text-sm">福田区卓越世纪中心4号楼18楼</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <MapPin className="text-brand-gold mt-1" size={20} />
                 <div>
                   <p className="text-white font-medium">香港办事处</p>
                   <p className="text-gray-400 text-sm">油尖旺区梳士巴利道星光行927C</p>
                 </div>
               </div>
             </div>
          </div>

          {/* QR Codes */}
          <div className="col-span-1">
             <h3 className="text-lg font-bold text-brand-gold mb-6">咨询专家</h3>
             <div className="flex gap-6">
                <div className="text-center">
                   <div className="w-24 h-24 bg-white p-2 rounded-lg mb-2">
                      {/* QR Placeholder */}
                      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SongBei_Contact`} alt="Song Bei QR" className="w-full h-full"/>
                   </div>
                   <p className="text-sm text-gray-300">宋 蓓</p>
                </div>
                <div className="text-center">
                   <div className="w-24 h-24 bg-white p-2 rounded-lg mb-2">
                      {/* QR Placeholder */}
                      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=QinLili_Contact`} alt="Qin Lili QR" className="w-full h-full"/>
                   </div>
                   <p className="text-sm text-gray-300">覃丽莉</p>
                </div>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-600 text-sm">
           &copy; {new Date().getFullYear()} 百年海外 (Century Overseas). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;