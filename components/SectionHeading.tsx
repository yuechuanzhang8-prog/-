import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, dark = false, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} fade-in-up`}>
      {align === 'center' && (
        <span className="text-brand-gold font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Century Overseas</span>
      )}
      <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-serif ${dark ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-brand-gold ${align === 'center' ? 'mx-auto' : 'mr-auto'} mb-8`}></div>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;